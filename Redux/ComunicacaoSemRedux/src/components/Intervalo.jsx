import React from 'react';
import Card from './Card';

import './Intervalo.css';

export default props => {

    const { min, max } = props;

    return (
        <Card title='Intervalo' purple>
            <div className='intervalo'>
                <span>
                    <strong>Mínimo</strong>
                    <input type='number' value={min}
                     onChange={event => props.onMinChanged(event.target.value)} />
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input type='number' value={max}  
                    onChange={event => props.onMaxChanged(event.target.value)} />
                </span>
            </div>
        </Card>
    )
}