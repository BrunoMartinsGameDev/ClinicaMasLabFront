import React from 'react';
 
const medicos = [
  
  {
    nome: 'Dr. Fulano de Tal',
    crm: '626.999-SC',
    endereco: 'Av. Barão do Rio Branco, 257',
    telefone: '(48)99999-1399',
    especialidade: 'Dermatologista'
  },
  // Adicionar mais exemplo here
];
 
const ResultadosMedicos = ({ especialidade, onSelect }) => {
  const filteredMedicos = medicos.filter(medico => medico.especialidade === especialidade);
 
  return (
<div className="resultados-medicos">
<h2>Você está buscando por: {especialidade.toUpperCase()}</h2>
<div className="medicos-lista">
        {filteredMedicos.map((medico, index) => (
<div key={index} className="medico-item" onClick={() => onSelect(medico)}>
<p>{medico.nome}</p>
<p>CRM: {medico.crm}</p>
<p>{medico.endereco}</p>
<p>{medico.telefone}</p>
</div>
        ))}
</div>
</div>
  );
};
export default ResultadosMedicos;
