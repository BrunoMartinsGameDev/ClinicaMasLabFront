import React, { useState } from 'react';
import './Prontuario.css';

const prontuarios = [
  { id: 1, data: '01/07/2024', paciente: 'Antony Kutinsky', medico: 'Dra. Maria Oliveira', motivo: 'Consulta de rotina', especialidade: 'Clínico Geral', status: 'Completo' },
  { id: 2, data: '15/06/2024', paciente: 'Antony Kutinsky', medico: 'Dr. Carlos Santos', motivo: 'Dor no peito', especialidade: 'Cardiologia', status: 'Em andamento' },
  { id: 3, data: '23/05/2024', paciente: 'Antony Kutinsky', medico: 'Dra. Fernanda Souza', motivo: 'Alergia na pele', especialidade: 'Dermatologia', status: 'Completo' },
  { id: 4, data: '10/05/2024', paciente: 'Antony Kutinsky', medico: 'Dr. Luiz Ferreira', motivo: 'Check-up anual', especialidade: 'Clínico Geral', status: 'Completo' }
];

const Prontuario = () => {
  const [feedbackVisible, setFeedbackVisible] = useState({});
  const [feedbackText, setFeedbackText] = useState({});
  const [submittedFeedback, setSubmittedFeedback] = useState({});

  const handleEnviarFeedback = (id) => {
    setFeedbackVisible({ ...feedbackVisible, [id]: true });
  };

  const handleEnviar = (id) => {
    setSubmittedFeedback({ ...submittedFeedback, [id]: feedbackText[id] });
    setFeedbackText({ ...feedbackText, [id]: '' });
    setFeedbackVisible({ ...feedbackVisible, [id]: false });
  };

  const handleDeleteFeedback = (id) => {
    setSubmittedFeedback({ ...submittedFeedback, [id]: '' });
  };

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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {prontuarios.map((prontuario) => (
            <tr key={prontuario.id}>
              <td>{prontuario.data}</td>
              <td>{prontuario.paciente}</td>
              <td>{prontuario.medico}</td>
              <td>{prontuario.motivo}</td>
              <td>{prontuario.especialidade}</td>
              <td>{prontuario.status}</td>
              <td>
                {!feedbackVisible[prontuario.id] && !submittedFeedback[prontuario.id] && (
                  <button className="feedback-button" onClick={() => handleEnviarFeedback(prontuario.id)}>Enviar Feedback</button>
                )}
                {feedbackVisible[prontuario.id] && (
                  <div className="feedback-form">
                    <textarea
                      value={feedbackText[prontuario.id] || ''}
                      onChange={(e) => setFeedbackText({ ...feedbackText, [prontuario.id]: e.target.value })}
                      placeholder="Escreva seu feedback da consulta..."
                    />
                    <br />
                    <button className="feedback-button" onClick={() => handleEnviar(prontuario.id)}>Enviar</button>
                  </div>
                )}
                {submittedFeedback[prontuario.id] && (
                  <div className="feedback-view">
                    <button className="feedback-button" onClick={() => setFeedbackVisible({ ...feedbackVisible, [prontuario.id]: true })}>Ver Feedback</button>
                    <p>{submittedFeedback[prontuario.id]}</p>
                    <button className="feedback-button" onClick={() => handleDeleteFeedback(prontuario.id)}>Excluir Feedback</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prontuario;
