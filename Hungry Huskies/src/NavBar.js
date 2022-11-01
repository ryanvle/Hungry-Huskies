import React from "react";
import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
            <nav id="navBar">
            <div className="table">
            <ul id="horizontal-list">
                    <li><NavLink to='/main' className=''>Home</NavLink></li>
                    <li><NavLink to='/restaurants'>Restaurants</NavLink></li>
                </ul>
                </div>
            </nav>
    );
}