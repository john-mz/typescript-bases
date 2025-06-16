let name: number | string = 'Stiven'
// name solo puede ser modificado a int o str
name = 32
let hpPoints: number | 'FULL' = 95
const isAlive: boolean = true

hpPoints = 'FULL'

console.log({name, hpPoints, isAlive});


// export {};