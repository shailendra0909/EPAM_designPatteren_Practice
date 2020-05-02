class OldCalculator {
    constructor() {
        this.operations = function (term1, term2, operation) {
            switch (operation) {
                case 'add':
                    return { res: term1 + term2 };
                case 'sub':
                    return { res: term1 - term2 };
                default:
                    return NaN;
            }
        };
    }
}

class NewCalculator {
    constructor() {
        this.multiply = function (term1, term2) {
            return term1 * term2;
        };
        this.divide = function (term1, term2) {
            return term1 / term2;
        };
    }
}

class OldCalculatorAdapter {
    constructor(oldCalculator) {
        this.oldCalculator = oldCalculator;
    }
    operations(...rest) {
        let result = this.oldCalculator.operations(...rest)
        return result.res ? result.res : result;
    }
}
//exporting 
module.exports = {OldCalculator, OldCalculatorAdapter, NewCalculator}



/* test 
const newCalculator = new NewCalculator();
const oldCalculator = new OldCalculatorAdapter(new OldCalculator());

console.log(newCalculator.multiply(oldCalculator.operations(3, 2, "sub"), 6));
*/