class Person {
    constructor(name = 'unnamed person') {
        this.name = name;
    }
    print(){
        console.log(this);
    }
}

class Shopper extends Person {
    constructor(name, money = 0) {
        super(name);
        this.money = money;
        this.employed = false;
    }
}

class Employee extends Shopper {
    constructor(name, money = 0, employer = '') {
        super(name, money);
        this.employerName = employer;
        this.employed = true;
    }
}

class ExampleFactory {
    constructor() { }
    createObject(type, ...rest) {
        switch (type) {
            case 'Employee': if (ExampleFactory.employeeObjInstance) {
                        console.warn(`can't create another Instance for type ${type}`);
                        return ExampleFactory.employeeObjInstance;
                    }
                    ExampleFactory.employeeObjInstance = new Employee(...rest);
                    return ExampleFactory.employeeObjInstance;
            case 'Shopper': return new Shopper(...rest);
            default: console.error(`specified type ${type} not available`);
        }
    }
}

//testing code

const factory = new ExampleFactory();
const shopper = factory.createObject('Shopper', 'shailendra', 100);
shopper.print();
const employee1 = factory.createObject('Employee', 'Annu', 100, 'EPAM');
employee1.print();
const employee2 = factory.createObject('Employee', 'Rohit', 100, 'EPAM');
employee2.print();
factory.createObject('Random', 'Rohit', 100, 'EPAM');