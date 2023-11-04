{
    //type assertion 

    let anything: any;

    anything = "Next Level Web developement";
    anything = 223;

    (anything as string).charAt(1)    //suggests functions that comes with number/string 


    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000
            return `the converted value is ${convertedValue}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    }

    const result1 = kgToGm(1000) as number
    const result = kgToGm("1000") as string

    type customError = {
        message: string
    }

    try {

    }
    catch (error) {
        console.log((error as customError).message)
    }


}