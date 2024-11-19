import React from "react";
import Button from "./components/Button";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div>
      <h1>Hello, World</h1>
      <div className="container-example-btn">
        <Button
          label="Click Me"
          onClick={() => {
            alert("Hello Button Small");
          }}
          color="blue"
          size="small"
        ></Button>
        <Button
          label="Click Me"
          onClick={() => {
            alert("Hello Button Medium");
          }}
          color="red"
          size="medium"
          tooltip
          tooltipPosition="top"
          labelTooltip="Ini tooltip"
        />
        <Button
          label="Click Me"
          onClick={() => {
            alert("Hello Button Large");
          }}
          color="green"
          size="large"
        >
          <FontAwesomeIcon icon={faPen} />
        </Button>
      </div>
    </div>
  );
};

export default App;
