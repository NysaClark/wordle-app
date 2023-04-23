import React from "react";
import { MdOutlineBackspace } from "react-icons/md";
import { buttonClicked, handleEnter, handleBackspace } from "./util";
const Keyboard = () => {
  return (
    <div id="keyboard">
      {/* <div id="keyboard-module"> */}
      <div className="key-row">
        <button
          id="Q"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          Q
        </button>
        <button
          id="W"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          W
        </button>
        <button
          id="E"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          E
        </button>
        <button
          id="R"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          R
        </button>
        <button
          id="T"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          T
        </button>
        <button
          id="Y"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          Y
        </button>
        <button
          id="U"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          U
        </button>
        <button
          id="I"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          I
        </button>
        <button
          id="O"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          O
        </button>
        <button
          id="P"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          P
        </button>
      </div>
      <div className="key-row">
        <div className="flex-div"></div>
        <button
          id="A"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          A
        </button>
        <button
          id="S"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          S
        </button>
        <button
          id="D"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          D
        </button>
        <button
          id="F"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          F
        </button>
        <button
          id="G"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          G
        </button>
        <button
          id="H"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          H
        </button>
        <button
          id="J"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          J
        </button>
        <button
          id="K"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          K
        </button>
        <button
          id="L"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          L
        </button>
        <div className="flex-div"></div>
      </div>

      <div className="key-row">
        <button
          id="enter"
          value="Enter"
          onClick={() => handleEnter()}
          className="keyboard-button"
        >
          Enter
        </button>
        <button
          id="Z"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          Z
        </button>
        <button
          id="X"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          X
        </button>
        <button
          id="C"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          C
        </button>
        <button
          id="V"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          V
        </button>
        <button
          id="B"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          B
        </button>
        <button
          id="N"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          N
        </button>
        <button
          id="M"
          onClick={(event) => buttonClicked(event.target.innerText)}
          className="keyboard-button"
        >
          M
        </button>
        <button
          onClick={() => handleBackspace()}
          value="Backspace"
          id="backspace"
          className="keyboard-button"
        >
          <MdOutlineBackspace />
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Keyboard;
