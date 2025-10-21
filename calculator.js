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

let amountOperateWasCalled = 0;

function operate(a, b, op) {
    switch (op) {
        case "÷": 
            calcPara.textContent += ` = ${divide(a, b)}`;
            break;
        case "×": 
            calcPara.textContent += ` = ${multiply(a, b)}`;
            break;
        case "-": 
            calcPara.textContent += ` = ${subtract(a, b)}`;
            break;
        case "+": 
            calcPara.textContent += ` = ${add(a, b)}`;
            break;
    };

    amountOperateWasCalled++;
};

const calcPara = document.querySelector("#calcPara");

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        let input = number.outerText;
        calcPara.textContent += input;
    });
});

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", () => {
    calcPara.replaceChildren();
});

const operators = document.querySelectorAll(".operator");

operators.forEach((op) => {
    op.addEventListener("click", () => {
        getNumbersFromInput();

        if (numOne && operator == undefined) {
            let input = op.outerText;
            calcPara.textContent += ` ${input} `;
    
            operator = input;
        } else if (numTwo) {
            operate(numOne, numTwo, operator);
        };
    });
});

/*  
*   IF numOne exists and operator is undefined or null allow appending 
*   the operator to calcPara
*   ELSE IF numTwo exists call op
*/
// Should prevent user from inputting an operator before giving numOne 
// a value or adding an operator after numTwo but before the result.

/* 
*   INITIALIZE amountOperateWasCalled as a global variable with the 
*   value 0
*   INCREMENT amountOperateWasCalled every time operate is called
*   SET operator to null whenever operate is called
    // Should allow the user to keep inputting operators but only
    // in the correct spot
*   INITIALIZE for loop in getNumOneAndTwo with the value zero
*   ADD 4 to numOne and numTwo's index in paraArr on every loop
*/
// Should keep changing the index number of numOne and numTwo
// so the correct numbers are operated on

/* 
*   SET numOne, numTwo, operator to null and amountOperateWasCalled to
*   zero whenever clear is clicked
*/
// Prevents bugs from occurring due to old information not being 
// properly wiped out

const equalBtn = document.querySelector("#equal");

equalBtn.addEventListener("click", () => {
    getNumbersFromInput();

    operate(numOne, numTwo, operator);
});

function getNumbersFromInput() {
    let paraArr = calcPara.textContent.split(" ");

    numOne = Number(paraArr[0]);

    numTwo = Number(paraArr[2])
};