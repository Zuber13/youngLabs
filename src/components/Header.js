import React from 'react'
import Logo from '../images/YoungLabsLogo.png'

function Header() {
  return (
    <div className='container_1'>
      <header>
        <div className='logo'>
          <img src={Logo} alt="lan-logo"/>
        </div>
        <div className='btn'>
          <button className='login-btn'>Login</button>
        </div>
      </header>
    </div>
  )
}

export default Header