import React, { useState } from 'react'; 

import './Configuracoes.css'; 

 

const Configuracoes = ({ nomeUsuario }) => { 

    const [email, setEmail] = useState(''); 

  const [telefone, setTelefone] = useState(''); 

 

  const handleSave = () => { 

    // Implementar lógica de salvamento 

  }; 

 

  return ( 

    <div className="configuracoes"> 

      <h2>Configurações</h2> 

      <div className="config-form"> 

        <label> 

          Alterar e-mail 

          <input 

            type="email" 

            value={email} 

            onChange={(e) => setEmail(e.target.value)} 

          /> 

        </label> 

        <label> 

          Alterar telefone 

          <input 

            type="text" 

            value={telefone} 

            onChange={(e) => setTelefone(e.target.value)} 

          /> 

        </label> 

        <button onClick={handleSave}>Salvar</button> 

        <button className="excluir-conta">Excluir Conta</button> 

      </div> 

    </div> 

  ); 

}; 

 

export default Configuracoes