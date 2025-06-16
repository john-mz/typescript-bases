class Person {
    constructor(public firstName: string, public lastName:string ){
        this.firstName = firstName,
        this.lastName = lastName
    }
}

class Gangster {
    constructor(public person: Person, public apodo: string, public level: string){
        this.person = person,
        this.apodo = apodo,
        this.level = level
    }
}

const persona: Person = new Person('benito', 'Ramirez');
const gangster: Gangster = new Gangster(persona, 'elBenitoxx', '33');
console.log(gangster);
