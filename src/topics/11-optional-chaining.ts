interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Erick',
    children: ['Daniela', 'Valentina']
}

const returnChildrenNumber = ( passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;
    return howManyChildren;
}

returnChildrenNumber(passenger2);