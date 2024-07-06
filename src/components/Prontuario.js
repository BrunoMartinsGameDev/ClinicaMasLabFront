import React from 'react'; 

import './Prontuario.css'; 

 

const prontuarios = [ 

  { data: '01/07/2024', paciente: 'Antony Kutinsky', medico: 'Dra. Maria Oliveira', motivo: 'Consulta de rotina', especialidade: 'Clínico Geral', status: 'Completo' }, 

  { data: '15/06/2024', paciente: 'Antony Kutinsky', medico: 'Dr. Carlos Santos', motivo: 'Dor no peito', especialidade: 'Cardiologia', status: 'Em andamento' }, 

  { data: '23/05/2024', paciente: 'Antony Kutinsky', medico: 'Dra. Fernanda Souza', motivo: 'Alergia na pele', especialidade: 'Dermatologia', status: 'Completo' }, 

  { data: '10/05/2024', paciente: 'Antony Kutinsky', medico: 'Dr. Luiz Ferreira', motivo: 'Check-up anual', especialidade: 'Clínico Geral', status: 'Completo' } 

]; 

 

const Prontuario = () => { 

  return ( 

    <div className="prontuario"> 

      <table> 

        <thead> 

          <tr> 

            <th>Data</th> 

            <th>Paciente</th> 

            <th>Médico</th> 

            <th>Motivo/Diagnóstico</th> 

            <th>Especialidade</th> 

            <th>Status</th> 

          </tr> 

        </thead> 

        <tbody> 

          {prontuarios.map((prontuario, index) => ( 

            <tr key={index}> 

              <td>{prontuario.data}</td> 

              <td>{prontuario.paciente}</td> 

              <td>{prontuario.medico}</td> 

              <td>{prontuario.motivo}</td> 

              <td>{prontuario.especialidade}</td> 

              <td>{prontuario.status}</td> 

            </tr> 

          ))} 

        </tbody> 

      </table> 

    </div> 

  ); 

}; 

 

export default Prontuario; 