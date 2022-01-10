let firstOperand = '';
let secondOperand = '';
let operator = '';

const calcDisplay = document.querySelector('#calculatorDisplay');
const operatorButtons = document.querySelectorAll('.operatorButton');
const numberButtons = document.querySelectorAll('.numButton');
const equalButton = document.getElementById('equalButton');

//operator click functions 
operatorButtons.forEach(operatorButtons => {
    operatorButtons.addEventListener('click', e => {
        operator = e.target.textContent;
        console.log('operator: ' , operator);
        calcDisplay.value= '';
    });
});

//assign operands
numberButtons.forEach(numberButtons => {
    numberButtons.addEventListener('click', e => {
        let numberSelection = e.target.value;
        if (firstOperand && operator) {
            secondOperand += numberSelection;
            calcDisplay.value = secondOperand;
        } 
        else {
            firstOperand += numberSelection;
            calcDisplay.value = firstOperand;
        }
        console.log('firstOperand: ' , firstOperand, 'secondOperand: ' , secondOperand);
})
});

//clear button
document.getElementById('clearButton').addEventListener('click', () => {
    if (firstOperand && operator) {
        secondOperand = '';
        calcDisplay.value = '';
    } else {
        firstOperand = '';
        operator= '';
        calcDisplay.value = '';
    }
    // debugger;
})

//all clear button
document.getElementById('allClearButton').addEventListener('click', () => {
    firstOperand= '';
    secondOperand = '';
    operator = '';
    calcDisplay.value = '';
    // debugger;
})

//operator functions
function solveEquation(){
    equalButton.addEventListener('click', () => {
        switch(operator) {
            case "+": 
                calcDisplay.value = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case "-": 
                calcDisplay.value = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case "*": 
                calcDisplay.value = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case "/": 
                calcDisplay.value = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
        } let result = calcDisplay.value;
        console.log('the result is: ' + result);
    if (result) {
            firstOperand = result;
            secondOperand = '';
            operator = '';
            calcDisplay.value = firstOperand; 
            // debugger;
    }
    })    
}

solveEquation();