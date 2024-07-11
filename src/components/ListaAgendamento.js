import React from 'react';
import './ListaAgendamentos.css';

const agendamentos = [
  { data: '15/07/2024', horario: '10:00', medico: 'Dra. Ana Oliveira', especialidade: 'Cardiologia' },
  { data: '05/08/2024', horario: '14:30', medico: 'Dr. Carlos Santos', especialidade: 'Ortopedia' },
  { data: '18/08/2024', horario: '09:00', medico: 'Dra. Fernanda Souza', especialidade: 'Dermatologia' },
  { data: '02/09/2024', horario: '11:15', medico: 'Dr. Luiz Ferreira', especialidade: 'Clínico Geral' }
];

const ListaAgendamentos = () => {
  return (
    <div className="lista-agendamentos">
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Horário</th>
            <th>Médico</th>
            <th>Especialidade</th>
          </tr>
        </thead>
        <tbody>
          {agendamentos.map((agendamento, index) => (
            <tr key={index}>
              <td>{agendamento.data}</td>
              <td>{agendamento.horario}</td>
              <td>{agendamento.medico}</td>
              <td>{agendamento.especialidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaAgendamentos;
