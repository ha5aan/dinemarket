import React from 'react'
import {BiCart} from 'react-icons/bi'
const HeroSection = () => {
  return (
    <div className='flex'>

<div className='w-[49%] p-1'>
<div className='w-[65%] m-auto font-sora' >
<div className='w-fit mt-24 text-lg px-5 mb-10 py-1 rounded-md font-semibold bg-blue-100 text-blue-900'>
    Sale 70%
</div>
<div className='text-6xl font-[700] mb-10 '>
An Industrial Take on Streetwear
</div>
<div className='font-[700] text-[#666] text-base w-[80%] mb-10'>
Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
</div>
<div className='mb-10'>
    <button className='bg-[#212121] text-white w-[35%] p-2 border-2 border-gray-500'>
        <div className='flex text-base content-center'>
            <div className='p-3'><BiCart className='text-xl'/></div>
            <div>
Start Shopping
</div>
</div>

</button>

</div>
<div className='flex justify-evenly'>
    <div>
    <img src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75'/>
    </div>
    <div>
    <img src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75'/>
    </div>
    <div>
    <img src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75'/>
    </div>
    <div>
    <img src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75'/>
    </div>
</div>
</div>
</div>
<div className='w-[49%]'>

        <div className='relative p-2 '>


        <div className='absolute w-[80%] h-[80%] ml-16 mt-10 bg-red-100 -z-10 rounded-full'>

</div>
        <div className='w-fit h-fit m-1  z-10'>
<img loading='lazy' height={650} width={650} src='/bootcamp.png' className='bg-transparent'/>
</div>

</div>
</div>


    </div>
  )
}

export default HeroSection