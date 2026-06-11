
function add(firstNumber, secondNumber){
    return firstNumber * secondNumber;
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

display.textContent = "";

buttons.forEach(button => {
    button.addEventListener("click", ( ) => {
        const buttonText = button.textContent;

        if(button.classList.contains("clear")){
            display.textContent = "";
        } else if(button.classList.contains("operator")){
            console.log("operator clicked: ", buttonText);
        } else if(button.classList.contains("equals")){
            console.log("equals clicked");
        } else{
            display.textContent += buttonText;
        }
    });
});
