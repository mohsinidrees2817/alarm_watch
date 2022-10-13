import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-[100vw] text-center bg-[#0090dd] text-white p-4'>
        <nav className='flex justify-center items-center'>
            <ul className='flex gap-8 font-semibold cursor-pointer'>
                <Link href="/">
                <li>Home</li>
                </Link>
                <Link href="/about">   
                <li>About</li>
                </Link>
                <Link href="/news">
                <li>News</li>
                </Link>
            </ul>
        </nav>
        </div>


  )
}

export default Header