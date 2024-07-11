import React, { useState } from 'react';
import './BuscaMedica.css'; 


const BuscaMedica = ({ onEspecialidadeClick }) => { 
  const [termoBusca, setTermoBusca] = useState('');

  const handleBusca = (e) => { 
    e.preventDefault(); 
    // Implementar lógica de busca 
  };

  return ( 
    <div className="busca-medica"> 
      <form onSubmit={handleBusca}> 
        <input 
          type="text" 
          placeholder="O que você procura?" 
          value={termoBusca} 
          onChange={(e) => setTermoBusca(e.target.value)} 
        /> 
        <button type="submit">Buscar</button> 
      </form> 

      <div className="resultados-busca"> 
        <div className="card-especialidade" onClick={() => onEspecialidadeClick('Dermatologista')}> 
          <div className="imagem-medico-container">
           
          </div>
          <p>Dr. Fulano de Tal</p> 
          <p>CRM: 626.999-SC</p> 
          <p>Av. Barão do Rio Branco, 257</p> 
          <p>(48) 99999-1399</p> 
        </div> 
        {/* Repetir o bloco acima para cada médico */} 
      </div> 
    </div> 
  ); 
};

export default BuscaMedica;