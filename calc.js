const calcDisplay = document.getElementById('calculatorDisplay');
const numberButtons = document.querySelector('.numButton');
const operatorButtons = document.querySelector('.operatorButton');

numberButtons.addEventListener('click', () => {
    console.log('number button pressed');
});

operatorButtons.addEventListener('click', () => {
    console.log('operator button pressed');
});
