import React from 'react'

function Header() {
  return (
    <div className='w-full'>
        <div className='shadow-xl h-20 px-10 flex justify-between items-center'>
            <a href='/' className='font-semibold text-xl text-blue-600'>Metro<span className='text-black'>way</span></a>
            <div className='flex gap-6'>
                <p className='font-semibold'>My Booking</p>
                <div className='flex gap-2 font-semibold text-blue-600'>
                    <a href='/login'>Login</a>
                    <p>/</p>
                    <a href='/signup'>Sign Up</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header