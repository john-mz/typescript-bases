function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
){
    return class extends constructor {
        newProperty = 'New property';
        hello = 'override';
    }
}

@classDecorator
class SuperClass {
    public myProperty: string = 'abc123';

    print(){
        console.log('Hola mundo ');
    }
}

console.log(SuperClass);

const myClass: SuperClass = new SuperClass();
console.log(myClass);

