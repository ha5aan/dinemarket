'use client';

import React from 'react'
import { useState } from 'react';

const Quantity = (props:any) => {
    // const [currentItemCount, setCurrentItemCount] = useState(1)
  return (
    <div className='flex'>
   <div>
<button className=' mx-1 px-2 text-2xl rounded-full border border-gray-400' onClick={()=>{if(props.currentItemCount>1){ props.setCurrentItemCount(props.currentItemCount-1)}}} >-</button>
   </div>
   
   
    <div className=' text-3xl  mx-1 px-2'>
        
        
         {props.currentItemCount}</div>
        
        <div>
        <button className=' mx-1 px-2 text-2xl rounded-full border border-gray-400' onClick={()=>props.setCurrentItemCount(props.currentItemCount+1)}>+</button>
        </div>
         </div>
  )
}

export default Quantity