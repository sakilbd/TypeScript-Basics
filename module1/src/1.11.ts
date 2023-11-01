
{

    //ternaary operator ||optional chaining :nullish coalescing 

    const age: number = 15;

    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("NOt adult")
    }

    const isAdult = age > 18 ? "adult " : "not adult"; //ternary operator
    console.log({ isAdult });


    //nullish coalescing operator 
    //null/ undefined --->decision making
    const isAuthenticated = "";
    const result1 = isAuthenticated ?? "Guest "
    const result2 = isAuthenticated ? isAuthenticated : "Guest "

    console.log({ result1 }, { result2 }); //resut guest(RESULT2) as isAuthenticated is null or undefined & RETUNRS "" FOR RESULT1

    type User = {
        name: string,
        address: {
            city: string,
            road?: stirng,
        }
    }
    const user: User = {
        name: "sakil",
        address: {
            city: "ctg",
            road: "Awsome road"
        }
    }

    const blockName = user?.address?.block ?? "No Block address";

    console.log({ blockName });  //result "No Block address"

}