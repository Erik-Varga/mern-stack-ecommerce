import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='font3 font-bold text-4xl tracking-wide'>
        <NavLink to="/">
          Spubba
        </NavLink>
      </div>
  )
}

export default Logo