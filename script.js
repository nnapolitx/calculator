//Functions for the calculator will go here

function addition (a, b) {
    let sum = a + b;
    return sum;
}

function subtraction (a, b) {
    let difference = a - b;
    return difference;
}

function multiplication (a, b) {
    let product = a*b;
    return product;
}

function division (a, b) {
    if (b === 0){
        return 'Error, cannot divide by zero.'
    }
    else{
        let product = a/b;
        return product;
    }
}

function powerOfInt (a, b) {
    let power = a;
    for (i = 1; i<b; i++){
        power*=a;
    }
    return power;
}

//Function that is called with user input
function operate(a, operator, b) {
    a=Number(a);
    b=Number(b);
    let fn = window[operator];
    return fn(a,b);
}

//selecting and assigning non-operator buttons
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');
const percent = document.querySelector('.percent')
const posNeg = document.querySelector('.posNeg')

//selecting and assigning number buttons
const numberButton = document.querySelectorAll('.number');

//Selecting and assigning operator buttons
const operatorButton = document.querySelectorAll('.operator');

//populate display and store value for operator function
const CalculatorDisplay = document.querySelector('.display');

let currentVarA = '';
let currentVarB = '';
let currentOperator = '';

numberButton.forEach(index => {
    index.addEventListener('click', (e) => {
        if (currentOperator === ''){
        console.log(e.target.innerText);
        currentVarA += e.target.innerText;
        CalculatorDisplay.textContent = currentVarA;
        }
        else if (currentOperator !== ''){
            console.log(e.target.innerText);
            currentVarB += e.target.innerText;
            CalculatorDisplay.textContent = currentVarB;
        }
    });
});

operatorButton.forEach(index => {
    index.addEventListener('click', (e) => {
        if (currentOperator === '') {
            console.log(e.target.classList[0]);
            currentOperator = e.target.classList[0];
        }
        else if (currentOperator !== '') {
            console.log(currentOperator);
            let newOperator = '';
            newOperator = e.target.classList[0];
            console.log(newOperator);
        }
    });
});

equals.addEventListener('click', () => {
    const answer = operate(currentVarA, currentOperator, currentVarB);
    CalculatorDisplay.textContent = answer;
    currentVarA = '';
    currentVarB = '';
    currentOperator = '';
});