class CumulativeSum{
    constructor(){
        this.sum = 0;
    }
    add(num){
        this.sum = this.sum+num;
        return this;
    }
}

//test
const sum1 = new CumulativeSum();
console.log(sum1.add(10).add(2).add(50).sum);
