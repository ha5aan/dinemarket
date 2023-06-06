import React from 'react'
import{use} from "react"
import { createClient } from "next-sanity";
import useSWR from 'swr'
import Quantity from '../Components/Quantity';
import { BiCart } from 'react-icons/bi';

const Page = () => {
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
<button className='bg-[#212121] text-white p-2 border-2 border-gray-500'>
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