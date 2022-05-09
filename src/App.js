import logo from "./logo.svg";
import "./App.css";
import roverCommand from "./Components/MarsRover/roverFunctions/roverCommand";
import { useState } from "react";

function App() {
  const [command, setCommand] = useState("");

  const [maxX, setmaxX] = useState();
  const [maxY, setmaxY] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [z, setZ] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let gridSize = [maxX, maxY];
    let initial = [x, y, z];
    console.log(x, y, z, maxX, maxY, command);

    console.log(roverCommand([maxX, maxY], [x, y, z], command));

    // let finalpositon = roverCommand(gridSize, initial, command);
    // alert(`Value: ${finalpositon}`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="gridSize X"
            value={maxX}
            onChange={(e) => setmaxX(e.target.value)}
          />
          <input
            placeholder="gridSize Y"
            value={maxY}
            onChange={(e) => setmaxY(e.target.value)}
          />
          <input
            placeholder="x"
            value={x}
            onChange={(e) => setX(e.target.value)}
          />
          <input
            placeholder="y"
            value={y}
            onChange={(e) => setY(e.target.value)}
          />
          <input
            placeholder="z"
            value={z}
            onChange={(e) => setZ(e.target.value)}
          />
          <input
            placeholder="command "
            value={command}
            onChange={(e) => setCommand(e.target.value)}
          />
          <button type="submit">find</button>
        </form>
      </header>
    </div>
  );
}

export default App;
