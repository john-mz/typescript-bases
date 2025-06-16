import { Product, taxCalculationOption, taxCalculation } from './06-function-destructuring';
const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const final: taxCalculationOption = {
    products: shoppingCart,
    tax: 0.15
};

const [total, totalTax] = taxCalculation(final);
console.log(total, totalTax);


