const { OldCalculatorAdapter, OldCalculator, NewCalculator } = require('./StructuralCalculator-Q1');

class CleverCalculator {

    constructor() {
        this.newCalculator = new NewCalculator();
        this.oldCalculator = new OldCalculatorAdapter(new OldCalculator());
        this.operationMap = {};
    }
    add(num1, num2) {
        let result = this.getFromMap(num1, num2, 'add');
        if (!result) {
            let key = this.getOperationKey(num1, num2, 'add');
            result = this.oldCalculator.operations(num1, num2, 'add');
            this.operationMap[key] = result;
            console.log(`new calculation ${num1}|${num2}: add`);
        }
        return result;
    }
    substract(num1, num2) {
        let result = this.getFromMap(num1, num2, 'sub')
        if (!result) {
            let key = this.getOperationKey(num1, num2, 'sub');
            result = this.oldCalculator.operations(num1, num2, 'sub');
            this.operationMap[key] = result;
            console.log(`new calculation ${num1}|${num2}: sub`);
        }
        return result;
    }
    multiply(num1, num2) {
        let result = this.getFromMap(num1, num2, 'multi');
        if (!result) {
            let key = this.getOperationKey(num1, num2, 'multi');
            result = this.newCalculator.multiply(num1, num2);
            this.operationMap[key] = result;
            console.log(`new calculation ${num1}|${num2}: multi`);
        }

        return result;

    }
    divide(num1, num2) {
        let result = this.getFromMap(num1, num2, 'division');
        if (!result) {
            let key = this.getOperationKey(num1, num2, 'division');
            result = this.newCalculator.divide(num1, num2);
            console.log(`new calculation ${num1}|${num2}: division`);
            this.operationMap[key] = result;
        }

        return result;
    }
    getFromMap(num1, num2, op) {
        const result = this.operationMap[this.getOperationKey(num1, num2, op)] ?
            this.operationMap[this.getOperationKey(num1, num2, op)] : this.operationMap[this.getOperationKey(num2, num1, op)] ? this.operationMap[this.getOperationKey(num2, num1, op)] : undefined;
        return result;
    }
    getOperationKey(num1, num2, operation) {
        return `${num1}|${num2}:${operation}`;
    }
}

module.exports = {CleverCalculator};

//test code:
/* const cleverCalculator = new CleverCalculator();
console.log(cleverCalculator.add(1, 5));
console.log(cleverCalculator.add(1, 5));

console.log(cleverCalculator.substract(1, 5));
console.log(cleverCalculator.substract(1, 5));

console.log(cleverCalculator.multiply(1, 5));
console.log(cleverCalculator.multiply(1, 5));

console.log(cleverCalculator.divide(1, 5));
console.log(cleverCalculator.divide(1, 5)); */
