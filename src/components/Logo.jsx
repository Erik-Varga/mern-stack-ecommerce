import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='font3 font-bold text-3xl tracking-wide py-2'>
        <NavLink to="/">
          Spubba
        </NavLink>
      </div>
  )
}

export default Logo