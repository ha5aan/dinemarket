'use client';

import React from 'react'
import { useState } from 'react';

const Quantity = () => {
    const [currentItemCount, setCurrentItemCount] = useState(1)
  return (
    <div className='flex'>
   <div>
<button className=' mx-1 px-2 text-2xl rounded-full border border-gray-400' onClick={()=>{if(currentItemCount>1){ setCurrentItemCount(currentItemCount-1)}}} >-</button>
   </div>
   
   
    <div className=' text-3xl  mx-1 px-2'>
        
        
         {currentItemCount}</div>
        
        <div>
        <button className=' mx-1 px-2 text-2xl rounded-full border border-gray-400' onClick={()=>setCurrentItemCount(currentItemCount+1)}>+</button>
        </div>
         </div>
  )
}

export default Quantity