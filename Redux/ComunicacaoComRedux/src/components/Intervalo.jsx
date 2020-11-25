import React from 'react';
import Card from './Card';

import './Intervalo.css';

export default props => {

    return (
        <Card title='Intervalo' purple>
            <div className='intervalo'>
                <span>
                    <strong>Mínimo</strong>
                    <input type='number' value={0} readOnly />
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input type='number' value={10}  readOnly />
                </span>
            </div>
        </Card>
    )
}