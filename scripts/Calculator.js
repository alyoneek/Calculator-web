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
        if (this.isCurrentOperandEmpty() && number !== "." || this.currentOperand === "Infinity") {
            this.currentOperand = number.toString()
        } else {
            this.currentOperand += number.toString()
        }
    }

    addOperation(operation) {
        let newOperand
        if (this.isPreviousOperandEmpty()) {
            newOperand = this.currentOperand
        } else {
            newOperand = this.calculate()
        }

        if (operation === "=") {
            this.currentOperand = newOperand
            this.clearPreviousOperand()
        } else {
            this.previousOperand = newOperand + ` ${operation}`
            this.clearCurrentOperand()
        }
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

        return result.toString()
    }

    updateFrame() {
        this.previousOperandFrame.innerText = this.previousOperand
        if (this.currentOperand === "") {
            this.clearCurrentOperand()
        }
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

    deleteNumber() {
        if (this.isCurrentOperandEmpty()) {
            return
        }
        this.currentOperand = this.currentOperand.slice(0, -1)
    }
}