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

    operator = null;

    amountOperateWasCalled++;
};

const calcPara = document.querySelector("#calcPara");

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        let input = number.outerText;
        calcPara.textContent += input;

        getNumbersFromInput();
    });
});

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", () => {
    calcPara.replaceChildren();

    numOne = null;
    numTwo = null;
    operator = null;

    amountOperateWasCalled = 0;
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

const equalBtn = document.querySelector("#equal");

equalBtn.addEventListener("click", () => {
    operate(numOne, numTwo, operator);
    
    getNumbersFromInput();
});

function getNumbersFromInput() {
    let paraArr = calcPara.textContent.split(" ");

    if (amountOperateWasCalled === 0) {
        numOne = Number(paraArr[0]);
    
        numTwo = Number(paraArr[2]);
    } else {
        let addFourEveryLoop = 0;
    
        for (let i = 1; i <= amountOperateWasCalled; i++) {
            addFourEveryLoop += 4;
        };
    
        numOne = Number(paraArr[0 + addFourEveryLoop]);
        numTwo = Number(paraArr[2 + addFourEveryLoop]);
    };

};