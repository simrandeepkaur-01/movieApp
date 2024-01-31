import React from 'react'
import Logo from '../header/Logo'

export default function Footer() {
  return (
    <footer className="flex justify-around bg-black py-4 z-30">
      <Logo />
      <p className='text-white'>Footer1</p>
      <p className='text-white'>Footer2</p>
    </footer>
  )
}