let guessword = "APPLE";
let currRow = 1;
let currBox = 0;

// handle key down
export const handleKeyDown = (event) => {
  console.log(event.target);
};

// button clicked
export const buttonClicked = (event) => {
  if (event.target.value === "Enter" || event.target.value === "Backspace") {
    console.log(event.target.value);
  } else {
    console.log(event.target.innerText);
  }
};

// chage key color

// handle enter (check)

//handle backspace

//get typed word

// start function
