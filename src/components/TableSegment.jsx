import React from 'react';
import TableCell from './TableCell'

const TableSegment = ({model}) => {
    return (
        <>
            {model.collection.map((specs, index) => (
                <tr key={specs.id}>
                    {index === 0 ? 
                    (<>
                        <td rowSpan={model.collection.length}>{model.name}</td><TableCell specs={specs}/>
                    </>)
                    : 
                    (<TableCell specs={specs}/>) }
                </tr>
            ))}
        </>
    );
};

export default TableSegment;