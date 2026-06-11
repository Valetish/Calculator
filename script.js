function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

function modulo(firstNumber, secondNumber){
    return firstNumber % secondNumber;
}

function operate(operator, firstNumber, secondNumber){
    if(operator === "+"){
        return add(firstNumber, secondNumber);
    } else if(operator === "-"){
        return subtract(firstNumber, secondNumber);
    } else if(operator === "×"){
        return multiply(firstNumber, secondNumber);
    } else if(operator === "÷"){
        return divide(firstNumber, secondNumber);
    } else if(operator === "%"){
        return modulo(firstNumber, secondNumber);
    }
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let firstNumber = "";
let operator = "";
let secondNumber = "";
let resultDisplayed = false;

display.textContent = "";

function resetCalculator(){
    firstNumber = "";
    operator = "";
    secondNumber = "";
    resultDisplayed = false;
    display.textContent = "";
}

function showError(){
    firstNumber = "";
    operator = "";
    secondNumber = "";
    resultDisplayed = true;
    display.textContent = "lol no";
}

function roundAnswer(number){
    return Math.round(number * 100000000) / 100000000;
}

function calculateCurrentOperation(){
    if(firstNumber === "" || operator === "" || secondNumber === ""){
        return false;
    }

    if(operator === "÷" && Number(secondNumber) === 0){
        showError();
        return false;
    }

    let answer = operate(operator, Number(firstNumber), Number(secondNumber));
    answer = roundAnswer(answer);

    firstNumber = answer.toString();
    secondNumber = "";
    display.textContent = firstNumber;

    return true;
}

function addDigit(buttonText){
    if(resultDisplayed){
        resetCalculator();
    }

    if(operator === ""){
        if(buttonText === "." && firstNumber.includes(".")){
            return;
        }

        if(buttonText === "." && firstNumber === ""){
            firstNumber = "0";
        }

        firstNumber += buttonText;
        display.textContent = firstNumber;
    } else{
        if(buttonText === "." && secondNumber.includes(".")){
            return;
        }

        if(buttonText === "." && secondNumber === ""){
            secondNumber = "0";
        }

        secondNumber += buttonText;
        display.textContent = secondNumber;
    }
}

function handleOperator(buttonText){
    if(firstNumber === ""){
        return;
    }

    if(secondNumber !== ""){
        const calculationWorked = calculateCurrentOperation();

        if(!calculationWorked){
            return;
        }
    }

    operator = buttonText;
    resultDisplayed = false;
}

function handleEquals(){
    const calculationWorked = calculateCurrentOperation();

    if(calculationWorked){
        operator = "";
        resultDisplayed = true;
    }
}

function handleBackspace(){
    if(resultDisplayed){
        resetCalculator();
        return;
    }

    if(operator === ""){
        firstNumber = firstNumber.slice(0, -1);
        display.textContent = firstNumber;
    } else{
        secondNumber = secondNumber.slice(0, -1);
        display.textContent = secondNumber;
    }
}

function findButton(buttonText){
    return Array.from(buttons).find(button => button.textContent.trim() === buttonText);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent.trim();

        if(button.classList.contains("clear")){
            resetCalculator();
        } else if(button.classList.contains("operator")){
            handleOperator(buttonText);
        } else if(button.classList.contains("equals")){
            handleEquals();
        } else{
            addDigit(buttonText);
        }
    });
});

document.addEventListener("keydown", event => {
    const key = event.key;

    if(/^[0-9.]$/.test(key)){
        const button = findButton(key);
        if(button){
            event.preventDefault();
            button.click();
        }
    } else if(key === "+" || key === "-" || key === "%"){
        const button = findButton(key);
        if(button){
            event.preventDefault();
            button.click();
        }
    } else if(key === "*"){
        const button = findButton("×");
        if(button){
            event.preventDefault();
            button.click();
        }
    } else if(key === "/"){
        const button = findButton("÷");
        if(button){
            event.preventDefault();
            button.click();
        }
    } else if(key === "Enter" || key === "="){
        const button = document.querySelector(".equals");
        if(button){
            event.preventDefault();
            button.click();
        }
    } else if(key === "Backspace"){
        event.preventDefault();
        handleBackspace();
    } else if(key === "Escape"){
        event.preventDefault();
        resetCalculator();
    }
});
