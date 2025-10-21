let numOne;
let numTwo;
let operator;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function operate(a, b, op) {
    getNumOneAndTwo();

    switch (op) {
        case "÷": 
            divide(a, b);
            break;
        case "×": 
            multiply(a, b);
            break;
        case "-": 
            subtract(a, b);
            break;
        case "+": 
            add(a, b);
            break;
    };
};

const calcPara = document.querySelector("#calcPara");

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        let input = Number(number.outerText);
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
    operate();
});

function getNumOneAndTwo() {
    let paraArr = calcPara.textContent.split(" ");

    numOne = paraArr[0];

    numTwo = paraArr[2]
};