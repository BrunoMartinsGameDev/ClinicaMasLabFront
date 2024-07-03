import React from "react";
import './Header.css';
import LogoMasLab from './LogoMasLab.PNG';

function Header(){
    return (
        <header className="header">
            
            <img src={LogoMasLab} alt="MasLab Logo" />
            
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