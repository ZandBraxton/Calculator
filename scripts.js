const result = document.querySelector('.display')

//Get varible for button press
const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        const x = button.value
        switch (x) {
            case '.':
            case '=':
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                console.log(`operator ${x}`)
                break
            case 'AC':
                console.log('All clear')
                break
            case 'C':
                console.log('Clear')
                break
            default:
                result.textContent = x
                break
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



