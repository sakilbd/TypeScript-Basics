{

    //function with generics 
    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGenerics = <T>(param: T): T[] => {
        return [param]
    }

    type User = {
        id: number; name: string
    }

    const res1 = createArray("Bangladesh");
    const resGeneric = createArrayWithGenerics<string>("Bangladesh");
    const resGenericObject = createArrayWithGenerics<User>({ id: 1522, name: "sakil" })



    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }



    const res10 = createArrayWithTuple<string, number>("Bangladesh", 1122);
    const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", { name: "sakil" });



    const addCourseToStudnet = <T>(student: T) => {
        const course = "next level web developement"

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudnet({ name: "Mr. X", email: "x@gmail.com", devType: "nlwd" })
    const student2 = addCourseToStudnet({ name: "Mr. X", email: "x@gmail.com", devType: "nlwd", hasWatch: "Apple Watch" })


}