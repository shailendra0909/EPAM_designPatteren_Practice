class SpecialMath {
    constructor(num) {
        this._num = num;
    }

    square() {
        return this._num ** 2;
    }

    cube() {
        return this._num ** 3;
    }

    squareRoot() {
        return Math.sqrt(this._num);
    }
}

class Command{
    constructor(target){
        this.target = target;
        this.commandsExecuted = [];
    }
    execute(command){
        let result;
        this.commandsExecuted.push(command);
        switch(command){
            case 'square':
                result = this.target.square();
                break;
            case 'cube' :
                result = this.target.cube();
                break;
            case 'squareRoot':
                result = this.target.squareRoot();
                break;
            default: 
                console.warn(`No command found with name ${command}`);
        }
        return result;
    }
}

///Test
const x = new Command(new SpecialMath(5));
console.log(x.execute('square'));
console.log(x.execute('cube'));

console.log(x.commandsExecuted); // ['square', 'cube']