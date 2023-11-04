{
    //utility types 
    //Pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contact: string;
    }

    type Name = Pick<Person, "name">
    type NameAge = Pick<Person, "name" | "age">

    //Omit 

    type ContactInfo = Omit<Person, "name" | "age">


    //Required

    type PersonRequired = Required<Person> //creates all properties mandatory hover over PersonRequired

    //Partial 

    type PersonPartial = Partial<Person>  //creates optional all keys 

    //Readonly 

    type PersonReadOnly = Readonly<Person>  //modifies all keys to readonly of person 

    //Record 

    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>


    const EmptyObj: Record<string, unknown> = {}
    const obj1: MyObj = {
        a: "aa",
        b: "bb",
    }

}