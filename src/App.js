import "./App.css";
import { useState } from "react";

import data from "./data.json";

function App() {
  const factsObject = data.data;
  const [num, setNum] = useState(0);

  const getFact = () => {
    setNum(Math.floor(Math.random() * factsObject.length));
  };

  const Indivfact = factsObject[num].fact;
  return (
    <div className="App">
      <div className="container">
        <p className="title">dogs are awesome, here's a random fact...</p>
        <p className="fact">{Indivfact}</p>

        <button className="btn" onClick={() => getFact()}>
          Show Another
        </button>
      </div>
    </div>
  );
}

export default App;
