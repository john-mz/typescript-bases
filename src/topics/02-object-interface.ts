const skills: string[] = ['dash', 'counter', 'healing']

// typado estricto en objetos: Toca usar "interface"
interface character {
    nombre: string;
    color: string;
    arreglo: string[];
    hometown?: string //el "?" hace que ese argumento sea opcional
}

const persona: character = {
    nombre: 'Vanessa',
    color: 'lenteja',
    arreglo: ['hola', 'test']
}

console.log(persona.arreglo)