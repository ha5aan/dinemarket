"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import ShoppingCart from './ShoppingCart';
import {RiMenu3Fill} from 'react-icons/ri'
import Link from 'next/link';
const Header = () => {
    const src = `https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75`;
const [showMenu, setShowMenu] = useState("hidden")

const showOrHide = (property:string)=>{
  setShowMenu(property)
}
  return (
    <div className='lg:m-[0.85rem] p-4 lg:pt-5 flex justify-between items-center  font-sora   lg:px-[7.5rem] lg:flex lg:justify-between lg:items-center'>
<div className="lg:w-[10%]">
  <Link href={"/"}>
<img
        src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75"
        alt="Logo"
        width={140}
        height={25}
        
      />
      </Link>
</div>
<div className=' hidden lg:flex w-[40%] justify-evenly '>
<div className='text-base font-sans'>
  <Link href={"/female"}>Female</Link>

</div>

<div className='text-base font-sans'>
<Link href={"/male"}>Male</Link>
  </div>
  <div className='text-base font-sans'>
Kids
</div>
<div className='text-base font-sans'>
<Link href={"/allproducts"}>All Products</Link></div>
</div>
<div className=' hidden lg:w-[30%] lg:block'>
  <div className='border flex py-1 px-1 rounded' >
<AiOutlineSearch className='text-xl'/>
  
<input type='search' className='text-sm w-80'  placeholder='What are you looking for'/>
</div>
</div>
<div className='block text-2xl lg:hidden' onClick={()=>showOrHide("block")}>

  <RiMenu3Fill />
</div>
<div className='hidden lg:block'>
  <Link href={"/cart"}>
<ShoppingCart/>
</Link>
</div>
<div className={`fixed ${showMenu}  p-0 bg-black text-white w-screen h-screen top-0 bottom-0 left-0 right-0 z-50`}>
  <div className='mt-20  flex flex-col justify-center items-center'>
<div onClick={()=>showOrHide("hidden")}>
<Link href={"/cart"}>
<ShoppingCart/>
</Link>
</div>
<div className='text-base font-sans' onClick={()=>showOrHide("hidden")}>
  <Link href={"/female"}>Female</Link>

</div>

<div className='text-base font-sans' onClick={()=>showOrHide("hidden")}>
<Link href={"/male"}>Male</Link>
  </div>
  <div className='text-base font-sans' onClick={()=>showOrHide("hidden")}>
Kids
</div>
<div className='text-base font-sans' onClick={()=>showOrHide("hidden")}>
<Link href={"/allproducts"}>All Products</Link></div>

</div>
</div>
    </div>
  
  )
}

export default Header