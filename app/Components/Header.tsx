"use client";
import React from 'react'
import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
const Header = () => {
    const src = `https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75`;

  return (
    <div className=' my-[0.85rem] pt-5  px-[7.5rem]  flex justify-between content-center font-sora'>

<div>
<img
        src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75"
        alt="Logo"
        width={"140"}
        height={"25"}
      />
</div>

<div className='text-base font-sans'>
Female
</div>
<div className='text-base'>
Male
  </div>
  <div className='text-base'>
Kids
</div>
<div className='text-base'>
All Products
</div>
<div>
  <div className='border flex py-1 px-1 rounded' >
<AiOutlineSearch className='text-xl'/>
  
<input type='search' className='text-sm w-80'  placeholder='What are you looking for'/>
</div>
</div>
<div>
<div className='relative inline-block border-solid  bg-slate-300	 w-12 h-max p-3  pt-4 -mt-2 rounded-full' >
<FaShoppingCart/>
<span className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 px-1.5 text-xs">
          {2}
        </span>
</div>
</div>

    </div>
  )
}

export default Header