{

    //union type
    // type FrontEndDeveloer = "fakibazDeveloper" | "juniorDeveloper"
    // type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper"
    // type Developer = FrontEndDeveloer | FullStackDeveloper;

    // const newDeveloper: FrontEndDeveloer = 'juniorDeveloper'

    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: "male" | "female";
    //     bloodGroup: "O+" | "A+" | "AB+"
    // }

    // const user1: User = {
    //     name: "sakil",
    //     gender: "male",
    //     bloodGroup: "A+",

    // }

    type FrontEndDeveloper = {
        skills: string[];
        designation1: "Frontend Developer "
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer "
    }

    type FullStackDeveloper = FrontEndDeveloper & BackendDeveloper;


    const fullStackDeveloper: FullStackDeveloper = {
        skills: ["html", "css", "express"],
        designation1: "Frontend Developer ",
        designation2: "Backend Developer ",
    }

}