import React from 'react'
import Logo from './Logo'
import Search from './Search'

const Navbar = () => {
  return (
    <nav className='flex justify-between align-center'>
      <Logo/>
      <Search/>
      <button className='btn'>Give Feedback</button>
    </nav>
  )
}

export default Navbar
