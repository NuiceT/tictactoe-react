import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StartOverlay from "./components/StartOverlay/StartOverlay";
import Playground from "./components/Playground/Playground";

function App() {
  return (
    <div className="App">
      <StartOverlay></StartOverlay>
      <div className="container">
        <Playground></Playground>
      </div>
    </div>
  );
}

export default App;
