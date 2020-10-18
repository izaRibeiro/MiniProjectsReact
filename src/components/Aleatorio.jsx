import React from 'react';

export default (props) => {
    const numero = parseInt(Math.random() * (props.primeiroNumero, props.segundoNumero) + props.primeiroNumero);
    return <h2>Valor obtido: { numero }</h2>;
}