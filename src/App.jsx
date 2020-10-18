import React from 'react';
import './App.css';

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParmetro';
import Aleatorio from './components/Aleatorio';
import Card from './components/layout/Card';

function App() {
  return (
    <div className="App">
      <div className="App-content">
          Mini Projetos
          <div className="cards">
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
