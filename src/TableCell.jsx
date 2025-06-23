import React from "react";

const TableCell = (props) => {
    const { selectedColor } = props;
    const handleClick = (e) => {
        e.target.style.backgroundColor = selectedColor;
    };

    return (
        <td onClick={handleClick}></td>
    );
};

export default TableCell;