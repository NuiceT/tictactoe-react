import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Playground from "./components/Playground/Playground";

function App() {
  const [playground, setPlayground] = useState<String[]>([]);

  const [user, setUser] = useState(true);

  const [result, setResult] = useState("");

  const addCross = (id: number) => {
    if (playground[id] === undefined && result === "") {
      let temp = [...playground];
      temp[id] = user ? "cross" : "circle";
      setUser(!user);
      setPlayground(temp);
      calculateWinner(temp);
    }
  };

  const calculateWinner = (playground: String[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    lines.forEach((line) => {
      const [x, y, z] = line;
      if (
        playground[x] &&
        playground[x] === playground[y] &&
        playground[x] === playground[z]
      ) {
        if (user) {
          return setResult("Player 1 (Cross) won!");
        }
        return setResult("Player 2 (Circle) won!");
      }
    });
  };

  return (
    <div className="App">
      <div className="container">
        <Playground addCross={addCross} playground={playground}></Playground>
      </div>
      <div className="container">
        <h1>{result}</h1>
      </div>
    </div>
  );
}

export default App;
