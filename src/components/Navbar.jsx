import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'
import { LuSun, LuMoon, LuSearch, LuUser, LuUserX, LuShoppingBag, LuMenu } from "react-icons/lu"
import ToggleDarkMode from './ToggleDarkMode'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const {setShowSearch} = useContext(ShopContext);

  return (
    <div className='mx-2 py-2 px-1 flex items-center justify-between font-medium'>
        <Logo />
        <ul className="hidden sm:flex gap-2 md:gap-5 text-sm text-gray-700 dark:text-gray-300">

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

        <div className="flex items-center gap-5">
            
            <Link to='/collection'>
                <LuSearch onClick={()=>setShowSearch(true)} className='text-2xl cursor-pointer' />
            </Link>

            <div className="group relative">
                <LuUser className='text-2xl cursor-pointer' />

                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-300 rounded-md">
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>

            <Link to='/cart' className='relative'>
                <LuShoppingBag className='text-2xl cursor-pointer' />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>10</p>
            </Link>

            <div className='hidden sm:block'>
                <ToggleDarkMode />
            </div>

            <LuMenu className='text-2xl cursor-pointer sm:hidden' onClick={()=>setVisible(true)} />
        </div>

        {/* sidebar menu */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-50 dark:bg-gray-900 transition-all mt-2 ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600 dark:text-gray-400'>
                <div className="flex items-center gap-4 p-3 cursor-pointer" onClick={()=>setVisible(false)}>
                    <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180' />
                    <p>Back</p>
                </div>
                <NavLink to='/' onClick={()=>setVisible(false)} className='py-4 pl-6 hover:text-gray-500'>Home</NavLink>
                <NavLink to='/collection' onClick={()=>setVisible(false)} className='py-4 pl-6 hover:text-gray-500'>Collection</NavLink>
                <NavLink to='/about' onClick={()=>setVisible(false)} className='py-4 pl-6 hover:text-gray-500'>About</NavLink>
                <NavLink to='/contact' onClick={()=>setVisible(false)} className='py-4 pl-6 hover:text-gray-500'>Contact</NavLink>
                <div className='py-4 pl-6 hover:text-gray-500'>
                <ToggleDarkMode />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar