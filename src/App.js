import React, { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import MainLogin from './components/MainLogin';
import LoginMedico from './components/LoginMedico';
import MenuUsuario from './components/MenuUsuario';
import MenuMedico from './components/MenuMedico';
import ListaReceitas from './components/ListaReceitas';
import Prontuario from './components/Prontuario';
import Configuracoes from './components/Configuracoes';
import ListaAgendamentos from './components/ListaAgendamento';
import GerarDocumento from './components/GerarDocumento';
import SearchBar from './components/SearchBar';
import ResultadosMedicos from './components/ResultadosMedicos';
import Agendamento from './components/Agendamento';
import './App.css';
 
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [isUser, setIsUser] = useState(true);
  const [currentView, setCurrentView] = useState('mainLogin');
  const [selectedEspecialidade, setSelectedEspecialidade] = useState('');
  const [selectedMedico, setSelectedMedico] = useState(null);
 
  const handleLogin = (cpf, senha) => {
    setIsLoggedIn(true);
    setNomeUsuario('Antony Kutinsky');
    setIsUser(true);
    setCurrentView('menu');
  };
 
  const handleEmployeeLogin = (crm, senha) => {
    setIsLoggedIn(true);
    setNomeUsuario('Dr. Fulano de Tal');
    setIsUser(false);
    setCurrentView('menu');
  };
 
  const handleLogout = () => {
    setIsLoggedIn(false);
    setNomeUsuario('');
    setCurrentView('mainLogin');
  };
 
  const handleHome = () => {
    setCurrentView('menu');
  };
 
  const handleSearch = (especialidade) => {
    setSelectedEspecialidade(especialidade);
    setCurrentView('resultadosMedicos');
  };
 
  const handleSelectMedico = (medico) => {
    setSelectedMedico(medico);
    setCurrentView('agendamento');
  };
 
  const renderView = () => {
    switch (currentView) {
      case 'mainLogin':
        return <MainLogin onLogin={handleLogin} onEmployeeButtonClick={() => setCurrentView('loginMedico')} />;
      case 'loginMedico':
        return <LoginMedico onEmployeeLogin={handleEmployeeLogin} onPatientButtonClick={() => setCurrentView('mainLogin')} />;
      case 'menu':
        return (
<>
<SearchBar onSearch={handleSearch} />
            {isUser ? <MenuUsuario onOptionClick={setCurrentView} /> : <MenuMedico onOptionClick={setCurrentView} />}
</>
        );
      case 'resultadosMedicos':
        return <ResultadosMedicos especialidade={selectedEspecialidade} onSelect={handleSelectMedico} />;
      case 'agendamento':
        return <Agendamento medico={selectedMedico} onVoltar={() => setCurrentView('resultadosMedicos')} />;
      case 'historico':
        return <Prontuario />;
      case 'receitas':
        return <ListaReceitas />;
      case 'prontuario':
        return <Prontuario />;
      case 'agendamentos':
        return <ListaAgendamentos />;
      case 'configuracoes':
        return <Configuracoes nomeUsuario={nomeUsuario} />;
      case 'gerarDocumentos':
        return <GerarDocumento />;
      default:
        return null;
    }
  };
 
  return (
<div className="app">
      {isLoggedIn ? (
<>
<Cabecalho nomeUsuario={nomeUsuario} onLogout={handleLogout} onHome={handleHome} />
          {renderView()}
</>
      ) : (
        renderView()
      )}
</div>
  );
};
 
export default App;