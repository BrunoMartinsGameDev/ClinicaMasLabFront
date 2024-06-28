import React from "react";
import './Header.css';

function Header(){
    return (
        <header className="header">
            <h1><a href="#">MasLab</a></h1>
            <nav>
                <ul>
                    
                    <li><a href="#">Sobre</a></li>
                    
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;