let numOne;
let numTwo;
let operator;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    let quotient = a / b;
};

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
        let input = op.outerText;
        calcPara.textContent += ` ${input} `;

        operator = input;
    });
});

const equalBtn = document.querySelector("#equal");

equalBtn.addEventListener("click", () => {
    getNumOneAndTwo();

    operate(numOne, numTwo, operator);
});

function getNumOneAndTwo() {
    let paraArr = calcPara.textContent.split(" ");

    numOne = Number(paraArr[0]);

    numTwo = Number(paraArr[2])
};