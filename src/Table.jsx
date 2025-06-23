import React, { useState } from 'react';
import TableRow from './TableRow';

const Table = (props) => {
    const { rows, columns } = props;

    const rowArray = [];
    for (let i = 0; i < rows; i++)
        rowArray.push(<TableRow key={i} rowID={i} columns={columns}/>);

    return (
        <table>
            <tbody>
                {rowArray}
            </tbody>
        </table>
    );
};

export default Table;