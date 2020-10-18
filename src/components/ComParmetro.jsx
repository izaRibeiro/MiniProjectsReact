import React from 'react';

export default props => {
    let nota = Math.ceil(props.nota);

    nota = nota + 1;

    return ( 
        <>
            <h2>{ props.nome }</h2>
            <h3>{ nota }</h3>
        </>
    );
}