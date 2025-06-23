import React, { useState } from 'react';
import TableRow from './TableRow';

const Table = (props) => {
    const { rows, columns, selectedColor } = props;

    const rowArray = [];
    for (let i = 0; i < rows; i++)
        rowArray.push(<TableRow key={i} rowID={i} columns={columns} selectedColor={selectedColor}/>);

    return (
        <table>
            <tbody>
                {rowArray}
            </tbody>
        </table>
    );
};

export default Table;