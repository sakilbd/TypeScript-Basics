{

    const sumArrayIfNumber = (param: unknown) => {
        let sum = 0;
        if (Array.isArray(param)) {
            if (param.every((value) => {
                return typeof value === 'number';
            })) {
                for (let item of param) {
                    sum += item
                }
                console.log(sum);
            }
            else {
                console.log("Please put array of numbers")
            }
        }
        else {
            console.error("Please put array of numbers")
        }

    }

    sumArrayIfNumber([1, 2, 3,"df"]);
}