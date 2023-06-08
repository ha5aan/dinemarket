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
const [currentElement, setCurrentElement] = useState<any>()
const [stripeObject, setstripeObject] = useState<any>()
const[allOrders, setAllOrders] = useState<any>()
var stripe:any;
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
  const response = await fetch('http://localhost:3000/api/cart')
     
  if(response.ok){
      var formattedresponse  = await response.json();
      console.log(formattedresponse)
     setAllOrders(formattedresponse)
     console.log(allOrders)
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
 
        const response = await fetch('http://localhost:3000/api/getcountofelements')
     
        if(response.ok){
            var formattedresponse  = await response.json();
            console.log(formattedresponse)
            return(Number( formattedresponse.count))
        }else{
          return 0;
        }
        }


        const createCheckOutSession = async () => {
           console.log(item)
            const checkoutSession:any = await fetch('http://localhost:3000/api/stripesession', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({item: allOrders}),
              });
              console.log("========================================")
              var data = await checkoutSession.json()
             
          console.log(checkoutSession)
 
            const result = await stripeObject.redirectToCheckout({
              sessionId: data.id,
            });
            if (result.error) {
              alert(result.error.message);
            }
            
          };


console.log(stripeObject,"outer console")
  return (
    <div className='font-sora py-8 my-3 w-[82%] m-auto'>
<p> Shopping Cart</p>

{allOrders &&
allOrders.res.map((element:any,index:number)=>{
return(
  <div key={index} className='flex h-[200px] my-4'>
  <div className='w-[15%]'>
      <img src={element.imagelink}/>
  </div>
  <div className='w-[51%] flex justify-around'>
      <div>   <p>{element.product}
  </p>
  <p>CLothes
  </p>

  </div>
 
  </div>
  <div className='w-[34%]'>
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
Process Checkout
</div>
</div>

</button>
        </div>
  )
}

export default Page