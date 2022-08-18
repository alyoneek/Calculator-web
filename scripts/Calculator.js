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
        if (this.isCurrentOperandEmpty() && number !== "." || this.isCurrentOperandError()) {
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
        if (newOperand === "Error") {
            this.allClear()
            this.currentOperand = "Error"
            return
        }

        if (operation === "=") {
            if (this.isPreviousOperandEmpty() && this.operation !== undefined) {
                this.previousOperand = this.memorizedOperand
                newOperand = this.calculate()
            } else {
                this.memorizedOperand = this.currentOperand
            }
            this.currentOperand = newOperand
            this.clearPreviousOperand()
        } else {
            this.previousOperand = this.normalizeNumber(newOperand) + ` ${operation}`
            this.clearCurrentOperand()
            this.operation = operation
        }
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

        if (isNaN(result) || result === undefined || result === Infinity) {
            return "Error"
        }
        return result.toString()
    }

    updateFrame() {
        this.previousOperandFrame.innerText = this.previousOperand

        if (this.isCurrentOperandError()) {
            this.currentOperandFrame.innerText = this.currentOperand
            return
        }
        if (this.currentOperand === "") {
            this.clearCurrentOperand()
        }
        this.currentOperandFrame.innerText = this.normalizeNumber(this.currentOperand)
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

    normalizeNumber(number) {
        if (number.indexOf(".") === -1) {
            return Number(number).toLocaleString()
        }

        let integerDigits = Number(number.slice(0, number.indexOf(".")))
        let decimalDigits = number.slice(number.indexOf(".") + 1)
        let normalizedNumber = integerDigits.toLocaleString() + "." + decimalDigits
        return normalizedNumber
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

    isCurrentOperandError() {
        return this.currentOperand === "Error"
    }

    isPreviousOperandEmpty() {
        return this.previousOperand === ""
    }
}