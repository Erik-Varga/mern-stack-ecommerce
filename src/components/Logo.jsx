import React from 'react'
import { NavLink } from 'react-router-dom'
import { SiShopee } from "react-icons/si";

const Logo = () => {
  return (
    <NavLink to="/">
      <div className='lexend font-bold py-2 flex items-center'>
        Spubba
        <SiShopee className='text-2xl ml-1' />
      </div>
    </NavLink>
  )
}

export default Logo