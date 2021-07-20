function add(x, y) {
    return x + y
}

function subtract (x, y) {
    return x - y
}

function multiply (x, y) {
    return x * y
}

function divide (x, y) {
    return x / y
}

function operate(n, x, y) {
    switch(n) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
}

let x = 3
let y = 4
let n = '-'
console.log(operate(n, x, y))