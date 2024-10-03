import React from 'react';
import TableCell from './TableCell';
import './TableSegment.css';
const TableSegment = ({model}) => {
    return (
        <>
            {model.collection.map((specs, index) => (
                <tr key={specs.id}>
                    {index === 0 ? 
                    (<>
                        <td className='cell__model' rowSpan={model.collection.length}>{model.name}</td><TableCell specs={specs}/>
                    </>)
                    : 
                    (<TableCell specs={specs}/>) }
                </tr>
            ))}
        </>
    );
};

export default TableSegment;