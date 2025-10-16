let numOne;
let numTwo;
let operator;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    let quotient = a / b;

    if (quotient % 1 !== 0) {
        return quotient.toFixed(1);
    } else {
        return quotient;
    };

};

function operate(a, b, oper) {
    a = numOne;
    b = numTwo
    oper = operator;

    switch (oper) {
        case "+": 
            para.textContent += ` = ${add(a, b)}`
            break;
        case "-":
            para.textContent += ` = ${subtract(a, b)}`
            break;
        case "×":
            para.textContent += ` = ${multiply(a, b)}`
            break;
        case "÷":
            para.textContent += ` = ${divide(a, b)}`
            break;
    };

};

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number")

const para = document.createElement("p");

numbers.forEach(button => {
    button.addEventListener("click", () => {
        let input = Number(button.outerText);
        para.textContent += input;
    });
});

display.appendChild(para);

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
        if (button.outerText !== "CLEAR") {
            splitNumsAndOperator(para.textContent);
        }

        if (button.outerText === "CLEAR") {
            para.replaceChildren();
        };

        if (button.outerText === "÷" 
            && numOne !== undefined
            && operator === undefined) {
            operator = "/";
            para.textContent += " ÷ "
        };

        if (button.outerText === "×"
            && numOne !== undefined
            && operator === undefined) {
            operator = "*";
            para.textContent += " × "
        };

        if (button.outerText === "-"
            && numOne !== undefined
            && operator === undefined) {
            operator = "-";
            para.textContent += " - "
        };

        if (button.outerText === "+"
            && numOne !== undefined
            && operator === undefined) {
            operator = "+";
            para.textContent += " + "
        };

        if (button.outerText === "=") {
            if (numOne !== undefined 
                && operator !== undefined 
                && numTwo !== undefined
                && numTwo !== NaN
                && userInputsLength === 3) {
                    operate();
                };
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

let userInputsLength;

function splitNumsAndOperator(usersInput) {
    usersInput = para.textContent.split(" ");

    if (usersInput[0] !== "") {
        numOne = Number(usersInput[0]);
    };
    
    operator = usersInput[1];

    if (usersInput[2]) {
        numTwo = Number(usersInput[2]);
    };
    
    userInputsLength = usersInput.length
    console.log(usersInput);
};

/* 
*   SPLIT input into substrings/an array using operator as a delimiter
*   MAKE numOne = substring 1
*   MAKE operater = substring 2
*   MAKE numTwo = substring 3
*   MOVE splitNums into operate and call it
*   MAKE a = numOne in operate
*   MAKE b = numTwo in operate
*   MAKE operator = operator in operate // Probably need to change the name of one of them for this
*/