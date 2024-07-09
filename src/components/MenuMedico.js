import React from 'react'; 

import './MenuMedico.css'; 

 

const MenuMedico = ({ onOptionClick }) => { 

  return ( 

    <div className="menu-medico"> 

      <button onClick={() => onOptionClick('agendamentos')}>Agendamentos</button> 

      <button onClick={() => onOptionClick('gerarDocumentos')}>Gerar Documentos</button> 

      <button onClick={() => onOptionClick('prontuario')}>Prontuário</button> 

      <button onClick={() => onOptionClick('historico')}>Histórico de Consulta</button> 

      <button onClick={() => onOptionClick('configuracoes')}>Configurações</button> 

    </div> 

  ); 

}; 

 

export default MenuMedico; 