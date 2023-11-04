{
    //interface  - generic 

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T,
        bike?: X,
    }

    type sonyWatch = {
        brand: string, model: string, display: string
    }

    const poorDeveloepr: Developer<sonyWatch> = {
        name: "parsian",
        computer: {
            brand: "Asus",
            model: "x",
            releaseYear: 2013
        },
        smartWatch: {
            brand: "sony",
            model: "kwcc",
            display: "OLED"
        }

    }

    interface AppleWatch { brand: string, model: string, heartTrack: boolean, sleepTrack: boolean }

    interface YamahaBike {
        model: string,
        engineCapacity: string,
    }
    const richDeveloepr: Developer<AppleWatch, YamahaBike> = {
        name: "parsian",
        computer: {
            brand: "Hp",
            model: "y",
            releaseYear: 2023
        },
        smartWatch: {
            brand: "apple",
            model: "something",
            heartTrack: true,
            sleepTrack: true,

        },
        bike: {
            model: "yamaha",
            engineCapacity: "100cc"
        }
    }




}