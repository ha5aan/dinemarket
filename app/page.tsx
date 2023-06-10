'use client'
import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import Promotions from './Components/Promotions'
import WhatWeHave from './Components/WhatWeHave'
import { useSearchParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast'

export default function Home() {

const searchParams = useSearchParams();
console.log(searchParams.toString())
if(searchParams.toString().includes("success")){
  toast.success("Payment Sucessful for you order! Thank you",{
    duration: 4000,
  position: 'top-center',
  })
}else if(searchParams.toString().includes("cancel")){
  toast.error("Unable to Process Request")
}
  return (
    <>
     <Toaster />
   <HeroSection/>
   <Promotions/>
   {/* <WhatWeHave/> */}
  
   </>)
}
