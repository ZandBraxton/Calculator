const result = document.querySelector('.display')
result.textContent = 0
let x = null
let y = null
let y2 = null
let n = null
let sum = 0

//Get varible for button press
const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        remClass()
        const input = button.value
        console.log(`First X ${x}`)
        console.log(`First Y ${y}`)
        console.log(`First N ${n}`)
        console.log(`First Sum ${sum}`)
            switch (input) {
            case '=':
                if (x === null) {
                    break
                } else if (y2 != null) {
                    x = parseFloat(x)
                    y = parseFloat(y2)
                    sum = operate(n, x, y)
                    result.textContent = sum.toLocaleString()
                    y2 = y
                    y = null
                    x = sum.toString()
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
                    y2 = y
                    y = null
                    x = sum.toString()
                    break
                } else if (sum != 0) {
                    x = parseFloat(x)
                    y = parseFloat(x)
                    sum = operate(n, x, y)
                    result.textContent = sum.toLocaleString()
                    y = null
                    x = sum.toString()
                    break
                }
                break
            case '+':
            case '-':
            case '*':
            case '/':
                button.classList.add('selected')
                y2 = null
                if (x === null) {
                    break
                // } else if (sum != 0) {
                //     x = parseFloat(x)
                //     y = parseFloat(sum)
                //     sum = operate(n, x, y)
                //     console.log(typeof sum)
                //     n = input
                //     y = null
                //     x = sum.toString()
                //     break
                } else if (y != null) {
                    if (x === "Error" || y === "Error") {
                        result.textContent = "Error"
                        console.log("Hi")
                        y = null
                        break
                    }
                    console.log("hi")
                    x = parseFloat(x)
                    y = parseFloat(y)
                    sum = operate(n, x, y)
                    result.textContent = sum.toLocaleString()
                    n = input
                    y = null
                    x = sum.toString()
                    break
                }
                n = input
                break
            case '%':
                //y2 = null
                if (x === null) {
                    break
                } else if (y != null) {
                    y = y / 100;
                    result.textContent = y
                    break
                }
                x = x / 100;
                result.textContent = x
                break
            case 'AC':
                x = null
                y = null
                y2 = null
                n = null
                sum = 0
                result.textContent = 0
                break
            case 'C':
                if (y != null) {
                    y = 0
                    result.textContent = 0
                    break;
                } else if (sum === "Error") {
                    x = null
                    y = null
                    n = null
                    y2 = null
                    result.textContent = 0
                    break
                } else {
                    x = null
                    y = null 
                    y2 = null
                    n = null
                    sum = null
                    result.textContent = 0
                    break
                }
                break
            default:
                y2 = null
                if (n != null) {
                    if (y === null) {
                        y = input
                        sum = 0;
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
                    break 
                }
            }
            console.log(`Second X ${x}`)
            console.log(`Second Y ${y}`)
            console.log(`Second N ${n}`)
            console.log(`Second Sum ${sum}`)
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


function remClass () {
    btn.forEach((button) => {
        button.classList.remove('selected')
    })
}
