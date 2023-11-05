{
    //instance of guard 

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string,) {
            this.name = name;
            this.species = species;

        }
        makeSound() {
            console.log("I am making sound");
        }

    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeBark() {
            console.log("I am barking");
        }
    }

    //smart way 

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        if (animal instanceof Dog) {
            animal.makeBark();
        }
        // both if does the same first one is smart way 
        else {
            animal.makeSound();
        }
    }

    const dog = new Dog("dog bhai", "dog");
    dog.makeBark();
    getAnimal(dog);

}