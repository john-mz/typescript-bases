// OOP basico
// class Person {
//     public name: string;
//             //optional
//     private address?: string;
//                               //optional
//     constructor(name: string, address?: string){
//         this.name = name;
//         this.address = address;
//     }
//                             //undefined because of the optional
//     get getAdress(): string | undefined {
//         return this.address;
//     }
// }

// OOP basico simplificando la declaracion de atributos private,public,protected (a lo pro gg), se declaran directamente en el constructor
export class Person {
    constructor(public name: string, private address?: string){
        this.name = name,
        this.address = address
    }

    get getAdress(): string | undefined{
        return this.address;
    }
}

class Hero extends Person {
    constructor(name: string, address: string, public alias: string, public power: number ){
        super(name,address)
    }

}

const ironMan: Hero = new Hero('Daniel', 'Choco', 'SuperDaniel', 30);
console.log(ironMan);

