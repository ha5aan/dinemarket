'use client'
import React, { useContext,useEffect,useState } from 'react'
import{use} from "react"
import { createClient } from "next-sanity";
import useSWR from 'swr'
import { BiCart } from 'react-icons/bi';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { get } from 'http';
import { loadStripe } from "@stripe/stripe-js";




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
const Page = () => {
  var totalBill:number = 0;
const [currentElement, setCurrentElement] = useState<any>()
const [stripeObject, setstripeObject] = useState<any>()
const[allOrders, setAllOrders] = useState<any>()
var stripe:any;
var allordersData:any;
console.log(process.env.STRIPE_SECRET_KEY)
useEffect(()=>{
    const loadstripe=async()=>{
     return await loadStripe("pk_test_51KW1U6HEtYcZ4XvWA4Tjfs4qKwQDag8yRD3b2dd8qCT6IXvgNSLFmQDvQ9P4wu6sop3D2ovSKgAQ47yftGebFGkp00rgt65z7x")

    }
    loadstripe().then((x=>{ 
       setstripeObject(x)
        console.log(x, "Stripe loaded")})).catch((x=>console.log(x)))

        getAllCartITems().then(()=>{
          console.log("data fetching complete")
        }).catch(()=>{
          console.log("Error in fetching data")
        })
},[])

const getAllCartITems= async()=>{
  const response = await fetch('/api/cart')
     
  if(response.ok){
      var formattedresponse  = await response.json();
      console.log(formattedresponse)
     setAllOrders(formattedresponse)
     console.log(allOrders)
     allordersData= JSON.parse(JSON.stringify(formattedresponse)) 
    
    }else{
    return 0;
  }
  }


const [item, setItem] = useState({
    name: "Apple AirPods",
    description: "Latest Apple AirPods.",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    quantity: 0,
    price: 999,
  });
   
    const router = useRouter();
    const pathname = usePathname();
  const searchParams = useSearchParams();


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


        const createCheckOutSession = async () => {
           console.log(allOrders, "all orders")
console.log(allordersData," before data")
           const data =JSON.stringify( {item: allOrders})
           console.log(data, " after data")
           debugger
            const checkoutSession:any = await fetch('/api/stripesession', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:data ,
              });
              console.log("========================================")
              var data2 = await checkoutSession.json()
             
          console.log(checkoutSession)
 
            const result = await stripeObject.redirectToCheckout({
              sessionId: data2.id,
            });
            if (result.error) {
              alert(result.error.message);
            }
            
          };


console.log(stripeObject,"outer console")
  return (
    <div className='font-sora py-8 my-3  lg:w-[82%] m-auto'>
<p> Shopping Cart</p>

{allOrders &&
allOrders.res.map((element:any,index:number)=>{
  totalBill+= Number(element.price);
return(
  <div key={index} className='flex h-fit my-1 lg:my-4 flex-col lg:flex-row lg:w-[70%] m-auto'>
  <div className=' w-fit m-auto lg:w-[15%]'>
      <img src={element.imagelink} height={238} width={253}/>
  </div>
  <div className='lg:w-[51%] flex lg:justify-around flex-col content-center lg:flex-row p-5'>
      <div>   <p>{element.product}
  </p>
  <p>CLothes
  </p>

  </div>
 
  </div>
  <div className=' w-full lg:w-[34%] p-10'>
    <p> Order Summary</p>
    <div  className='flex justify-between'>
  <p>
  Quantity
  </p>
  <p> {element.quantity}</p>
    </div>
    <div  className='flex  justify-between'>
    <p>
  Price
  </p>
  <p> {element.price}</p>
    </div>
    </div>
  
  </div>
)
})
}

<button onClick={createCheckOutSession} className='bg-[#212121] text-white p-2 border-2 border-gray-500'>
        <div className='flex text-base content-center'>
        
            <div>
Process Checkout for total amount : {totalBill}
</div>
</div>

</button>
        </div>
  )
}

export default Page