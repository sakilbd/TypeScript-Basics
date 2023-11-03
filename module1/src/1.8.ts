

{//destructuring

    //object destructuring
    const user = {
        id: 345,
        name: {
            firstName: "md",
            lastName: "sakil"
        },
        contactNo: "12315612",
        address: "bananai"
    }

    const {
        contactNo,
        name: { lastName:lstName }  //name alias
    } = user;


    // Array desturcturing 


    const myFriends = ["joe", "rahim", "karim", "ross"]

    const [, , bestFriend, ...rest] = myFriends;  //..rest = ross ,bestFriend =karim 

}