import React, { useState } from 'react';
import './MainLogin.css';
import axios from 'axios';

const MainLogin = ({ onLogin, onEmployeeButtonClick, onCadastroButtonClick }) => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  // Função para formatar o CPF enquanto o usuário digita
  const handleChangeCPF = (e) => {
    const inputCPF = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    const formattedCPF = inputCPF
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .substring(0, 14);

    setCpf(formattedCPF);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que o formulário recarregue a página
    
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        login: cpf, // Envia o CPF como usuário
        password: senha,
        role: "PACIENTE"
      });

      // Aqui você pode processar a resposta do servidor, por exemplo, verificar se o login foi bem-sucedido
      if (response.data.authenticated) {
        onLogin(cpf, senha); // Chama a função de login passando CPF e senha
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
          placeholder="CPF"
          value={cpf}
          onChange={handleChangeCPF} // Chama a função para formatar o CPF enquanto o usuário digita
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
