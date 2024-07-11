import React from 'react';
import './Prontuario.css';

const prontuarios = [
  {
    data: '01/07/2024',
    medico: 'Dr. João Silva',
    especialidade: 'Cardiologia',
    diagnostico: 'Paciente com histórico de hipertensão. Recomendado exames adicionais.',
    receita: 'Prescrição de medicamento A e B por 30 dias.',
  },
  {
    data: '15/07/2024',
    medico: 'Dra. Ana Oliveira',
    especialidade: 'Ortopedia',
    diagnostico: 'Fratura leve no tornozelo esquerdo. Recomendado repouso e aplicação de gelo.',
    receita: 'Prescrição de analgésico C e reposição de vitamina D.',
  },
  {
    data: '25/07/2024',
    medico: 'Dr. Carlos Santos',
    especialidade: 'Dermatologia',
    diagnostico: 'Paciente com dermatite alérgica. Recomendado pomada e cuidados com a pele.',
    receita: 'Prescrição de pomada para dermatite.',
  },
];

const Prontuario = () => {
  return (
    <div className="prontuario-container">
      <h2>Meu Prontuário</h2>
      <div className="prontuarios">
        {prontuarios.map((prontuario, index) => (
          <div key={index} className="prontuario">
            <div className="prontuario-info">
              <div className="info">
                <strong>Data:</strong> {prontuario.data}
              </div>
              <div className="info">
                <strong>Médico:</strong> {prontuario.medico}
              </div>
              <div className="info">
                <strong>Especialidade:</strong> {prontuario.especialidade}
              </div>
              <div className="info">
                <strong>Diagnóstico:</strong> {prontuario.diagnostico}
              </div>
              <div className="info">
                <strong>Receita:</strong> {prontuario.receita}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prontuario;
