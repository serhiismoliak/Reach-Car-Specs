import React from 'react';

const TableCell = ({specs}) => {
    function capitalize(str='') {return str[0].toUpperCase() + str.slice(1);}

    return (
        <td>
            <ul>
                {Object.keys(specs).filter(tag => tag !== 'id')
                    .map((tag, index) => <li key={index}>{capitalize(tag)}: {specs[tag]}</li>)
                    
                }
            </ul>
        </td>
    );
};

export default TableCell;