'use client'
import React, { useContext, useEffect, useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { CounterContext } from '../context/cartItems.context'

const ShoppingCart = () => {
  const [totalProductCount, setTotalProductCount] = useState(0)
  const { state,dispatch } = useContext(CounterContext);


    return (
   
    <div className=' relative inline-block border-solid  bg-slate-300	 w-12 h-max p-3  pt-4 -mt-2 rounded-full' >
    <FaShoppingCart/>
    <span className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 px-1.5 text-xs">
              {state.ItemCount}
            </span>
    </div>
   
  )
}

export default ShoppingCart