{ // braket for declaring same variable which might present 
    //spread operator 
    //rest operator 
    //destructuring 


    const bros1: string[] = ["sakil", "pakil"]
    const bros2: string[] = ["ami", "tumi"];

    bros1.push(...bros2);

    const mentors1 = {
        typescript: "Mezba",
        redux: "mir",
        dbms: "mizan",
    }
    const mentors2 = {
        typescript: "rony",
        redux: "tonmay",
        dbms: "sakil",
    }

    const mentorList = {
        ...mentors1,
        mentors2
    }


    //learn rest operator


    const greetFriends = (f1: string, f2: string, f3: string) => {
        console.log(`Hi ${f1} ${f2},${f3}`)
    }
    // greetFriends("abul", "kashem", "mokbul", "sdflkj") //cant put more than 3


    const greetFriends2 = (...friend: string[]) => {
        console.log(`Hi ${friend}`)

    }
    greetFriends2("abul", "kashem", "mokbul", "sdflkj")  //se no error 
}