class Calculator {
    constructor(previousOperandFrame, currentOperandFrame) {
        this.previousOperandFrame = previousOperandFrame
        this.currentOperandFrame = currentOperandFrame
        this.allClear()
    }

    addNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) {
            return
        }
        if (this.currentOperand === "0" && number !== ".") {
            this.currentOperand = number.toString()
        } else {
            this.currentOperand += number.toString()
        }
    }

    addOperation(operation) {
        if (this.isPreviousOperandEmpty()) {
            this.previousOperand = this.currentOperand
        } else {
            this.previousOperand = this.calculate()
        }
        this.previousOperand += ` ${operation}`
        this.clearCurrentOperand()
        this.operation = operation
    }

    calculate() {
        let result = parseFloat(this.previousOperand)
        switch (this.operation) {
            case "+":
                result += parseFloat(this.currentOperand)
                break
            case "-":
                result -= parseFloat(this.currentOperand)
                break
            case "/":
                result /= parseFloat(this.currentOperand)
                break
            case "*":
                result *= parseFloat(this.currentOperand)
                break
            default:
                return
        }

        return result
    }

    updateFrame() {
        this.previousOperandFrame.innerText = this.previousOperand
        this.currentOperandFrame.innerText = this.currentOperand
    }

    clearCurrentOperand() {
        this.currentOperand = "0"
    }

    clearPreviousOperand() {
        this.previousOperand = ""
    }

    isCurrentOperandEmpty() {
        return this.currentOperand === "0"
    }

    isPreviousOperandEmpty() {
        return this.previousOperand === ""
    }

    allClear() {
        this.clearPreviousOperand()
        this.clearCurrentOperand()
        this.operation = undefined
    }
}