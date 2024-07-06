import React from 'react'; 

import './ListaAgendamentos.css';

 

const agendamentos = [ 

  { data: '15/07/2024', horario: '10:00', medico: 'Dra. Ana Oliveira', especialidade: 'Cardiologia', clinica: 'Clínica São João', telefone: '(48) 99999-9999', endereco: 'Rua Felipe Schmidt, 200, Centro, Florianópolis' }, 

  { data: '05/08/2024', horario: '14:30', medico: 'Dr. Carlos Santos', especialidade: 'Ortopedia', clinica: 'Clínica Santa Clara', telefone: '(48) 99999-9999', endereco: 'Rua Conselheiro Mafra, 122, Centro, Florianópolis' }, 

  { data: '18/08/2024', horario: '09:00', medico: 'Dra. Fernanda Souza', especialidade: 'Dermatologia', clinica: 'Clínica Vida e Saúde', telefone: '(48) 99999-9999', endereco: 'Rua Jerônimo Coelho, 170, Centro, Florianópolis' }, 

  { data: '02/09/2024', horario: '11:15', medico: 'Dr. Luiz Ferreira', especialidade: 'Clínico Geral', clinica: 'Clínica Centro Médico', telefone: '(48) 99999-9999', endereco: 'Avenida Rio Branco, 156, Centro, Florianópolis' } 

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

            <th>Clínica</th> 

            <th>Telefone</th> 

            <th>Endereço</th> 

          </tr> 

        </thead> 

        <tbody> 

          {agendamentos.map((agendamento, index) => ( 

            <tr key={index}> 

              <td>{agendamento.data}</td> 

              <td>{agendamento.horario}</td> 

              <td>{agendamento.medico}</td> 

              <td>{agendamento.especialidade}</td> 

              <td>{agendamento.clinica}</td> 

              <td>{agendamento.telefone}</td> 

              <td>{agendamento.endereco}</td> 

            </tr> 

          ))} 

        </tbody> 

      </table> 

    </div> 

  ); 

}; 

 

export default ListaAgendamentos; 