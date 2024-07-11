import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Cadastro.css';

const Cadastro = ({ onRegisterSuccess }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [errors, setErrors] = useState({});
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    let formErrors = {};

    if (!nome.trim().includes(' ')) {
      formErrors.nome = 'O nome deve conter nome e sobrenome.';
    }

    if (cpf.length !== 14) {
      formErrors.cpf = 'O CPF deve conter 11 dígitos.';
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      formErrors.email = 'E-mail inválido.';
    }

    if (!senha.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      formErrors.senha = 'A senha deve conter no minimo 6 caracteres entre letras e números.';
    }

    if (senha !== confirmaSenha) {
      formErrors.confirmaSenha = 'As senhas não coincidem.';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleCpfChange = (e) => {
    const formattedCpf = e.target.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .substring(0, 14);
    setCpf(formattedCpf);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Cadastro efetuado com sucesso, enviamos um código de verificação para seu e-mail');
      onRegisterSuccess();
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Realize seu cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome completo</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome completo" />
          {errors.nome && <span className="error">{errors.nome}</span>}
        </div>
        <div className="form-group">
          <label>CPF</label>
          <input type="text" value={cpf} onChange={handleCpfChange} placeholder="CPF" />
          {errors.cpf && <span className="error">{errors.cpf}</span>}
        </div>
        <div className="form-group">
          <label>Telefone</label>
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Crie sua senha</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              onFocus={() => setShowPasswordMessage(true)}
              onBlur={() => setShowPasswordMessage(false)}
              placeholder="Crie sua senha"
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
            {showPasswordMessage && <span className="password-message">A senha deve conter letras e números.</span>}
          </div>
          {errors.senha && <span className="error">{errors.senha}</span>}
        </div>
        <div className="form-group">
          <label>Repita a senha</label>
          <div className="password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
              placeholder="Repita a senha"
            />
            <span className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          {errors.confirmaSenha && <span className="error">{errors.confirmaSenha}</span>}
        </div>
        <button type="submit">CRIAR CONTA</button>
      </form>
    </div>
  );
};

export default Cadastro;
