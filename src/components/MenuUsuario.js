import React from 'react';
import './MenuUsuario.css';

const MenuUsuario = ({ onOptionClick }) => {
  return (
    <div className="menu-usuario">
      <button onClick={() => onOptionClick('historico')}>Histórico de Consulta</button>
      <button onClick={() => onOptionClick('receitas')}>Receitas</button>
      <button onClick={() => onOptionClick('prontuario')}>Prontuário</button>
      <button onClick={() => onOptionClick('agendamentos')}>Agendamentos</button>
      <button onClick={() => onOptionClick('agendarConsulta')}>Agendar Consulta</button> {/* Novo botão */}
    </div>
  );
};

export default MenuUsuario;
