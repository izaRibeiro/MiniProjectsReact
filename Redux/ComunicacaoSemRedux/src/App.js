import './App.css';
import React, { useState } from 'react';

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

   const [min, setMin] = useState(30);
   const [max, setMax] = useState(50);

  return (
    <div className="App">
       <h1>Redux</h1>
       <div  className="linha">
          <Intervalo min={min} max={max} title="Card 1" 
          onMinChanged={setMin} onMaxChanged={setMax} 
          purple>Teste</Intervalo>
       </div>
       <div  className="linha">
          <Media min={min} max={max} />
          <Soma min={min} max={max} />
          <Sorteio min={min} max={max} />
       </div>
    </div>
  );
}

export default App;
