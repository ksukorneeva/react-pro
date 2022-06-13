import React from 'react'
import './Header.scss'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div className="header__logo">
            logo
        </div>

        <ul className="header__menu menu">
            <li className="menu__item">
                <NavLink to="/" className="menu__link">Home</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/about" className="menu__link">About</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/create" className="menu__link">Create</NavLink>
            </li>
        </ul>
    </header>
  )
}

export default Header