import React from 'react'
import { NavLink , Link, Outlet } from 'react-router-dom'
import './nav.css'
export const Nav = () => {
    return (
        <div className="navbar">
            {/* Navbar logo */}
            <div className="nav-header">
                <div className="nav-logo">
                    <Link href="./" className='logo'>
                        LOGO
                        {/* <img src="logo.png" width="100px" alt="logo" /> */}
                    </Link>
                </div>
            </div>
            {/* responsive navbar toggle button */}
            <input type="checkbox" id="nav-check" />
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span />
                    <span />
                    <span />
                </label>
            </div>
            {/* Navbar items */}
            <div className="nav-links">
                <NavLink to="/" className="links">Home</NavLink>
                <NavLink to="/todo" className="links">To-Do</NavLink>
                <NavLink to="counter" className="links">Counter</NavLink>
                
                
            </div>
            <Outlet/>
        </div>
        
    )
}
