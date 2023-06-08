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
async function getProducts(productID:string) {
  const getItemByIdQuery = `*[_type == 'female' && _id == $itemId][0]`;
  const result = await client.fetch(getItemByIdQuery, { itemId:productID });
  console.log(result)
  return 
  }
  const client = createClient({
    projectId: "8xktior4",
    dataset: "production",
    apiVersion: "2023-06-05",
    useCdn: false
  });
const Page = ({params}:any) => {
const [currentElement, setCurrentElement] = useState<any>()


var clothes = use(getProducts(params.slug))
console.log(clothes)
    const { state,dispatch } = useContext(CounterContext);
    const router = useRouter();
    const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log(searchParams.toString(), params)
  
    const getCount = async ()=>{
 
        const response = await fetch('http://localhost:3000/api/getcountofelements')
     
        if(response.ok){
            var formattedresponse  = await response.json();
            console.log(formattedresponse)
            return(Number( formattedresponse.count))
        }else{
          return 0;
        }
        }



const AddToCart = async (quantity:number, product:string)=>{
    const response = await fetch('http://localhost:3000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"quantity":quantity, "product": product}),
      });

      getCount().then((count) => {
        console.log(count, "what is this")
        dispatch({ type:"INCREMENT", payload: count });
      });
}


  return (
    <div className='font-sora py-8 my-3 w-[82%] m-auto'>
        <div className='flex gap-4 justify-around'>
            <div className='flex flex-col gap-3'>
            <img src="https://cdn.sanity.io/images/dow10h3v/production/ed4960c6cf46ac416ae2fa6c0a3accbaa551457e-278x296.png" alt="" height={100} width={100} />
            <img src="https://cdn.sanity.io/images/dow10h3v/production/ed4960c6cf46ac416ae2fa6c0a3accbaa551457e-278x296.png" alt="" height={100} width={100} />
            <img src="https://cdn.sanity.io/images/dow10h3v/production/ed4960c6cf46ac416ae2fa6c0a3accbaa551457e-278x296.png" alt="" height={100} width={100} />
            <img src="https://cdn.sanity.io/images/dow10h3v/production/ed4960c6cf46ac416ae2fa6c0a3accbaa551457e-278x296.png" alt="" height={100} width={100} />
            </div>
<div className='w-[65%]' >   

<img className="object-cover" src="https://cdn.sanity.io/images/dow10h3v/production/ffc858fc182553bee2aaff34fe728bf07d15f2b5-278x296.png" width={"100%"} height={"70%"}/>
</div>

<div className='mt-16'>
    <p className='text-2xl font-[400]  tracking-[.05em]  text-[#212121]'>Flex Sweatpants
</p>
<p className='text-2xl font-[600] opacity-30 tracking-[.05em]  text-[#212121]'>Pants
</p>
<div className='my-4'>
<p className='text-lg font-[700] tracking-[.05em]  text-[#212121]'>SELECT SIZE
</p>
<div>
    <ul className='list-none flex justify-between'>
        <li className='w-[35px] p-1 font-[700] text-center h-[35px] flex justify-center content-center rounded-full text-[#666] text-lg hover:shadow-lg '> XS </li>
        <li className='w-[35px] p-1 font-[700] text-center h-[35px] flex justify-center content-center rounded-full text-[#666] text-lg hover:shadow-lg '> S </li>
        <li className='w-[35px] p-1 font-[700] text-center h-[35px] flex justify-center content-center rounded-full text-[#666] text-lg hover:shadow-lg '> M </li>
        <li className='w-[35px] p-1 font-[700] text-center h-[35px] flex justify-center content-center rounded-full text-[#666] text-lg hover:shadow-lg '> L </li>
        <li className='w-[35px] p-1 font-[700] text-center h-[35px] flex justify-center content-center rounded-full text-[#666] text-lg hover:shadow-lg '> XL </li>
    </ul>
</div>

</div>
<div className='mt-4'> Quantity <Quantity/> </div> 
<div className='mt-4'>
<button onClick={()=> AddToCart(2,"jeans")} className='bg-[#212121] text-white p-2 border-2 border-gray-500'>
        <div className='flex text-base content-center'>
        
            <div>
Add to Cart
</div>
</div>

</button>
</div>
</div>

        </div>
        </div>
  )
}

export default Page