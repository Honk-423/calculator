let numOne;
let numTwo;
let operator;

const resultAsIntOrToFixed = (result) => {
    return result % 1 !== 0 ? result.toFixed(1): result;
};

const add = (a, b) => {
    let sum = a + b;

    return resultAsIntOrToFixed(sum);
};

const subtract = (a, b) => {
    let difference = a - b;

    return resultAsIntOrToFixed(difference);
};

const multiply = (a, b) => {
    let product = a * b;

    return resultAsIntOrToFixed(product);
};

const divide = (a, b) => {
    let quotient = a / b;
    
    return resultAsIntOrToFixed(quotient);
};

const resetAllInfo = () => {
    numOne = null;
    numTwo = null;
    operator = null;
    
    doesNumOneContainDecimal = false;
    doesNumTwoContainDecimal = false;

    hasOperateBeenCalled = false;
};

let hasOperateBeenCalled = false;

function operate(a, b, op) {
    if (a || a === 0 && b || b === 0 && op) {
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

const checkForDividingByZero = (firstNumber, operator, secondNumber) => {
    return operator === "÷" && firstNumber === 0 || secondNumber === 0 ? true : false;
};

const noDividingByZero = () => {
    if (!hasOperateBeenCalled) {
        alert("Nice try. Please input another number.");
    } else {
        alert("I appreciate your determination, but no.")
    };
};

const calcPara = document.querySelector("#calcPara");

const numbers = document.querySelectorAll(".number");

let additionalNumbers = [];

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        let input = number.outerText;
        
        if (!(hasOperateBeenCalled)) {
            calcPara.textContent += input;
    
            getNumbersFromInput();
        } else {
            additionalNumbers.push(input);
        };
    });
});

const decimalBtn = document.querySelector("#decimal");

let doesNumOneContainDecimal = false;
let doesNumTwoContainDecimal = false;

decimalBtn.addEventListener("click", () => {
    let input = decimalBtn.outerText;

    if (!(operator) && doesNumOneContainDecimal === false) {
        calcPara.textContent += input;
        
        doesNumOneContainDecimal = true;
    };

    if (operator && doesNumTwoContainDecimal === false) {
        calcPara.textContent += input;
        
        doesNumTwoContainDecimal = true;
    };

    if (hasOperateBeenCalled && additionalNumbers.indexOf(".") < 0) {
        additionalNumbers.push(input);
    };
});

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", () => {
    calcPara.replaceChildren();

    resetAllInfo();
});

const operators = document.querySelectorAll(".operator");

const checkForNumsAndOperator = (firstNum, operator, secondNum) => {
    return (firstNum || firstNum === 0) && operator 
    && (secondNum || secondNum === 0) ? true: false;
};

function operatorsFunctionality(input) {
    getNumbersFromInput();

        if (hasOperateBeenCalled) {
            calcPara.replaceChildren();

            if (checkForNumsAndOperator(numOne, operator, numTwo)) {
                if (checkForDividingByZero(numOne, operator, numTwo)) {
                    noDividingByZero();

                    resetAllInfo();
                } else {
                    calcPara.textContent += `${numOne} ${operator} ${numTwo}`
        
                    operate(numOne, numTwo, operator);
                };
            } else {
                resetAllInfo();
            };
            
            additionalNumbers = [];
        } else if (numOne != undefined && operator == undefined) {
            calcPara.textContent += ` ${input} `;
    
            operator = input;
        };
        
        if (checkForNumsAndOperator(numOne, operator, numTwo)
            && !(hasOperateBeenCalled)) {
            if (checkForDividingByZero(numOne, operator, numTwo)) {
                noDividingByZero();
            } else {
                operate(numOne, numTwo, operator);
    
                operator = input;
            };
        };
};

operators.forEach((op) => {
    op.addEventListener("click", () => {
        let input = op.outerText;
        
        operatorsFunctionality(input);
    });
});

const equalBtn = document.querySelector("#equal");

equalBtn.addEventListener("click", () => {
     if (hasOperateBeenCalled) {
        getNumbersFromInput();

        calcPara.replaceChildren();

            if (numOne && numTwo && operator) {
                calcPara.textContent += `${numOne} ${operator} ${numTwo}`
    
                operate(numOne, numTwo, operator);
            } else {
               resetAllInfo();
            };

        additionalNumbers = [];
    } else if (checkForDividingByZero(numOne, operator, numTwo)) {
        noDividingByZero();
    } else if (checkForNumsAndOperator(numOne, operator, numTwo) 
        && !(hasOperateBeenCalled)) {
        operate(numOne, numTwo, operator);
        
        getNumbersFromInput();
    };
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

        if (result || result === 0) {
            numOne = result;
        };

        if (additionalNumbers.length === 1) {
            numTwo = Number(additionalNumbers[0]);
        } else if (additionalNumbers.length > 1) {
            let convertedAdditionalNums = Number(additionalNumbers.join(""));

            numTwo = convertedAdditionalNums;
        };
};

document.addEventListener("keydown", (e) => {
    const validNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (validNums.toString().indexOf(e.key) > -1) {
        if (!(hasOperateBeenCalled)) {
            calcPara.textContent += e.key;
    
            getNumbersFromInput();
        } else {
            additionalNumbers.push(e.key);
        };
    };

    const validOps = ["/", "*", "-", "+"];

    if (validOps.indexOf(e.key) > -1) {
        let opInput;

        if (e.key === "/") {
            opInput = "÷";
            operatorsFunctionality(opInput);
        } else if (e.key === "*") {
            opInput = "×";
            operatorsFunctionality(opInput);
        } else if (e.key !== "/" || e.key === "*") {
            opInput = e.key;
            operatorsFunctionality(opInput);
        };
    };
});

/*  
*   INITIALIZE arr validNums
*       IF e.key is a valid number
*       PASTE code from numbers
*   INITIALIZE arr validOps
*       IF e.key is validOps 
*           IF e.key equals "/" convert operator to division symbol
*           IF e.key equals "*" convert operator to multiplication symbol
*       PASTE code from operators
*   IF period is clicked
*       PASTE code from decimal
*   IF equal is clicked
*       PASTE code from equal
*/