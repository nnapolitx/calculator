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
        return 'ERR: / by 0'
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
let currentOperator = ''

numberButton.forEach(index => {
    index.addEventListener('click', (e) => {
        if (currentOperator === ''){
            if (currentVarA.length > 10){
                CalculatorDisplay.textContent = currentVarA;
                return currentVarA;
            }else {
                currentVarA += e.target.innerText;
                CalculatorDisplay.textContent = currentVarA;
            }
            
        }
        else if (currentOperator !== ''){
            if (currentVarB.length > 10){
                CalculatorDisplay.textContent = currentVarB;
                return currentVarB;
            }else {
                currentVarB += e.target.innerText;
                CalculatorDisplay.textContent = currentVarB;
            }
        }
    });
});
//if the <currentOperator> is empty, user should be on the <a> variable, if not, the user should be on the <b> variable. 


operatorButton.forEach(index => {
    index.addEventListener('click', (e) => {
        if (currentOperator === '' && currentVarA === '') {
            currentVarA = CalculatorDisplay.textContent;
            currentOperator = e.target.classList[0];
        }
        else if (currentOperator === '') {
            currentOperator = e.target.classList[0];

            document.querySelector('.percent').disabled = false;
            document.querySelector('.decimal').disabled = false;
        }
        else if (currentOperator !== '') {
            let newOperator = '';
            newOperator = e.target.classList[0];
            const chainAnswer = operate(currentVarA, currentOperator, currentVarB);
            CalculatorDisplay.textContent = chainAnswer;
            currentOperator = newOperator;
            currentVarA = chainAnswer;
            currentVarB = '';

            document.querySelector('.percent').disabled = false;
            document.querySelector('.decimal').disabled = false;
        }
    });
});
//if the <currentOperator> variable is empty, store the target in this variable; if it already has an operator stored, store the clicked operator on <newOperator>, evaluate the variables and <currentOperator>, return the evaluation in the display, the <a> variable now stores the displayed value, <b> is empty and ready for input, and <currentOperator> receives clicked <newOperator> value. 

//evaluate the function by invoking the operate function, and save the answer so it can be evaluated with another operation
equals.addEventListener('click', () => {
    const answer = operate(currentVarA, currentOperator, currentVarB);
    CalculatorDisplay.textContent = answer;
    currentVarA = '';
    currentVarB = '';
    currentOperator = '';

    document.querySelector('.percent').disabled = false;
    document.querySelector('.decimal').disabled = false;
});

//clear the display and all variables.
clear.addEventListener('click', () => {
    CalculatorDisplay.textContent = '';
    currentVarA = '';
    currentVarB = '';
    currentOperator = '';

    document.querySelector('.percent').disabled = false;
    document.querySelector('.decimal').disabled = false;
});

percent.addEventListener('click', () => {
    if (currentOperator === '') {
        currentVarA = currentVarA/100;
        CalculatorDisplay.textContent = currentVarA;
        document.querySelector('.percent').disabled = true;
    }
    else if (currentOperator !== '') {
        currentVarB = currentVarB/100;
        CalculatorDisplay.textContent = currentVarB;
        document.querySelector('.percent').disabled = true;
    }
});

posNeg.addEventListener('click', () => {
    if (currentOperator === '') {
        currentVarA = currentVarA - (currentVarA*2);
        CalculatorDisplay.textContent = currentVarA;
    }
    else if (currentOperator !== '') {
        currentVarB = currentVarB - (currentVarB*2)
        CalculatorDisplay.textContent = currentVarB;
    }
});

decimal.addEventListener('click', () => {
    if (currentOperator === '') {
        currentVarA += '.';
        CalculatorDisplay.textContent = currentVarA;
        document.querySelector('.decimal').disabled = true;
    }
    else if (currentOperator !== '') {
        currentVarB += '.';
        CalculatorDisplay.textContent = currentVarB;
        document.querySelector('.decimal').disabled = true;
    }
});


// Keyboard functionality
document.addEventListener('keypress', (event) => {
    const allOperations = {
        '+': 'plus',
        '-': 'minus',
        '/': 'divide',
        '*': 'multiply',
        '^': 'power',
        '%': 'percent',
    };

    if (!Number.isNaN(+event.key) && event.key !== ' ') {
        document.getElementById(`number-${event.key}`).click();
    }   
    else if (event.key === 'Delete' || event.key === 'c' || event.key === 'Backspace') {
        document.getElementById('clear').click();
    }  
    else if (event.key === '.') {
        document.getElementById('decimal').click();
    }
    else if (event.key === '=' || event.key === 'Enter') {
        document.getElementById('equal').click();
    }
    else if (['+', '-', '*', '/', '^', '%'].includes(event.key)) {
        document.getElementById(allOperations[event.key]).click();
    }
    else {
        console.log('Wrong key:', event.key);
    }

});