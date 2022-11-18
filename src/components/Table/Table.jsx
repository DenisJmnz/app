import React from 'react';
import './Table.css';

const Table = ({data}) => {

   return(
        <table>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((keyName, i) => {
                       // const nameData = keyName === 'name' ? 'Nombre' : keyName === 'price' ? 'Precio' : 'Color';
                        return (
                            <th key={'th_'+i}>{keyName}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((elem, index) => {
                    return (
                        <tr key={index}>
                            {Object.values(elem).map((datum, i) => {
                                return (
                                    <td key={i}>{datum}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    ) 
}

export default Table;