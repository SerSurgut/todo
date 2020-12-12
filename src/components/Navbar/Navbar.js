import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
import './Navbar.css'
 
const Navbar = () => {
    const {newTask} = useSelector(store=>store)
    return (
        <nav className="navbar navbar-dark navbar-explaned-lg bg-dark justify-content-start">
            <NavLink to='/' className="navbar-brand fs-1">ToDo List</NavLink>
                <ul className="navbar-nav flex-row ml-3">
                    <li className="nav-item p-2">
                        <NavLink to='/list' className="nav-link">Список дел</NavLink>
                    </li>
                    <li className="nav-item p-2">
                    <NavLink to='/newtasks' className="nav-link"> Новые 
                         
                            {newTask.length>0?<span className="ml-2 newTaskCounter">{newTask.length}</span>:null} 
                    </NavLink>
                    </li>
                </ul>
        </nav>
    );
};

export default Navbar;