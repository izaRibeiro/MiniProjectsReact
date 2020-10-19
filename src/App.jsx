import React from 'react';
import './App.css';

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParmetro';
import Aleatorio from './components/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/Familia';
import FamiliaMembro from './components/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';

function App() {
  return (
    <div className="App">
      <div className="App-content">
          Mini Projetos
          <div className="cards">
            <Card titulo="Repetição" color="#161a1d">
              <ListaAlunos sobrenome="Ribeiro">
              </ListaAlunos>
            </Card>
            <Card titulo="Membros da família" color="#7400b8">
              <Familia sobrenome="Ribeiro">
                <FamiliaMembro nome="Maria" />
                <FamiliaMembro nome="José" />
                <FamiliaMembro nome="Camila" />
              </Familia>
            </Card>
            <Card titulo="Número aleatório" color="#003049">
              <Aleatorio primeiroNumero={1} 
              segundoNumero={10}/>
            </Card>
            <Card titulo="Componente com parâmetro" color="#d62828">
              <ComParametro nome="Aluno" 
              nota="9.0" />
            </Card>
            <Card titulo="Primeiro componente" color="#f77f00">
              <Primeiro />
            </Card>
          </div>
      </div>
    </div>
  );
}

export default App;
