"use client";
import React from 'react'
import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import ShoppingCart from './ShoppingCart';
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
<ShoppingCart/>
</div>

    </div>
  )
}

export default Header