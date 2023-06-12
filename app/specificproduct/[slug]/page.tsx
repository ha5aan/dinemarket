'use client'
import React, { useContext,useEffect,useState } from 'react'
import{use} from "react"
import { createClient } from "next-sanity";
import useSWR from 'swr'
import Quantity from '../../Components/Quantity';
import { BiCart } from 'react-icons/bi';
import { CounterContext } from '../../context/cartItems.context';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { get } from 'http';
import { Toaster, toast } from 'react-hot-toast';
async function getProducts(productID:string) {
  const getItemByIdQuery = `*[_id == $itemId][0]`;
  const result = await client.fetch(getItemByIdQuery, { itemId:productID });
  console.log(result)
  return  result
  }
  const client = createClient({
    projectId: "8xktior4",
    dataset: "production",
    apiVersion: "2023-06-05",
    useCdn: false
  });
const Page = ({params}:any) => {
const [currentElement, setCurrentElement] = useState<any>()
const [currentItemCount, setCurrentItemCount] = useState(1)



    const { state,dispatch } = useContext(CounterContext);
    const router = useRouter();
    const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log(searchParams.toString(), params)
  useEffect(()=>{


    getProducts(params.slug).then((x)=>{
      console.log(x)
      setCurrentElement(x)
    })
  },[])
    const getCount = async ()=>{
 
        const response = await fetch('/api/getcountofelements')
     
        if(response.ok){
            var formattedresponse  = await response.json();
            console.log(formattedresponse)
            return(Number( formattedresponse.count))
        }else{
          return 0;
        }
        }



const AddToCart = async (quantity:number, product:string,image:string,price:number,description:string,Id :string)=>{
    
  
  var object={
    product:product,
    quantity:quantity,
    image:image,
    price:price,
    desc: description,
    pId:Id       
      }
  
  // const response = await fetch('/api/cart', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         product:product,
  //         quantity:quantity,
  //         image:image,
  //         price:price,
  //         desc: description,
  //         pId:Id       
  //           }),
  //     });
var array=[];
      var get = localStorage.getItem("cart");
      array.push(object)
      if(get==null || get==undefined){
        localStorage.setItem("cart", JSON.stringify(array))
        dispatch({ type:"INCREMENT", payload:array.length  });
      }else{
         array = JSON.parse(localStorage.getItem("cart") as string)
        array.push(object)
        dispatch({ type:"INCREMENT", payload:array.length  });
        localStorage.setItem("cart", JSON.stringify(array))

      }
      toast.success("Item Added to Cart Sucessfully")
    
      
     
     
}


  return (
    <div className='font-sora py-8 my-3 w-[82%] m-auto'>
        <Toaster />
{currentElement &&

        <div className='flex-col  flex gap-4 justify-around lg:flex-row'>
          <div className='flex gap-2 '>
            <div className='flex flex-col gap-3'>
            <img src={currentElement.imageLink} alt="" height={100} width={100} />
          
            </div>
<div className='lg:w-[65%]' >   

<img className="object-cover" src={currentElement.imageLink} width={"100%"} height={"70%"}/>
</div>
</div>
<div className='mt-16'>
    <p className='text-2xl font-[400]  tracking-[.05em]  text-[#212121]'>{currentElement.mainHeading}
</p>
<p className='text-2xl font-[600] opacity-30 tracking-[.05em]  text-[#212121]'>{currentElement.subHeading}
</p>
<div className='my-4'>
<p className='text-lg font-[700] tracking-[.05em]  text-[#212121]'>SELECT SIZE
</p>
<div>
    <ul className='list-none flex justify-between'>
        <li className='w-1/5 p-1 font-[700] text-center h-[35px] flex justify-center content-center rounded-full text-[#666] text-lg hover:shadow-lg '> XS </li>
        <li className='w-1/5 p-1 font-[700] text-center h-[35px] flex justify-center content-center rounded-full text-[#666] text-lg hover:shadow-lg '> S </li>
        <li className='w-1/5 p-1 font-[700] text-center h-[35px] flex justify-center content-center rounded-full text-[#666] text-lg hover:shadow-lg '> M </li>
        <li className='w-1/5 p-1 font-[700] text-center h-[35px] flex justify-center content-center rounded-full text-[#666] text-lg hover:shadow-lg '> L </li>
        <li className='w-1/5 p-1 font-[700] text-center h-[35px] flex justify-center content-center rounded-full text-[#666] text-lg hover:shadow-lg '> XL </li>
    </ul>
</div>

</div>
<div className='mt-4'> Quantity <Quantity setCurrentItemCount= {setCurrentItemCount} currentItemCount={currentItemCount} /> </div> 
<div className='mt-4'>
<button onClick={()=> AddToCart(currentItemCount,currentElement.mainHeading,currentElement.imageLink,currentElement.price,currentElement.subHeading,currentElement._id)} className='bg-[#212121] text-white p-2 border-2 border-gray-500'>
        <div className='flex text-base content-center'>
        
            <div>
Add to Cart
</div>
</div>

</button>
<div> $ {currentElement.price}</div>
</div>
</div>

        </div>
}
        </div>
  )
}

export default Page