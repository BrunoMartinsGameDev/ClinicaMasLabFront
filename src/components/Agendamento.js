import React, { useState } from 'react';
 
const Agendamento = ({ medico, onVoltar }) => {
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
 
  const handleAgendar = (e) => {
    e.preventDefault();
    // Implementar lógica de agendamento
    alert(`Consulta agendada com ${medico.nome} em ${data} às ${hora}`);
  };
 
  return (
<div className="agendamento">
<h2>Agendar Consulta com {medico.nome}</h2>
<p>CRM: {medico.crm}</p>
<p>Endereço: {medico.endereco}</p>
<p>Telefone: {medico.telefone}</p>
<form onSubmit={handleAgendar}>
<div className="form-group">
<label>Data</label>
<input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
</div>
<div className="form-group">
<label>Hora</label>
<input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
</div>
<button type="submit">Agendar Consulta</button>
<button type="button" onClick={onVoltar}>Voltar</button>
</form>
</div>
  );
};
 
export default Agendamento;