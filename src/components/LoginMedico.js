import React, { useState } from 'react';
import './LoginMedico.css';
import axios from 'axios';

const LoginMedico = ({ onEmployeeLogin, onPatientButtonClick }) => {
  const [crm, setCrm] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Dados enviados para o servidor:', {
      login: crm,
      password: senha,
    });

    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      const user = users.find(u => u.login === crm && u.password === senha);

      if (user) {
        onEmployeeLogin(crm, senha); // Corrigido para chamar onEmployeeLogin com CRM e senha
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
          placeholder="CRM"
          value={crm}
          onChange={(e) => setCrm(e.target.value)}
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
      <button onClick={onPatientButtonClick} className="botao-login-medico">
        Sou Paciente
      </button>
    </div>
  );
};

export default LoginMedico;
