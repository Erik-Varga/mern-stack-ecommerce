import React from 'react'
import {assets} from '../assets/assets'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Logo />
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">

            <NavLink to='/' className='flex flex-col items-center gap-1 uppercase'>
                <p>Home</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1 uppercase'>
                <p>Collection</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1 uppercase'>
                <p>About</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1 uppercase'>
                <p>Contact</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
        </ul>
    </div>
  )
}

export default Navbar