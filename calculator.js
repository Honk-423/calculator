let numOne;
let numTwo;
let operator;

const add = (a, b) => {
    let sum = a + b;

    if (sum % 1 !== 0) {
        return sum.toFixed(1);
    } else {
        return sum;
    };
};

const subtract = (a, b) => {
    let difference = a - b;

    if (difference % 1 !== 0) {
        return difference.toFixed(1);
    } else {
        return difference;
    };
};

const multiply = (a, b) => {
    let product = a * b;

    if (product % 1 !== 0) {
        return product.toFixed(1);
    } else {
        return product;
    };
};

const divide = (a, b) => {
    let quotient = a / b;
    
    if (quotient % 1 !== 0) {
        return quotient.toFixed(1);
    } else {
        return quotient;
    };
};

let hasOperateBeenCalled = false;

function operate(a, b, op) {
    if (a && b && op) {
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

        hasOperateBeenCalled = true;
    };
};

const calcPara = document.querySelector("#calcPara");

const numbers = document.querySelectorAll(".number");

let additionalNumbers = [];

numbers.forEach((number) => {
    let input = number.outerText;

    number.addEventListener("click", () => {
        if (!(hasOperateBeenCalled)) {
            calcPara.textContent += input;
    
            getNumbersFromInput();
        } else {
            additionalNumbers.push(input);
        };
    });
});

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", () => {
    calcPara.replaceChildren();

    numOne = null;
    numTwo = null;
    operator = undefined;


});

const operators = document.querySelectorAll(".operator");

operators.forEach((op) => {
    op.addEventListener("click", () => {
        let input = op.outerText;
        
        getNumbersFromInput();
        
        if (hasOperateBeenCalled) {
            calcPara.replaceChildren();

            calcPara.textContent += `${numOne} ${operator} ${numTwo}`
        } else if (numOne && operator == undefined) {
            calcPara.textContent += ` ${input} `;
    
            operator = input;
        } else if (numOne && numTwo && operator) {
            operate(numOne, numTwo, operator);

            operator = input;
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
        if (paraArr[0]) {
            numOne = Number(paraArr[0]);
        };
    
        if (paraArr[2]) {
            numTwo = Number(paraArr[2]); 
        };

        let result = Number(paraArr[4]);

        if (result) {
            numOne = result;
        };

        if (additionalNumbers.length === 1) {
            numTwo = Number(additionalNumbers[0]);
        } else if (additionalNumbers.length > 1) {
            let convertedAdditionalNums = Number(additionalNumbers.join(""));

            numTwo = convertedAdditionalNums;
        };
};