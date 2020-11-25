import React from 'react';
import Card from './Card';

export default props => {

    return (
        <Card title='Média dos Números' purple>
            <div>
                <span>
                    <span>Resultado </span>
                    <strong>{ 40 }</strong>
                </span>
            </div>
        </Card>
    )
}