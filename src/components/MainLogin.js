import React, { useState } from 'react';
import './MainLogin.css';
 
const MainLogin = ({ onLogin, onEmployeeButtonClick, onCadastroButtonClick }) => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(cpf, senha);
  };
 
  return (
<div className="login-container">
<h2>Acesse sua página</h2>
<form onSubmit={handleSubmit}>
<input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
<input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
<button type="submit">Entrar</button>
</form>
<button onClick={onEmployeeButtonClick} className="botao-login-colaborador">Sou Colaborador</button>
<button onClick={onCadastroButtonClick} className="botao-cadastro">Cadastrar</button>
</div>
  );
};
 
export default MainLogin;