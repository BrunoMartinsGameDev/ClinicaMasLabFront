import React from 'react';
import './Cadastro.css';
 
const Cadastro = () => {
  return (
<div className="cadastro-container">
<h2>Realize seu cadastro</h2>
<form>
<div className="form-group">
<label>Nome completo</label>
<input type="text" placeholder="Nome completo" />
</div>
<div className="form-group">
<label>CPF</label>
<input type="text" placeholder="CPF" />
</div>
<div className="form-group">
<div class="form-group">
<label>Gênero</label>
<div class="radio-group">
<label>
<input type="radio" name="genero" value="masculino" /> Masculino
</label>
<label>
<input type="radio" name="genero" value="feminino" /> Feminino
</label>
</div>
</div>
</div>
<div className="form-group">
<label>Telefone</label>
<input type="text" placeholder="Telefone" />
</div>
<div className="form-group">
<label>Email</label>
<input type="email" placeholder="Email" />
</div>
<div className="form-group">
<label>Crie sua senha</label>
<input type="password" placeholder="Crie sua senha" />
</div>
<div className="form-group">
<label>Repita a senha</label>
<input type="password" placeholder="Repita a senha" />
</div>
<button type="submit">CRIAR CONTA</button>
</form>
</div>
  );
};
 
export default Cadastro;