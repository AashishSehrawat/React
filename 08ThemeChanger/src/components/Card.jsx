import React from 'react'
import star from "../assets/star.svg"
import blackStar from "../assets/black star.svg"

function Card() {
  return (
    <div className='border-px bg-white border-x-slate-200 dark:border-black p-5 rounded-md w-1/3 dark:bg-slate-700'>
      <div className='mb-1'>
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='dark:text-white text-black flex justify-center text-center mb-2'>
        <p className='w-3/4'>Car for sell in Dark grey color with V8 turbo engine</p>
      </div>
      <div className='mb-3'>
        <span className='flex gap-1'>
            <img src={star} className='w-5' alt="" />
            <img src={star} className='w-5' alt="" />
            <img src={star} className='w-5' alt="" />
            <img src={star} className='w-5' alt="" />
            <img src={blackStar} className='w-5' alt="" />
            <span className='bg-slate-400 px-1 mx-2 rounded'>4.5</span>
        </span>
      </div>
      <div className='flex justify-between'>
        <span className='text-3xl dark:text-white text-black font-semibold'>$100,000</span>
        <button className='bg-blue-500 px-2 text-white rounded-md hover:bg-blue-600 cursor-pointer transition-all'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card
