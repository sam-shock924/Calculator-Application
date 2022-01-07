let firstOperand = null;
let secondOperand = null;
let operation = null;
let firstOperandChosen = false;
let secondOperandChosen = false;

const calcDisplay = document.querySelector('#calculatorDisplay');
const operatorButtons = document.querySelectorAll('.operatorButton');
const numberButtons = document.querySelectorAll('.numButton');
const equalButton = document.querySelector('.equalButton');
// let numberValue = calcDisplay.value;

operatorButtons.forEach(operatorButtons => {
    operatorButtons.addEventListener('click', () => {
        // console.log(operatorButtons.innerText);
        firstOperandChosen = true;
})
});

numberButtons.forEach(numberButtons => {
    numberButtons.addEventListener('click', () => {
        if (firstOperandChosen == true) {
            firstOperand = calcDisplay.value;
            calcDisplay.value = '';
            calcDisplay.value += numberButtons.textContent;
            firstOperandChosen = false;
            // console.log(firstOperand);
        }
        else {
            calcDisplay.value += numberButtons.textContent;
            secondOperand = calcDisplay.value;
        }
        console.log(firstOperand, secondOperand);
})
});

equalButton.addEventListener('click', () => {
    switch
})

