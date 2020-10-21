import React from 'react';
import DiretaFilho from './DiretaFilho';

export default (props) => {
    return (
        <div>
            <DiretaFilho texto="Filho1" numero={20} bool={true} />
            <DiretaFilho texto="Filho2" numero={17} bool={false} />
        </div>
    );
}