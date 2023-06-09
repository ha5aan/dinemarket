import React from 'react'
import {BiCart} from 'react-icons/bi'
const HeroSection = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:flex'>

<div className=' lg:w-[49%] lg:p-1'>
<div className='  lg:w-[65%] lg:m-auto font-sora' >
<div className='w-fit ml-5 mt-24 text-lg px-5 mb-10 py-1 rounded-md font-semibold bg-blue-100 text-blue-900'>
    Sale 70%
</div>
<div className='text-4xl font-[700]  lg:text-6xl lg:font-[700] lg:mb-10 '>
An Industrial Take on Streetwear
</div>
<div className='font-[700] text-[#666] text-base w-[80%] mb-10'>
Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
</div>
<div className='mb-10 mx-auto w-fit p-1 lg:mx-16 '>
    <button className='bg-[#212121] p-3 text-white m-auto w-fit lg:w-[70%] lg:p-2 border-2 border-gray-500'>
        <div className='flex text-base content-center'>
            <div className='lg:py-3' ><BiCart className='text-xl'/></div>
            <div>
Start Shopping
</div>
</div>

</button>

</div>
<div className='flex flex-wrap justify-around gap-4 lg:flex-nowrap'>
    <div>
    <img src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75' className='w-[100%]'/>
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
<div className='hidden lg:w-[49%] lg:block'>

        <div className='relative p-2 '>


        <div className='absolute w-[80%] h-[80%] lg:ml-16 ml:mt-10 bg-red-100 -z-10 rounded-full'>

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