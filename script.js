
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

//function operate that takes an operator and
//two numbers and then calls one of the above
//functions on the numbers
function operate(operator, firstNumber, secondNumber) {
    return operator(firstNumber, secondNumber);
}

// console.log(operate(divide, 14, 2));

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let result = 0;
let operator = "";
let firstNumber = "";
let secondNumber = "";

display.textContent = "";

buttons.forEach(button => {
    button.addEventListener("click", ( ) => {
        const buttonText = button.textContent;

        if(button.classList.contains("clear")){
            display.textContent = "";
            result = 0;
            firstNumber = "";
            secondNumber = "";
            operator = "";
        } else if(button.classList.contains("operator")){
            operator = buttonText;
            // console.log("operator clicked: ", buttonText);
        } else if(button.classList.contains("equals")){
            console.log("equals clicked");

            if(operator == "+")
                display.textContent = add(Number(firstNumber), Number(secondNumber));
            else if(operator == "-")
                display.textContent = subtract(Number(firstNumber), Number(secondNumber));
            else if(operator == "×")
                display.textContent = multiply(Number(firstNumber), Number(secondNumber));
            else if(operator == "÷")
                display.textContent = divide(Number(firstNumber), Number(secondNumber));
        } else{
            if(operator === ""){
                firstNumber += buttonText;
                display.textContent = firstNumber;
            } else{
                secondNumber += buttonText;
                display.textContent = secondNumber;
                console.log(firstNumber);
                console.log(operator);
                console.log(secondNumber);}
        }
    });
});
