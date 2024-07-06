import React from 'react'; 

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

              <td>{receita.receita}</td> 

            </tr> 

          ))} 

        </tbody> 

      </table> 

    </div> 

  ); 

}; 

 

export default ListaReceitas;