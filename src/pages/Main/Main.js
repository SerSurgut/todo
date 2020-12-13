import React from 'react';
import {Link} from 'react-router-dom'
import './Main.css'

const Main = () => {
    return (
        <div className="mt-5">
            <div className="textBox">
                <h2>Добро пожаловать</h2>
                <Link to="/list" className="main-link">&gt; Перейти к списку дел &lt;</Link>
            </div>
        </div>
    );
};

export default Main;