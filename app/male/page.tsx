import React from 'react'
import{use} from "react"
import { createClient } from "next-sanity";
import useSWR from 'swr'
async function getProducts() {
    return await client.fetch(`*[_type == "male"]`)
    }
const client = createClient({
  projectId: "8xktior4",
  dataset: "production",
  apiVersion: "2023-06-05",
  useCdn: false
});
const Male = () => {
    var clothes = use(getProducts())
  return (
    <div className='font-sora py-8 my-3 w-[80%] m-auto'>
    <div className='grid grid-cols-4 gap-12'>
{clothes.map((element:any,index:number)=>{
  return(<div key={index}>
    <img src={element.imageLink} height={266} width={250}/>
    <p className='text-[1.05rem] mt-2 font-[600]  tracking-[.03em]  text-[#212121]'>{element.mainHeading} </p>
    <p className='text-base mt-2 font-[600]   text-[#888]'>{element.subHeading}</p>
    <p className='text-lg mt-2 font-[600] tracking-[.03em]  text-[#212121]'> ${element.price}</p>
    </div>)
})}
    </div>
    </div>
  )
}

export default Male