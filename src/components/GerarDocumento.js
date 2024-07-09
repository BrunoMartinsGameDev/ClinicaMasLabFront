import React, { useState } from 'react'; 
import './GerarDocumento.css'; 

const GerarDocumento = ({ nomeUsuario, onBack }) => { 
  const [cpfPaciente, setCpfPaciente] = useState(''); 
  const [dataConsulta, setDataConsulta] = useState(''); 
  const [horarioConsulta, setHorarioConsulta] = useState(''); 
  const [especialidade, setEspecialidade] = useState(''); 
  const [motivoConsulta, setMotivoConsulta] = useState(''); 
  const [receita, setReceita] = useState(''); 
  const [descricao, setDescricao] = useState(''); 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    // Aqui você pode processar os dados enviados, como enviar para o servidor ou realizar outras ações
    console.log('CPF do paciente:', cpfPaciente);
    console.log('Data da consulta:', dataConsulta);
    console.log('Horário da consulta:', horarioConsulta);
    console.log('Especialidade:', especialidade);
    console.log('Motivo da consulta:', motivoConsulta);
    console.log('Receita:', receita);
    console.log('Descrição:', descricao);
    // Limpar os campos após o envio
    setCpfPaciente('');
    setDataConsulta('');
    setHorarioConsulta('');
    setEspecialidade('');
    setMotivoConsulta('');
    setReceita('');
    setDescricao('');
  }; 

  return ( 
    <div className="gerar-documento-container"> 
      <h2>Gerar Documento</h2> 
      <form onSubmit={handleSubmit}> 
        <input 
          type="text" 
          placeholder="CPF do Paciente" 
          value={cpfPaciente} 
          onChange={(e) => setCpfPaciente(e.target.value)} 
          required 
        /> 
        <input 
          type="date" 
          placeholder="Data da Consulta" 
          value={dataConsulta} 
          onChange={(e) => setDataConsulta(e.target.value)} 
          required 
        /> 
        <input 
          type="time" 
          placeholder="Horário da Consulta" 
          value={horarioConsulta} 
          onChange={(e) => setHorarioConsulta(e.target.value)} 
          required 
        /> 
        <input 
          type="text" 
          placeholder="Especialidade" 
          value={especialidade} 
          onChange={(e) => setEspecialidade(e.target.value)} 
          required 
        /> 
        <textarea 
          placeholder="Motivo da Consulta" 
          value={motivoConsulta} 
          onChange={(e) => setMotivoConsulta(e.target.value)} 
          required 
        /> 
        <textarea 
          placeholder="Receita" 
          value={receita} 
          onChange={(e) => setReceita(e.target.value)} 
          required 
        /> 
        <textarea 
          placeholder="Descrição" 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)} 
          required 
        /> 
        <button type="submit">Gerar</button> 
      </form> 
      <button onClick={onBack}>Voltar</button> {/* Botão para voltar ao menu anterior */}
    </div> 
  ); 
}; 

export default GerarDocumento;
