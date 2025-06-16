function whatIsMyNiggerType<T>( argument: T ): T {
    return argument;
}

const arr = whatIsMyNiggerType<number[]>([4,3,2,1]);
const strink = whatIsMyNiggerType<string>('teeee');
const numerito: number = whatIsMyNiggerType<number>(3);

console.log(arr.sort());
console.log(strink.toUpperCase());
console.log(numerito.toFixed(3));



