import React, { useState } from 'react'; 
import './LoginMedico.css'; 

const LoginMedico = ({ onEmployeeLogin, onPatientButtonClick }) => { 
  const [crm, setCrm] = useState(''); 
  const [senha, setSenha] = useState(''); 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    onEmployeeLogin(crm, senha); 
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
