const { OldCalculatorAdapter, OldCalculator, NewCalculator } = require('./StructuralCalculator-Q1');

class UltimateCalculator {
    constructor() {
        this.newCalculator = new NewCalculator();
        this.oldCalculator = new OldCalculatorAdapter(new OldCalculator());
    }
    add(num1, num2) {
        return this.oldCalculator.operations(num1, num2, 'add');
    }
    substract(num1, num2) {
        return this.oldCalculator.operations(num1, num2, 'sub')
    }
    multiply(num1, num2) {
        return this.newCalculator.multiply(num1, num2);
    }
    devide(num1, num2) {
        return this.newCalculator.divide(num1, num2);
    }
}


//test code:
const ultimateCalculator = new UltimateCalculator();
console.log('addition', ultimateCalculator.add(1, 5));
console.log('substraction', ultimateCalculator.substract(1, 5));
console.log('multiplication', ultimateCalculator.multiply(1, 5));
console.log('devision', ultimateCalculator.devide(1, 5));
