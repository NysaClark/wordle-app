import React, { useEffect } from "react"
import Game from "./Game";
import Header from "./Header";
import "./App.css";
import { handleKeyDown, startFunction } from "./util";
import { Toaster } from 'react-hot-toast';

function App() {
  window.onkeydown = (event) => { handleKeyDown(event.key) }
  
  useEffect(() => {
    startFunction();
  }, [])

  return (
    <div className="App">
      <Header />
      <Game />
      <Toaster />
    </div>
  );
}

export default App;
