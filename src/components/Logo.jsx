import React from 'react'
import { NavLink } from 'react-router-dom'
import { SiShopee } from "react-icons/si";

const Logo = () => {
  return (
    <NavLink to="/">
      <div className='lexend text-2xl font-bold py-1 flex items-center'>
        Brinklow
        <SiShopee className='ml-0' />
      </div>
    </NavLink>
  )
}

export default Logo