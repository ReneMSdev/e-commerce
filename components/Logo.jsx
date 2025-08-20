'use client'
import React from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useAppContext } from '@/context/AppContext'

const Logo = () => {
  const { router } = useAppContext()

  return (
    <div
      onClick={() => router.push('/')}
      className='cursor-pointer flex items-center'
    >
      <MdOutlineShoppingCart
        className='font-bold text-orange-600 mr-0.5'
        size={26}
      />
      <h1
        onClick={() => router.push('/')}
        className='flex items-center cursor-pointer text-gray-700 text-2xl font-bold tracking-wide'
      >
        Tech<span className='font-medium'>Mart</span>
      </h1>
    </div>
  )
}

export default Logo
