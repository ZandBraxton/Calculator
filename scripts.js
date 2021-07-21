const result = document.querySelector('.display')
result.textContent = 0
let x = null
let y = null
let n = null
let sum = 0
//Get varible for button press
const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        const input = button.value
        console.log(`First log ${x}`)
            switch (input) {
            case '=':
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                if (x === null) {
                    break
                } else if (y != null) {
                    if (x === "Error" || y === "Error") {
                        result.textContent = "Error"
                        y = null
                        break
                    }
                    x = parseFloat(x)
                    y = parseFloat(y)
                    sum = operate(n, x, y)
                    result.textContent = sum.toLocaleString()
                    y = null
                    n = input
                    x = sum.toString()
                    console.log(x)
                    break
                }
                n = input
                console.log(n)
                break
            case 'AC':
                x = null
                y = null
                n = null
                sum = 0
                result.textContent = 0
                break
            case 'C':
                if (y != null) {
                    y = null
                    result.textContent = 0
                    break;
                } else if (sum === "Error") {
                    x = null
                    y = null
                    n = null
                    result.textContent = 0
                    break
                } else {
                    x = null
                    result.textContent = 0
                    break
                }
                break
            default:
                if (n != null) {
                    if (y === null) {
                        y = input
                        result.textContent = y
                        break
                    } else {
                        y += input
                        result.textContent = y
                        break
                    }
                    
                } else if (x != null) {
                    x += input
                    result.textContent = x
                } else {
                    result.textContent = input
                    x = input
                    console.log(x)
                    break 
                }
            }
    })
})

//make display update







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
    if (x === 0 || y === 0) {
        return "Error"
    }
    return x / y
}

function modulo (x, y) {
    return x % y
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
        case '%':
            return modulo(x, y);
    }
}



