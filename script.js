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
    return operator(a,b);
}

//selecting and assigning operator buttons
const clear = document.querySelector('.clear');
const negativeNumber = document.querySelector('.posNeg');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const power = document.querySelector('.power');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');

//selecting and assigning number buttons
const numberButton = document.querySelectorAll('.number');
//const two = document.querySelector('.two');
//const three = document.querySelector('.three');
//const four = document.querySelector('.four');
//const five = document.querySelector('.five');
//const six = document.querySelector('.six');
//const seven = document.querySelector('.seven');
//const eight = document.querySelector('.eight');
//const nine = document.querySelector('.nine');
//const zero = document.querySelector('.zero');

//populate display and store value for operator function
const CalculatorDisplay = document.querySelector('.display');

let currentVarA = '';
let currentVarB = '';

numberButton.forEach(index => {
    index.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        currentVarA += e.target.innerText;
    })
})

//numBtnArr.addEventListener('click', function(i) {
//    currentVarA += one.innerText;
//    CalculatorDisplay.textContent = `${currentVarA}`;
//});


