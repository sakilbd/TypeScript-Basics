{

    //constrains





    const addCourseToStudnet = <T extends { id: number, name: string, email: string }>(student: T) => {
        const course = "next level web developement"

        return {
            ...student,
            course
        }
    }
    const student3 = addCourseToStudnet({ id: 444, name: "Mr. Z", email: "z@gmail.com", emni: "emni" })
    const student1 = addCourseToStudnet({ id: 222, name: "Mr. X", email: "x@gmail.com", devType: "nlwd" })
    const student2 = addCourseToStudnet({ id: 224, name: "Mr. X", email: "x@gmail.com", devType: "nlwd", hasWatch: "Apple Watch" })


}