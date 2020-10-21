import React from 'react';

export default (props) => {
    return (
        <div>
            <div>Filho</div>
            <button onClick={ () => {props.onClick('João', 57, true);} } >Fornecer Informações</button>
        </div>
    );
}