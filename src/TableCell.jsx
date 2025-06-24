import React, { useContext, useEffect, useState } from "react";
import { ColorContext } from "./ColorContext";
import { FillAllContext } from "./FillContext";

const TableCell = () => {
    const [color, setColor] = useState("");
    const selectedColor = useContext(ColorContext);
    const fillState = useContext(FillAllContext);
    const handleClick = () => {
        setColor(selectedColor);
    };

    useEffect(() => {
        setColor(selectedColor);
    }, [fillState])

    useEffect(() => {
        setColor(color);
    }, []);

    return (
        <td onClick={handleClick} style={{backgroundColor: color}} ></td>
    );
};

export default TableCell;