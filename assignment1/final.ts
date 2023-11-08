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