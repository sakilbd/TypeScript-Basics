{
    //abstraction :1. interface 2.abstract 


    //idea 
    //throught interface 
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // const vehicle1: Vehicle1 = {
    //     name: "toyota",
    //     model: 2000,
    // }


    // real  implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting engine `)
        }
        stopEngine(): void {
            console.log(`I am stopping engine `)
        }
        move(): void {
            console.log(`I am moving engine `)
        }
        test() {
            console.log("I am just testing")
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();

    //through abstract class 
    class Car2 {
        startEngine(): void {
            console.log(`I am starting engine `)
        }
        stopEngine(): void {
            console.log(`I am stopping engine `)
        }
        move(): void {
            console.log(`I am moving engine `)
        }
        test() {
            console.log("I am just testing")
        }
    }

    const hondaCar = new Car2;
    hondaCar.test();



}