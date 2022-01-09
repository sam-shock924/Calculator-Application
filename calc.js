let firstOperand = '';
let secondOperand = '';
let operator = '';

const calcDisplay = document.querySelector('#calculatorDisplay');
const operatorButtons = document.querySelectorAll('.operatorButton');
const numberButtons = document.querySelectorAll('.numButton');
const equalButton = document.getElementById('equalButton');

operatorButtons.forEach(operatorButtons => {
    operatorButtons.addEventListener('click', e => {
        operator = e.target.textContent;
        console.log('operator: ' , operator);
        calcDisplay.value= '';
    });
});

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
    }
})

