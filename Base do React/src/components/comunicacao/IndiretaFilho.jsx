import React from 'react';

export default (props) => {
    const idadeMinima = 50;
    const idadeMaxima = 80;

    const gerarIdade = () => parseInt(Math.random() * (idadeMaxima - idadeMinima) + idadeMinima);

    return (
        <div>
            <div>Filho</div>
            <button onClick={ () => {props.onClick('João', gerarIdade, true);} } >Fornecer Informações para o pai</button>
        </div>
    );
}