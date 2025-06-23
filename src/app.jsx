import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddRow from "./buttons/AddRow";
import AddColumn from "./buttons/ClearGrid";
import Table from "./Table";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Grid Maker</h1>
      <Table/>
      <section className="button-container">
        <AddRow/>
        <AddColumn/>
      </section>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
