const result = document.querySelector('.display')
result.textContent = 0
let constantVar = null
let secondVar = null
let secondVar2 = null
let operator = null
let sum = 0

//Get varible for button press
const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        remClass()
        const input = button.value
            switch (input) {
            case '=':
                if (constantVar === null) {
                    break
                } else if (secondVar2 != null) {
                    sum = operate(operator, constantVar, secondVar2)
                    result.textContent = sum.toLocaleString()
                    constantVar = sum.toString()
                    break
                } else if (secondVar != null) {
                    if (constantVar === "Error" || secondVar === "Error") {
                        result.textContent = "Error"
                        secondVar = null
                        break
                    }
                    if (constantVar === '.' || secondVar === '.') {
                        result.textContent = "Error"
                        secondVar = null
                        break
                    }
                    sum = operate(operator, constantVar, secondVar)
                    result.textContent = sum.toLocaleString()
                    secondVar2 = secondVar
                    secondVar = null
                    constantVar = sum.toString()
                    break
                } else if (sum != 0) {
                    sum = operate(operator, constantVar, secondVar)
                    result.textContent = sum.toLocaleString()
                    secondVar = null
                    constantVar = sum.toString()
                    break
                }
                break
            case '+':
            case '-':
            case '*':
            case '/':
                button.classList.add('selected')
                // secondVar2 = null
                if (constantVar === null) {
                    break
                } else if (secondVar != null) {
                    if (constantVar === "Error" || secondVar === "Error") {
                        result.textContent = "Error"
                        secondVar = null
                        break
                    }
                    sum = operate(operator, constantVar, secondVar)
                    result.textContent = sum.toLocaleString()
                    operator = input
                    secondVar = null
                    constantVar = sum.toString()
                    break
                }
                operator = input
                break
            case '%':
                //secondVar2 = null
                if (constantVar === null) {
                    break
                } else if (secondVar != null) {
                    secondVar = secondVar / 100;
                    result.textContent = secondVar
                    break
                }
                constantVar = constantVar / 100;
                result.textContent = constantVar
                break
            case '.':
                secondVar2 = null
                if (operator != null) {
                    if (secondVar === null) {
                        secondVar = input
                        sum = 0;
                        result.textContent = secondVar
                        break
                    } else {
                        for (let i = 0; i < secondVar.length; i++) {
                            if (secondVar[i] === '.') {
                                return
                            } 
                        }
                        secondVar += input
                        result.textContent = secondVar
                        break
                    }
                } else if (constantVar != null) {
                    for (let i = 0; i < constantVar.length; i++) {
                        if (constantVar[i] === '.') {
                            return
                        } 
                    }
                    constantVar += input
                    result.textContent = constantVar
                    break
                } else {
                    result.textContent = input
                    constantVar = input
                    break 
                }
            case 'AC':
                constantVar = null
                secondVar = null
                secondVar2 = null
                operator = null
                sum = 0
                result.textContent = 0
                break
            case 'C':
                if (secondVar != null) {
                    secondVar = null
                    operator = null
                    result.textContent = 0
                    break;
                } else if (sum === "Error") {
                    constantVar = null
                    secondVar = null
                    operator = null
                    secondVar2 = null
                    result.textContent = 0
                    break
                } else {
                    constantVar = null
                    secondVar = null 
                    secondVar2 = null
                    operator = null
                    sum = null
                    result.textContent = 0
                    break
                }
                break
            default:
                secondVar2 = null
                if (operator != null) {
                    if (secondVar === null) {
                        secondVar = input
                        sum = 0;
                        result.textContent = secondVar
                        break
                    } else {
                        secondVar += input
                        result.textContent = secondVar
                        break
                    }
                    
                } else if (constantVar != null) {
                    constantVar += input
                    result.textContent = constantVar
                } else {
                    result.textContent = input
                    constantVar = input
                    break 
                }
            }
    })
})


function add(constantVar, secondVar) {
    if (constantVar === '.' || secondVar === '.') {
        return "Error"
    }
    return parseFloat(constantVar) + parseFloat(secondVar)
}

function subtract (constantVar, secondVar) {
    if (constantVar === '.' || secondVar === '.') {
        return "Error"
    }
    return parseFloat(constantVar) - parseFloat(secondVar)
}

function multiply (constantVar, secondVar) {
    if (constantVar === '.' || secondVar === '.') {
        return "Error"
    }
    return parseFloat(constantVar) * parseFloat(secondVar)
}

function divide (constantVar, secondVar) {
    if (constantVar === 0 || secondVar === 0) {
        return "Error"
    }
    if (constantVar === '.' || secondVar === '.') {
        return "Error"
    }
    return parseFloat(constantVar) / parseFloat(secondVar)
}
function operate(operator, constantVar, secondVar) {
    switch(operator) {
        case '+':
            return Math.round(add(constantVar, secondVar));
        case '-':
            return Math.round(subtract(constantVar, secondVar));
        case '*':
            return Math.round(multiply(constantVar, secondVar));
        case '/':
            return Math.round(divide(constantVar, secondVar));
    }
}


function remClass () {
    btn.forEach((button) => {
        button.classList.remove('selected')
    })
}
