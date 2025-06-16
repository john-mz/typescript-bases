class Person {
    constructor(public name: string, public age: string){
        this.name = name,
        this.age = age
    }
}

class Gangster extends Person {
    constructor(name: string, age: string, public nickname: string, public level: number){
        super(name, age);
    }
}

const persona: Person = new Person('Juan', '28');
const gangaster: Gangster = new Gangster('Juanito','23','Juanelmalo',32)
console.log(gangaster);
console.log(persona);

