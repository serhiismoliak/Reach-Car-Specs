import React from 'react';
import TableSection from './TableSection'

const Table = ({carBrands}) => {
    return (
        <table>
            <tbody>
                {carBrands.map((brandInfo) => <TableSection key={brandInfo.id} brandInfo={brandInfo}/>)}
            </tbody>
        </table>
    );
};

export default Table;