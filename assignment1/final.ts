// Problem1
const typeCheck = (value: string | number) => {
    if (typeof value === "string") {
        return value.length;
    }
    else if (typeof value === "number") {
        return value * value;
    }
    else {
        return "Input must be a string or number"
    }
}


// Problem2
interface Person {
    address?: {
        city: string;
        street: string;
    };
    phone?: number;
}
const getAddressCity = (person: Person) => {
    return person.address?.city;
}

// Problem 3
class Cat {
}
function isCat(animal: Cat) {
    if (animal instanceof Cat) {
        console.log("yes, it's a cat.");
    }
    else {
        console.log("no, it's not a cat.")
    }
}


// Problem 4

const addNumbers = (mixedData: (number | string)[]) => {
    let total = 0;

    for (let item of mixedData) {
        if (typeof item === "number") {
            total += item
        }
    }
    return total;
}

// Problem 5

interface Car {
    make: string;
    model: string;
    year: number;
}

interface Driver {
    name: string;
    licenseNumber: string;
}

function joinCarAndDriver(car: Car, driver: Driver): object {
    return { ...car, ...driver };
}

// Problem 6
const sumArrayIfNumber = (param: unknown) => {
    let sum = 0;
    if (Array.isArray(param)) {
        if (param.every((value) => {
            return typeof value === 'number';
        })) {
            for (let item of param) {
                sum += item
            }
            console.log(sum);
        }
        else {
            console.log("Please put array of numbers")
        }
    }
    else {
        console.error("Please put array of numbers")
    }

}


// Problem 7
const findFirstOccurrence = <T>(arr: T[], value: T) => {

    const searchKeyindex = arr.indexOf(value);
    return searchKeyindex;

}


// Problem 8
interface Product {
    name: string;
    price: number;
    quantity: number;
}

const calculateTotalCost = (products: Product[]) => {
    let totalCost = 0;
    for (let item of products) {
        totalCost += item.price * item.quantity
    }
    return totalCost;
}