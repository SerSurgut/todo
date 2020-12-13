import React from 'react';
import { useSelector } from 'react-redux';
import ModalForm from '../ModalForm/ModalForm'
import {Navbar, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './NavbarPanel.css'
 
const NavbarPanel = () => {
    const {newTask} = useSelector(store=>store)
    return (

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">TodoList</Navbar.Brand>
                <Nav className="mr-auto">
                <NavLink className="nav-link" to="/list">Список дел</NavLink>
                <NavLink className="nav-link" to="/newtasks">
                    Новые{newTask.length>0?<span className="ml-2 newTaskCounter">{newTask.length}</span>:null}
                </NavLink>
            </Nav>
            <ModalForm/>       
        </Navbar>
    );
};

export default NavbarPanel;