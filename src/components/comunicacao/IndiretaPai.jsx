import React from 'react';
import IndiretaFilho from './IndiretaFilho';

export default (props) => {
    let nome = "?";
    let idade = 0;
    let bool = false;

    function fornecerInformacoes(nome, idade, bool) {
        nome = nome;
        idade = idade;
        bool = bool;
        
        console.log(nome, idade, bool)
    }
    return (
        <div>
            <div>Pai</div>
            <div>Nome: { nome }</div>
            <div>Idade: { idade }</div>
            <div>Bool: { bool ? 'Verdadeiro' : 'Falso' }</div>
            <hr></hr>
            <IndiretaFilho onClick={fornecerInformacoes} />
        </div>
    );
}