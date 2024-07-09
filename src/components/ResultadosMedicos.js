import React from 'react';
 
const medicos = [
  // Estrutura de exemplo para os médicos. Pode ser substituída por dados reais.
  {
    nome: 'Dr. Fulano de Tal',
    crm: '626.999-SC',
    endereco: 'Av. Barão do Rio Branco, 257',
    telefone: '(48)99999-1399',
    especialidade: 'Dermatologista'
  },
  // Adicione mais médicos aqui...
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