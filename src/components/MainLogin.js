import React from "react";
import './MainLogin.css';
import LogoMasLab from './LogoMasLab.PNG'; // Importar a imagem corretamente

function MainLogin(){
    return (
        <div className="container">
            <div className="logo">
                <img src={LogoMasLab} alt="MasLab Logo" />
            </div>
            <h1>ACESSE SUA PÁGINA</h1>
            <div className="login-form">
                <form>
                    <div className="input-container">
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf" placeholder="xxx.xxx.xxx-xx" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="senha">SENHA</label>
                        <input type="password" id="senha" name="senha" placeholder="SUA SENHA" />
                    </div>
                    <button type="submit">ENTRAR</button>
                    <a href="#" className="esqueci-senha">ESQUECI MINHA SENHA</a>
                    <a href="#" className="criar-conta">AINDA NÃO POSSUO CONTA</a>
                </form>
            </div>
        </div>
    );
}

export default MainLogin;
