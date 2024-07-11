import React, { useState } from 'react';
import './LoginMedico.css';
import axios from 'axios';

const LoginMedico = ({ onEmployeeLogin, onPatientButtonClick }) => {
  const [crm, setCrm] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        login: crm, // Envia o CRM como usuário
        password: senha,
        role: "MEDICO"
      });

      // Aqui você pode processar a resposta do servidor, por exemplo, verificar se o login foi bem-sucedido
      if (response.data.authenticated) {
        onEmployeeLogin(crm, senha); // Chama a função de login de médico passando CRM e senha
      } else {
        console.log('Login inválido. Verifique suas credenciais.');
        // Tratar caso de login inválido
      }
    } catch (error) {
      console.error('Erro ao tentar validar login:', error);
      // Tratar o erro aqui, por exemplo, exibindo uma mensagem de erro para o usuário
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
      <button onClick={onPatientButtonClick} className="botao-login-medico">Sou Paciente</button>
    </div>
  );
};

export default LoginMedico;
