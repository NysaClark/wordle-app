import React from "react";
import { MdOutlineBackspace } from "react-icons/md";
const Keyboard = () => {
  return (
    <div id="keyboard">
      {/* <div id="keyboard-module"> */}
      <div className="key-row">
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">Q</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">W</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">E</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">R</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">T</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">Y</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">U</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">I</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">O</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">P</button>
      </div>
      <div className="key-row">
        <div className="flex-div"></div>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">A</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">S</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">D</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">F</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">G</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">H</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">J</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">K</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">L</button>
        <div className="flex-div"></div>
      </div>

      <div className="key-row">
        <button id="enter" value="Enter" /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">
          Enter
        </button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">Z</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">X</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">C</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">V</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">B</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">N</button>
        <button /* onClick={(event) => buttonClicked(event)} */ className="keyboard-button">M</button>
        <button value="Backspace" id="backspace" className="keyboard-button">
          <MdOutlineBackspace /* onClick={() => buttonClicked("Backspace")} */ />
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Keyboard;
