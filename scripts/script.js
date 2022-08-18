window.addEventListener("load", function() {
    const numberButtons = document.querySelectorAll(".number")
    const operatorButtons = document.querySelectorAll(".operator")
    const equalButton = document.querySelector(".equal")
    const allClearButton = document.querySelector(".all-clear")
    const clearButton = document.querySelector(".clear")
    const previousOperandFrame = document.querySelector(".previous-operand")
    const currentOperandFrame = document.querySelector(".current-operand")

    const calculator = new Calculator(previousOperandFrame, currentOperandFrame)

    numberButtons.forEach(button => {
        button.addEventListener("click",  () => {
            calculator.addNumber(button.innerText)
            calculator.updateFrame()
        })
    })

    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            calculator.addOperation(button.innerText)
            calculator.updateFrame()
        })
    })

    allClearButton.addEventListener("click", () => {
        calculator.allClear()
        calculator.updateFrame()
    })
});
