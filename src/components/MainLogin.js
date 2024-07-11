import React, { useState } from 'react';
import './MainLogin.css';
import axios from 'axios';

const MainLogin = ({ onLogin, onEmployeeButtonClick, onCadastroButtonClick }) => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleChangeCPF = (e) => {
    const inputCPF = e.target.value.replace(/\D/g, '');
    const formattedCPF = inputCPF
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .substring(0, 14);

    setCpf(formattedCPF);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Dados enviados para o servidor:', {
      login: cpf,
      password: senha,
    });
  
    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      const user = users.find(u => u.login === cpf && u.password === senha);
  
      if (user) {
        onLogin(cpf, senha); // Chama a função de login passando CPF e senha
      } else {
        alert('Login falhou');
      }
    } catch (error) {
      console.error('Erro', error);
    }
  };
        return (
    <div className="login-container">
      <h2>Acesse sua página</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={handleChangeCPF}
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
