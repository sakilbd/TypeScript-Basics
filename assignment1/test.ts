{

    class Cat {

    }

    function isCat(animal: Cat): animal is Cat {
        return animal instanceof Cat

    }
}