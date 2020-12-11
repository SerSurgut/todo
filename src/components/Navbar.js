import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-explaned-lg bg-dark justify-content-start">
            <NavLink to='/' className="navbar-brand fs-1">ToDo List</NavLink>
                <ul className="navbar-nav flex-row ml-3">
                    <li className="nav-item p-2">
                        <NavLink to='/' className="nav-link" exact>Список дел</NavLink>
                    </li>
                    <li className="nav-item p-2">
                        <NavLink to='/list' className="nav-link"> Новые <span className="newTask">1</span></NavLink>
                    </li>
                </ul>
        </nav>
    );
};

export default Navbar;