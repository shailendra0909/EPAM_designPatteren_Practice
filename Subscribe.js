// this class must be extended by all the publishers
class Publisher{
    publishEvent(){
        throw new Error('subclass must implement publishEvent method');
    }
    subscribe(subscriber){
        throw new Error('subclass must implement subscribe method');
    }
    unsubscribe(subscriber){
        throw new Error('subclass must implement unsubscribe method');
    }
}
// This class must be extended by all the subscriber
class Subscriber{
    execute(){
        throw new Error('subclass must implement execute method');
    }
    subscribeTo(){
        throw new Error('subclass must implement subscribeTo method');
    }
    unsubscribe(){
        throw new Error('subclass must implement unsubscribe method');
    }
}

class MyPublisher extends Publisher{
    constructor(target){
        super();
        if(!(target instanceof Array)){
            throw new Error(`target must be instnace of Array`);
        }
        this.target = target;
        this.subscribers = [];
        this.count = 1;
    }

    push(element){
        this.target.push(element);
        this.publishEvent(element, 'add');
    }
    pop(){
        let element = this.target.pop();
        this.publishEvent(element, 'remove');
    }
    publishEvent(element, operation){
        this.subscribers.forEach((subscriber)=>{
            subscriber['listner'].execute(element, operation);
        })
    }
    subscribe(subscriber){
        let key = `subscriber-${this.count++}`;
        this.subscribers.push({key, listner: subscriber});
        return key;
    }
    unsubscribe(key){
        this.subscribers = this.subscribers.filter((subscriber)=>{
            return subscriber['key'] !== key;
        });
    }

}

class MySubscriber extends Subscriber{
    constructor(name){
        super();
        this.name = name;
    }
    execute(element, operation){
        console.log(`${this.name} has executed with element ${element} and operation ${operation}`);
    }
    subscribeTo(publisher){
        this.publisher = publisher;
        this.key = publisher.subscribe(this);
    }
    unsubscribe(){
        this.publisher.unsubscribe(this.key);
        this.publisher = null;   
    }
}

//test code

let myPubInstance = new MyPublisher([]);
let mySubInstance1 = new MySubscriber('sub-1');
let mySubInstance2 = new MySubscriber('sub-2');

mySubInstance1.subscribeTo(myPubInstance);
mySubInstance2.subscribeTo(myPubInstance);

myPubInstance.push(2);
myPubInstance.pop();

mySubInstance1.unsubscribe();

myPubInstance.push(3);