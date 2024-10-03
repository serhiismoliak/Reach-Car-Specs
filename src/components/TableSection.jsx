import React from 'react';
import TableSegment from './TableSegment';
import './TableSection.css';

const TableSection = ({brandInfo}) => {
    let rowIndex = 1
    return (
        <>
            <tr>
                <td className="row__brand" colSpan={2}>{brandInfo.brand}</td>
            </tr>
            {brandInfo.models.map(model => <TableSegment key={model.id} model={model}/>) }
        </>
    );
};

export default TableSection;