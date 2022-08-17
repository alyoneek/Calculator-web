class Calculator {
    constructor(previousOperandFrame, currentOperandFrame) {
        this.previousOperandFrame = previousOperandFrame
        this.currentOperandFrame = currentOperandFrame
        this.allClear()
    }

    addNumber(number) {
        this.currentOperand += number
        this.updateFrame()
    }

    updateFrame() {
        this.previousOperandFrame.innerText = this.previousOperand
        this.currentOperandFrame.innerText = this.currentOperand
    }

    allClear() {
        this.previousOperand = ""
        this.currentOperand = ""
        this.operation = undefined
        this.updateFrame()
    }
}