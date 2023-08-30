import React from 'react'

export default function Header() {
  return (
    <header className='header'>
    <nav className='nav'>
      <img
      src="src/assets/react.svg"
      alt="react logo"
      className='react-logo'/>
      <ul className='nav-items'>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </nav>
    </header>
  )
}
