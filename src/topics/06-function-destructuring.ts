export interface Product {
    description: string;
    price: number;
}

const iphone: Product = {
    description: 'solo apple mor',
    price: 1000
}

const xiaomi: Product = {
    description: 'calidad precio',
    price: 200
}
// pa que hice esto
export interface taxCalculationOption {
    products: Product[];
    tax: number;
}
                                                        // explicitamos que seran solo 2 posiciones tipo int
// function taxCalculation(options: taxCalculationOption): [number, number] {
// function taxCalculation({ products, tax }: taxCalculationOption): [number, number]{
export function taxCalculation(options: taxCalculationOption): [number, number] {
    const { products, tax } = options;
    let total: number = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart: Product[] = [iphone, xiaomi];
const tax: number = 0.1;

const myObj: taxCalculationOption = {
    products: shoppingCart,
    tax: tax
}
// saqué las 2 posiciones del arreglo que retorna taxCalculation(myObj)
const [total, totalTax] = taxCalculation(myObj);
// console.log(total, totalTax);


