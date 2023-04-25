import words from "./words.js";
import wordList from "./wordlist.js";
import toast from 'react-hot-toast';

let guessword = "GUESS"; //temp
let currRow = 1;
let currBox = 0;

let colorMap = new Map();

// handle key down
export const handleKeyDown = (key) => {
  key = key.toUpperCase();

  //! haven't used all the guesses
  if (currRow < 7) {
    if (key === "ENTER") {
      handleEnter();
      return;
    }
    if (key === "BACKSPACE") {
      handleBackspace();
      return;
    }
    if (key.match(/^[A-Z]$/) !== null) {
      buttonClicked(key);
      return;
    }
  }
};

// button clicked
export const buttonClicked = (key) => {
  //! haven't filled that row's boxes
  //! haven't used all the guesses
  if (currBox < 5 && currRow < 7) {
    const elemsInCurrRow = Array.from(
      document.getElementsByClassName("row-" + currRow)
    );
    elemsInCurrRow[currBox].innerText = key;
    currBox++;
  }
};

// handle enter (check)
export const handleEnter = () => {
  let typedWord = getTypedWord();

  const elemsInCurrRow = Array.from(
    document.getElementsByClassName("row-" + currRow)
  );

  if (currBox < 5) {
    toast("Not enough letters!", {position: "top-center", duration: 3000, style: {backgroundColor: "#FAA0A0", color: "white"}})
  } else {
    if (typedWord === guessword) {
      toast("You won! 🎉", {position: "top-center", duration: 3000});
      currRow = 7;
    } else {
      // if guessed word is not in the word list
      if (!wordList.includes(typedWord)) {
        toast("Not in word list", {position: "top-center", duration: 3000, style: {backgroundColor: "#FAA0A0", color: "white"}});
        return;
      }
    }

    let tempGuess = guessword;
    let tempType = typedWord;

    for (let i = 0; i < 5; i++) {
      // correct letter in correct spot
      if (typedWord.charAt(i) === guessword.charAt(i)) {
        elemsInCurrRow[i].style.backgroundColor = "#538d4e";

        tempGuess = tempGuess.split("");
        tempGuess[i] = " ";
        tempGuess = tempGuess.join("");

        tempType = tempType.split("");
        tempType[i] = " ";
        tempType = tempType.join("");

        changeKeyColor(typedWord.charAt(i), "correct");
      }
    }

    for (let i = 0; i < 5; i++) {
      if (tempType.charAt(i) !== " ") {
        if (tempGuess.indexOf(typedWord.charAt(i)) >= 0) {
          let index = tempGuess.indexOf(typedWord.charAt(i));
          elemsInCurrRow[i].style.backgroundColor = "#b59f3b";

          tempGuess = tempGuess.split("");
          tempGuess[index] = " ";
          tempGuess = tempGuess.join("");

          tempType = tempType.split("");
          tempType[i] = " ";
          tempType = tempType.join("");

          changeKeyColor(typedWord.charAt(i), "present");
        } else {
          tempType = tempType.split("");
          tempType[i] = "-";
          tempType = tempType.join("");
        }
      }
    }

    for (let i = 0; i < 5; i++) {
      if (tempType.charAt(i) === "-") {
        elemsInCurrRow[i].style.backgroundColor = "#3a3a3c";
        changeKeyColor(typedWord.charAt(i), "absent");
      }
    }

    currBox = 0;
    currRow = ++currRow;

    if (currRow === 7) {
      toast("Game over!", {position: "top-center", duration: 3000, style: {backgroundColor: "#FAA0A0", color: "white"}});
    }
  }
};

//handle backspace
export const handleBackspace = () => {
  if (currBox > 0) {
    const elemsInCurrRow = Array.from(
      document.getElementsByClassName("row-" + currRow)
    );
    elemsInCurrRow[currBox - 1].innerText = "";
    currBox--;
  }
};

//get typed word
const getTypedWord = () => {
  let typedWord = "";
  const elemsInCurrRow = Array.from(
    document.getElementsByClassName("row-" + currRow)
  );
  for (let i in elemsInCurrRow) {
    typedWord += elemsInCurrRow[i].innerText;
  }
  return typedWord;
};

// change key color
const changeKeyColor = (key, color) => {
  const keyDiv = document.getElementById(key);

  if (colorMap.has(key)) {
    // letters been used before
    if (color === "correct") {
      // was present now correct
      colorMap.set(key, color);
      keyDiv.style.backgroundColor = "#538d4e";
    }
  } else {
    //! letter hasn't been used before
    if (color === "correct") {
      colorMap.set(key, color);
      keyDiv.style.backgroundColor = "#538d4e";
    } else if (color === "present") {
      colorMap.set(key, color);
      keyDiv.style.backgroundColor = "#b59f3b";
    } else if (color === "absent") {
      colorMap.set(key, color);
      keyDiv.style.backgroundColor = "#3a3a3c";
    }
  }
};

// start function
export const startFunction = () => {
  const random = Math.floor(Math.random() * words.length);
  guessword = words[random].toUpperCase();
  console.log(guessword);
};
