{
    //nullable types 
    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("nothing to search ")
        }
    }

    searchName(null);


    //unknown type

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`)
        }
        if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            console.log(result);
        }
        else {
            console.log("wrong input");
        }
    }

    getSpeedInMeterPerSecond(null);

    //never

    function throwError(msg: string): never { //never means doesnot return anything 
        throw new Error(msg);
    }

    throwError("error throw ho geya");

}
