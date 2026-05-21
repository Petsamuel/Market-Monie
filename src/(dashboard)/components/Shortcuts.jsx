import React from 'react'

const Shortcuts = () => {
  return (
    <div className=' w-full px-3 py-4 flex gap-6 items-center justify-between'>
        <button className='rounded-3xl shadow-md bg-white text-black hover:border hover:border-green-900 hover:scale-[1.02] hover:text-green-900 hover:bg-green-200 w-1/2 h-24 flex items-center justify-center text-xl font-semibold'>Apply Now</button>
        <button className='rounded-3xl shadow-md bg-white text-black hover:border hover:border-orange-900 hover:scale-[1.02] hover:text-orange-900 hover:bg-orange-200 w-1/2 h-24 flex items-center justify-center text-xl font-semibold'>Make Payment</button>
    </div>
  )
}

export default Shortcuts