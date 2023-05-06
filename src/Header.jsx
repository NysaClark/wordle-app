import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaQuestionCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <>
      <div
        className={show ? "sidebar show" : "sidebar hidden"}
        onBlur={() => {
          console.log("blur");
        }}
      >
        <h2>Games</h2>
        <div className="bottom">
          <code>Made by Nysa Clark</code>
          <code>
            This website is developed only for Educational/Learning purpose
          </code>
        </div>
      </div>
      {showQuestion && (
        <Modal
          show={showQuestion}
          onHide={() => setShowQuestion(!showQuestion)}
        >
          <Modal.Header closeButton closeVariant="white">
            {/* <Modal.Title>Modal heading</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <h2>How To Play</h2>
            <h3>Guess the Wordle in 6 tries.</h3>
            <ul>
              <li>Each guess must be a valid 5-letter word.</li>
              <li>
                The color of the tiles will change to show how close your guess
                was to the word.
              </li>
            </ul>
            <h4>Examples</h4>
            <p>W is in the word and in the correct spot.</p>
            {/* Add Image */}
            <p>I is in the word but in the wrong spot.</p>
            {/* Add Image */}
            <p>U is not in the word in any spot.</p>
            {/* Add Image */}
          </Modal.Body>
        </Modal>
      )}

      <div className="header">
        <FiMenu id="menu-icon" onClick={() => setShow(!show)} />
        <h1>Wordle</h1>
        <div className="icons">
          <FaQuestionCircle onClick={() => setShowQuestion(!showQuestion)} />
          <BsFillBarChartFill />
          <AiFillSetting />
        </div>
      </div>
    </>
  );
};
export default Header;
