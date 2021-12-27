const calcDisplay = document.querySelector('#calculatorDisplay');
const numberButtons = document.querySelector('.numButtons');
const operatorButtons = document.querySelector('.operatorButton');

operatorButtons.addEventListener('click', () => {
    console.log('operator button pressed');
});

numberButtons.addEventListener('click', () => {
    console.log(numberButtons.innerText);
});
