import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddRow from "./buttons/AddRow";
import AddColumn from "./buttons/ClearGrid";
import Table from "./Table";


const App = () => {
    const [rows, setRows] = useState(5);
    const [columns, setColumns] = useState(4);
    const [selectedColor, setColor] = useState("red");

    const addRow = () => {
        setRows(rows + 1);
    }

    const addColumn = () => {
        setColumns(columns + 1);
    }

    const removeRow = () => {
        if (rows > 1)
            setRows(rows - 1);
    }

    const removeColumn = () => {
        if (columns > 1)
            setColumns(columns - 1);
    }

    const changeColor = (e) => {
        setColor(e.target.value);
    }

    return (
        <div className="app">
            <h1 className="title">Grid Maker</h1>
            <Table rows={rows} columns={columns} selectedColor={selectedColor}/>
            <section className="button-container">
                <button onClick={addRow}>Add Row</button>
                <button onClick={removeRow}>Remove Row</button>
                <button onClick={addColumn}>Add Column</button>
                <button onClick={removeColumn}>Remove Column</button>
                <select id="color-select" onChange={changeColor}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                </select>
            </section>
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
