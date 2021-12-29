const calcDisplay = document.querySelector('#calculatorDisplay');
const operatorButtons = document.querySelectorAll('.operatorButton');
const numberButtons = document.querySelectorAll('.numButton');

operatorButtons.forEach(operatorButtons => {
    operatorButtons.addEventListener('click', () => {
        console.log(operatorButtons.innerText);
})
});

numberButtons.forEach(numberButtons => {
    numberButtons.addEventListener('click', () => {
        calcDisplay.value = numberButtons.innerText;
})
});

