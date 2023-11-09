1.What are some benefits of using TypeScript over JavaScript in a project?

Answer: TypeScript is better than Javascript in many aspects including improved type safety,tooling and integration.Type script can make a developers code more maintanable,scalable and high quality.


2.What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each.

Answer: Optional chaining is a process for quering and calling properties of an object which might result in null but dont break the code.

Example : 
interface Person {
  name?: string;
  address?: {
    city?: string;
  };
}

const person: Person = {};
const cityName = person.address?.city.

Nullish coalescing (??) operator is a logical operator where its returns its right hand side operant when its null or undefined otherwise it returns left hand side operand.

Example:
const maybeNullValue :string|null|undefinde = "sakil"

const result = maybeNullValue ?? "Mr.x"
result will return "sakil" as maybeNullValue is not null or undefines .If maybeNullValue sets to null or undefined it will return "Mr.x"


3.How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.

Answer:
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const data = "Hellow world";
      
      resolve(data);
    }, 2000);
  });
}
fetchData().then((data) => {
  console.log(data); // Output: "Hello world"
});

Above example is a way to handle asynchronous operations.

async/await is better over callbacks or promises because 
a)async await is more readable 
b)has built in error handeling using try/catch blocks
c)can be also used with promises and async functions.




4.How can you use TypeScript's enums, and what are their advantages?.

Answer:
    enum example.
enum Cities{
    Dhaka,
    Chittagong,
    Rajshahi
}

let myCity = Cities.Dhaka;

Above example is a way to use enums in typescript.
enums Advantages:
a)Better readability
b)Self documented code 
c)errors can be checked in compile time in better way in enums
d)enum supports reverse mapping.




5.Explain the role of type guards in TypeScript and provide an example of a custom type guard.

Answer:Type guards are used to narrow down types of variables within a certain code block.

example : 

function typeGuard(value:string|number){
    if(typeof value==="string"){
        console.log(value);
    }
    else{
        console.log(value); //here typescript knows value is number
    }
}
Above example is a custom typeGuard example.




6.Can you give an example of how to use "readonly" properties in TypeScript?

Answer: interface City{
    readonly city1:string;
    readonly city2:string;
}

const findCity :City = {city1:"dhaka",city2:"barishal"}

findCity.city1 = "Rajshahi" // will throw an error as its readonly 

console.log(findCity.city1) //will return dhaka

this is how we can use readonly properties in typescript.



7.Explain what a union type is in TypeScript and provide an example of its usage.

Answer : Union type in TypeScript is used to for assigning multiple types.It is denoted by "|" pipe sign placed between types.

Example : 

    const myThoughts :string|number

    myThoughts = "This is my thought" 
    myThoughts = 01010100101
    myThoughts = true // throws error as myThoughts supports string and number  only

This is an example of Union types












