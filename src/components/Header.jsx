import React from 'react'

export default function Header({ toggleDarkMode, darkMode }) {
  return (
    <header>
    <nav className='nav'>
      <img
      src="src/assets/react.svg"
      alt="react logo"
      className='react-logo'/>
      <h3 className='navbar-title'>ReactFacts</h3>
      <div className='toggler'>
        <p className='toggler--light'>Light</p>
        <div
        className='toggler--slider'
        onClick={toggleDarkMode}
        >
          <div className='toggler--slider--circle'></div>
        </div>
        <p className='toggler--dark'>Dark</p>
      </div>
    </nav>
    </header>
  )
}
