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

    //idea only in abstract class
    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
        test() {
            console.log("I am just testing")
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting engine `)
        }
        stopEngine(): void {
            console.log(`I am stopping engine `)
        }
        move(): void {
            console.log(`I am moving engine `)
        }
    }

    const hondaCar = new ToyotaCar;
    hondaCar.test(); // gets by inheritance 
    hondaCar.stopEngine();



}