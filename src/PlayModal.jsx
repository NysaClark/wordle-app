import React from "react";
import Modal from "react-bootstrap/Modal";
import Example1 from "./Images/Example1.PNG";
import Example2 from "./Images/Example2.PNG";
import Example3 from "./Images/Example3.PNG";

const PlayModal = ({ showPlay, setShowPlay }) => {
  return (
    <Modal show={showPlay} onHide={() => setShowPlay(!showPlay)}>
      <Modal.Header closeButton closeVariant="white"></Modal.Header>
      <Modal.Body>
        <h2>How To Play</h2>
        <h4>Guess the Wordle in 6 tries.</h4>
        <ul>
          <li>Each guess must be a valid 5-letter word.</li>
          <li>
            The color of the tiles will change to show how close your guess was
            to the word.
          </li>
        </ul>
        <h5>Examples</h5>
        <img src={Example1} alt="example 1"  />
        <p>W is in the word and in the correct spot.</p>
        <img src={Example2} alt="example 2" />
        <p>I is in the word but in the wrong spot.</p>
        <img src={Example3} alt="example 3"  />
        <p>U is not in the word in any spot.</p>
      </Modal.Body>
    </Modal>
  );
};

export default PlayModal;
