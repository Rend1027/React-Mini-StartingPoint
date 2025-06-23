import React from "react";
import TableCell from "./TableCell";

const TableRow = (props) => {
    const { rowID, columns } = props;
    const colArray = [];
    for (let i = 0; i < columns; i++)
        colArray.push(<TableCell key={`${rowID}-${i}`}/>);

    return (
        <tr>
            {colArray}
        </tr>
    );
};

export default TableRow;