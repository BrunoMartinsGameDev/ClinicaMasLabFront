import React, { useState } from 'react';
import './ListaReceitas.css';

const receitas = [
  { medico: 'Oftamologista', clinica: 'Clínica São Judas', receita: 'Ver receita' },
  { medico: 'Endoscopia', clinica: 'GastroSuy', receita: 'Ver receita' },
  { medico: 'Dermatologista', clinica: 'Clínica Suellen Kuhnen', receita: 'Ver receita' },
  { medico: 'Gastroenterologista', clinica: 'Clínica Ciência', receita: 'Ver receita' },
  { medico: 'Otorrinolaringologista', clinica: 'Clínica São Judas', receita: 'Ver receita' },
  { medico: 'Proctologista', clinica: 'Clínica São Judas', receita: 'Ver receita' },
  { medico: 'Cardiologista', clinica: 'Clínica Sabin', receita: 'Ver receita' },
  { medico: 'Ortopedista', clinica: 'Clínica SOS Ortopedia Kobrasol', receita: 'Ver receita' }
];

const ListaReceitas = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [receitaSelecionada, setReceitaSelecionada] = useState('');

  const handleVerReceita = (receita) => {
    // Simulação de uma receita falsa
    const receitaFalsa = `Receita Fictícia do(a) ${receita.medico} na Clínica ${receita.clinica}`;

    // Atualiza o estado com a receita selecionada e abre o modal
    setReceitaSelecionada(receitaFalsa);
    setModalOpen(true);
  };

  const handleDownloadReceita = () => {
    // Aqui você pode adicionar a lógica para download da receita, se necessário
    console.log('Download da receita');
  };

  return (
    <div className="lista-receitas">
      <table>
        <thead>
          <tr>
            <th>Médico</th>
            <th>Clínica</th>
            <th>Receitas disponíveis</th>
          </tr>
        </thead>
        <tbody>
          {receitas.map((receita, index) => (
            <tr key={index}>
              <td>{receita.medico}</td>
              <td>{receita.clinica}</td>
              <td>
                <button className="ver-receita" onClick={() => handleVerReceita(receita)}>
                  Ver Receita
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <h2>Receita Fictícia</h2>
            <p>{receitaSelecionada}</p>
            <button onClick={handleDownloadReceita}>Download</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaReceitas;
