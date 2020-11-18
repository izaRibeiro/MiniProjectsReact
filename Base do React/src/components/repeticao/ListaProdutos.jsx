import React from 'react';
import produtos from '../../data/produtos';

import './ListaProdutos.css';

export default (props) => {

    const td = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>
                    {produto.id}
                </td>
                <td>
                    {produto.nome} 
                </td>
                <td>
                    R$ {produto.preco}
                </td>
            </tr>
        )
    })

    return (
        <div className='tabelaProdutos'>
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        Preço
                    </th>
                </tr>
                {td}
            </table>
        </div>
    );
}
