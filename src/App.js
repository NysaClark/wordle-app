import React, { useEffect } from "react"
import Game from "./Game";
import Header from "./Header";
import "./App.css";
import { handleKeyDown, startFunction } from "./util";

function App() {
  window.onkeydown = (event) => { handleKeyDown(event.key) }
  
  useEffect(() => {
    startFunction();
  }, [])

  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
}

export default App;
