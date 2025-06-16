// function test(a: number,b: number):number {
//     return a + b
// }

// let cosa: number = test(3,3)
// console.log(cosa);
//                                               //lo que se va a retornar sera int
// const addNumbersArrow = (a: number, b: number):number => {return a + b}

// const resultArrow = addNumbersArrow(4,4)
// console.log(`EL RESULTADO 2 ES = ${resultArrow}`);
//                 // jerarquia de parametros
//                 // 1 arg: obligatorio, 2 arg: opcional, 3 arg: obligatorio con valor predeterminado
// function multiply(firstNumber: number, secondNumber?: number, base: number = 2):number {
//     return firstNumber * base
// }

// const resultadoMultiply = multiply(3)
// console.log(`resultadoMultiply = ${resultadoMultiply}`);

// mi tarea
// 1. crear un template
// 2. crear un objeto bajo ese template
// 3. hacer una funcion que afecte un parametro del objeto
interface Character {
    name: string;
    hp: number;
    showHp: () => number;
}

const personaje1: Character = {
    name: 'Paco',
    hp: 50,
    showHp(){
        return this.hp
    }
}

function increaseHp(personaje: Character, hp: number): void{
    personaje.hp += hp;
}

increaseHp(personaje1, 10)
console.log(`la vida de tu personaje es de ${personaje1.showHp()}`)

