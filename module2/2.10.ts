{
    //mapped types 

    const arrOfNumbers: number[] = [1, 4, 5]

    const arraOfStrings: string[] = arrOfNumbers.map((num) => {
        return num.toString();
    })

    console.log(arraOfStrings);

    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber["height"] //lookup type

    // type AreaString= {
    //     height:string;
    //     width:string;
    // }


    //T =>{ height: string; width: number }
    //key => T["width"];

    type AreaString<T> = {
        [key in keyof T]: T[key];
    }


    const area1: AreaString<{ height: string; width: number }> = {
        height: "100",
        width: 20,
    }
}