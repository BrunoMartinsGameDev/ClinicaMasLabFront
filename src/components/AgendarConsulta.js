// AgendarConsulta.js

import React, { useState, useEffect } from 'react';
import './AgendarConsulta.css';
import axios from 'axios'; // Importe o axios para fazer requisições HTTP

const AgendarConsulta = ({ onAgendar, onVoltar }) => {
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState('');
  const [medicoSelecionado, setMedicoSelecionado] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [especialidadesFalsas] = useState(['Cardiologia', 'Dermatologia', 'Ortopedia']); // Especialidades falsas
  const [medicos, setMedicos] = useState([]); // Estado para armazenar os médicos

  useEffect(() => {
    // Função para buscar médicos do backend
    const fetchMedicos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/medicos'); // Endpoint do backend que retorna os médicos
        setMedicos(response.data); // Atualiza o estado com os dados recebidos do backend
      } catch (error) {
        console.error('Erro ao buscar médicos:', error);
        // Tratamento de erro aqui
      }
    };

    fetchMedicos(); // Chama a função para buscar os médicos ao montar o componente
  }, []); // [] como segundo parâmetro para garantir que a chamada só aconteça uma vez ao montar o componente

  const handleAgendar = () => {
    onAgendar(data, hora, especialidadeSelecionada, medicoSelecionado);
  };

  return (
    <div className="agendar-consulta">
      <h2>Agendar Consulta</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleAgendar(); }}>
        <label>
          Especialidade:
          <select value={especialidadeSelecionada} onChange={(e) => setEspecialidadeSelecionada(e.target.value)} required>
            <option value="">Selecione uma especialidade</option>
            {especialidadesFalsas.map((especialidade, index) => (
              <option key={index} value={especialidade}>{especialidade}</option>
            ))}
          </select>
        </label>
        <label>
          Médico:
          <select value={medicoSelecionado} onChange={(e) => setMedicoSelecionado(e.target.value)} required>
            <option value="">Selecione um médico</option>
            {medicos.map((medico) => (
              <option key={medico.id} value={medico.nome}>{medico.nome}</option>
            ))}
          </select>
        </label>
        <label>
          Data:
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
        </label>
        <label>
          Hora:
          <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
        </label>
        <button type="submit">Agendar</button>
        <button type="button" onClick={onVoltar}>Voltar</button>
      </form>
    </div>
  );
};

export default AgendarConsulta;
