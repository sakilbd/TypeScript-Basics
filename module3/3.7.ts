{
    //static

    class Counter {
        static count: number = 0;
        static incremnet() {
            return (Counter.count = Counter.count + 1)
        }
        static decrement() {
            return (Counter.count = Counter.count - 1)
        }
    }

    // const instance1 = new Counter()

    console.log(Counter.incremnet())


    // const instance2 = new Counter() //in static functions this is not needed

    console.log(Counter.incremnet())

    // const instance3 = new Counter()

    console.log(Counter.incremnet())




}