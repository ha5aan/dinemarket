import React from 'react'

const WhatWeHave = () => {
  return (
    <div className='font-sora py-8 my-3 w-[90%] m-auto'>
    <div className='text-center text-lg font-[700] text-[#0062f5]'>
    PRODUCTS
    </div>
    <div  className='text-center text-4xl font-bold text-[#212121]'>
    Check What We Have

    
    </div>
    <div className='py-10 flex'>
    
        <div className='flex flex-col w-[50%]' >
    <div className='flex bg-[#d6d6d8]   justify-around  mx-4  my-2'>
    <div className='my-4  mx-4'>
        <p className='text-3xl font-[700] py-2  text-[#212121]'>
        Get Upto <br/>  <span className='text-4xl font-[800]'>60%</span>
        </p>
        <p className='text-xl font-[400] text-[#212121]'>
        For the summer <br/> season
        </p>
    </div>
    <img src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75" width={210}  />
    </div>
    <div className=' bg-[#212121] pt-12 px-11 pb-8  mx-4  my-2'>
    <p className='text-3xl font-[800] py-2  text-[#fff] text-center tracking-[.03em] mb-4'>
        GET 30% Off
    </p>
    <p className='text-sm font-[400]   text-[#fff] text-center tracking-[.03em]'>
    USE PROMO CODE
    </p>
    <button className='text-sm font-[700] ml-[20%] rounded-lg bg-[#474747] py-1 px-10 mt-[5px] text-[#fff] text-center tracking-[.25em]'>
    DINEWEEKENDSALE
    </button>
    
    </div>
        </div>
    <div className='flex flex-row w-[50%]'>
    
    <div className='bg-[#efe1c7] mx-4  my-2'>
        <p className=' text-base font-[400] text-[#212121] tracking-[.03em] pt-6 pl-5'>Flex Sweatshirt</p>
        <p className=' ml-5'> <span className='line-through'> $100.00</span> <span className='text-base font-[600] ml-[10px] ml-2 text-[#212121] tracking-[.03em]'> $75.00 </span></p>
        <div className='flex content-end'>
        <img  src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75' width={262}/>
        </div>
    </div>
    <div className='bg-[#d7d7d9] mx-4  my-2'>
        <p className=' text-base font-[400] text-[#212121] tracking-[.03em] pt-6 pl-5'>Flex Push Button Bomber
    
    </p>
        <p className=' ml-5'> <span className='line-through'> $225.00</span> <span className='text-base font-[600] ml-[10px] ml-2 text-[#212121] tracking-[.03em]'> $190.00 </span></p>
        <div className='flex content-end'>
        <img  src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75' width={262}/>
        </div>
    </div>
    </div>
    
    </div>
    
    
    
    
    
    
        </div>
  )
}

export default WhatWeHave