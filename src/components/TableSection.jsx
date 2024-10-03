import React from 'react';
import TableSegment from './TableSegment'


const TableSection = ({brandInfo}) => {
    let rowIndex = 1
    return (
        <>
            <tr className="row__brand">
                <td colSpan={2}>{brandInfo.brand}</td>
            </tr>
            {brandInfo.models.map(model => <TableSegment key={model.id} model={model}/>) }
        </>
    );
};

export default TableSection;