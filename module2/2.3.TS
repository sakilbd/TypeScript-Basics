{

    //GENERIC TYPE 
    // type GenericArray<param> = Array<param>
    type GenericArray<T> = Array<T>

    // const rollNumber :number [] = [1,2,3];
    const rollNumber: Array<number> = [1, 2, 3];

    // const mentors :string[] = ["MR. X","MR. Y"]
    const mentors: GenericArray<string> = ["MR. X", "MR. Y"]


    // const boolARray:boolean[] = [true,false,true];
    const boolARray: Array<boolean> = [true, false, true];

    interface User {
        name: string;
        age: number;
    }

    const user: GenericArray<User> = [
        {
            name: "mezba",
            age: 100
        },
        {
            name: "jhankar",
            age: 100
        }

    ]

    const add = (x: number, y: number) => x + y

    add(30, 20)

    //generic touple
    type GenericTouple<X, Y> = [X, Y]
    const manush: GenericTouple<string, string> = ["Mr. X", 'Mr. Y '];

    const userWithId: GenericTouple<number, { name: string, email: string }> = [1234, { name: "sakil", email: "a@gmail.com" }]

}