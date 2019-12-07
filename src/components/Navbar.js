import React from "react";
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="nav-wraper red darken-3">
            <div className="container">
                <NavLink to="/" className="brand-logo">PokeTime's</NavLink>
                <ul className="right">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar;