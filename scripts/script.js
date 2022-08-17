window.addEventListener("load", function() {
    const numberButtons = document.querySelectorAll(".number")
    const operatorButtons = document.querySelectorAll(".operator")
    const allClearButton = document.querySelector(".all-clear")
    const clearButton = document.querySelector(".clear")
    const previousOperandFrame = document.querySelector(".previous-operand")
    const currentOperandFrame = document.querySelector(".current-operand")

    const calculator = new Calculator(previousOperandFrame, currentOperandFrame)

    numberButtons.forEach(button => {
        button.addEventListener("click",  () => {
            calculator.addNumber(button.innerText)
        })
    })

    allClearButton.addEventListener("click", () => {
        calculator.allClear()
    })
});
