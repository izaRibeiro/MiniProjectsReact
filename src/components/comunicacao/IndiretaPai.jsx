import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

export default (props) => {
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [bool, setBool] = useState(false);

    function fornecerInformacoes(nome, idade, bool) {
        setNome(nome);
        setIdade(idade);
        setBool(bool);
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