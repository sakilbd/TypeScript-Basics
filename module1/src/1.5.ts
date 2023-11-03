//Referance Type -->Object 


const user: {
    company: "Aqualink bd"; //literal type 
    readonly firstName: string;
    middleName?: string; //optional type 
    lastName: string;
    isMarried: boolean;
} = {
    company: "Aqualink bd",
    firstName: "Sakil",
    lastName: "zaman",
    isMarried: true,
}

user.company = "ph" //not possible
user.firstName = "sakil" //not possible as firstname is readonly  