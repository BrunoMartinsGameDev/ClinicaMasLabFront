import React from 'react';
import logo from './LogoMasLab.PNG';
import './Cabecalho.css'; 

const Cabecalho = ({ nomeUsuario, onLogout, onHome }) => { 
  return ( 
    <header className="cabecalho"> 
      <div className="cabecalho-logo"> 
        <img src={logo} alt="Logo" /> 
      </div> 
      <div className="cabecalho-info-usuario"> 
        <span>Olá {nomeUsuario}, seja bem-vindo</span> 
        <button onClick={onHome} className="botao-home">Home</button>
        <button onClick={onLogout} className="botao-logout">Sair</button> 
      </div> 
    </header> 
  ); 
}; 

export default Cabecalho;
