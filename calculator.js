let numOne;
let numTwo;
let operator;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function operate(a, b, operator) {

};

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number")

const p = document.createElement("p");

numbers.forEach(button => {
    button.addEventListener("click", () => {
        let input = Number(button.outerText);
        p.textContent += input;
    });
});

display.appendChild(p);

// GOAL: Take the input from the user pressing the buttons and have it 
// appear in display
/*
*   MAKE a reference to display
*   MAKE a reference to all buttons
*   USING an event listener
*       ADD the correct number to display when it is pressed
*       (Possibly make a node list, use forEach to cycle through it.
*       and return it's text content so that separate event listeners
*        do not have to be made for each number button.
*  STORE display content somewhere...
*/

const operators = document.querySelectorAll(".operator")

operators.forEach(button => {
    button.addEventListener("click", () => {
        if (button.outerText === "CLEAR") {
            p.replaceChildren();
        };
    });
});


/*  GOAL: MAKE operators appear on screen
*   MAKE a reference to operators
*   USING an event listener
*       GIVE operator the value of the button's outerText
*       IF outerText equals ÷ use /
*       IF outerText equals × use *
*       ELSE if outerText equals = call operate function
*       ELSE use outerText
*       ADD space before and after operator so it looks better 
*       EX: p.textContent += ` ${operator} `
*/