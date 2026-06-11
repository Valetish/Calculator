
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

//function operate that takes an operator and
//two numbers and then calls one of the above
//functions on the numbers
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

// console.log(operate(divide, 14, 2));

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let operator = "";
let firstNumber = "";
let secondNumber = "";
let resultDisplayed = false;

display.textContent = "";

buttons.forEach(button => {
    button.addEventListener("click", ( ) => {
        const buttonText = button.textContent;

        if(button.classList.contains("clear")){
            display.textContent = "";
            firstNumber = "";
            secondNumber = "";
            operator = "";
            resultDisplayed = false;

        } else if(button.classList.contains("operator")){
            if(firstNumber === ""){
                return;
            }

            if(secondNumber !== ""){
                if(operator === "÷" && Number(secondNumber) === 0) {
                    display.textContent = "lol no";
                    firstNumber = "";
                    secondNumber = "";
                    operator = "";
                    resultDisplayed = true;
                    return;
                }

                let answer = operate(operator, Number(firstNumber), Number(secondNumber));
                answer = Math.round(answer * 100000000) / 100000000;

                display.textContent = answer;
                firstNumber = answer.toString();
                secondNumber = "";
            }

            operator = buttonText;
            resultDisplayed = false;

        } else if(button.classList.contains("equals")){
            if(firstNumber === "" || operator === "" || secondNumber === "") {
                return;
            }

            if(operator === "÷" && Number(secondNumber) === 0) {
                display.textContent = "lol no";
                firstNumber = "";
                secondNumber = "";
                operator = "";
                resultDisplayed = true;
                return;
            }

            let answer = operate(operator, Number(firstNumber), Number(secondNumber));

            answer = Math.round(answer * 100000000) / 100000000;
            display.textContent = answer;

            firstNumber = answer.toString();
            secondNumber = "";
            operator = "";
            resultDisplayed = true;
        } else{
            if(resultDisplayed) {
                firstNumber = "";
                secondNumber = "";
                operator = "";
                display.textContent = "";
                resultDisplayed = false;
            }

            if(operator === ""){
                if(buttonText === "." && firstNumber.includes(".")){
                    return;
                }

                firstNumber += buttonText;
                display.textContent = firstNumber;
            } else{
                if(buttonText === "." && secondNumber.includes(".")){
                    return;
                }

                secondNumber += buttonText;
                display.textContent = secondNumber;
            }

        }
    });
});
