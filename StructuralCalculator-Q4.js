const { CleverCalculator } = require('./StructuralCalculator-Q3');

/* Decoratore and Decoratee has to provide same interface*/

class CleverCalculatorDecoratore {
    constructor(calculator) {
        this.calculator = calculator;
    }
    add(...rest) {
        this.log('add', rest);
        return this.calculator.add(...rest);

    }
    subtract(...rest) {
        this.log('subtract', rest);
        return this.calculator.substract(...rest);

    }
    multiply(...rest) {
        this.log('subtract', rest);
        return this.calculator.multiply(...rest);

    }
    divide(...rest) {
        this.log('divide', rest);
        return this.calculator.divide(...rest);
    }
    log(operation, ...params) {
        const result = Array.prototype.join.call(params)
        console.log(`${operation} called with ${result}`);
    }
}

//test

let decorator = new CleverCalculatorDecoratore(new CleverCalculator());
console.log(decorator.add(2, 3));
console.log(decorator.subtract(4,5));
console.log(decorator.divide(4,5));
console.log(decorator.multiply(4,5));
