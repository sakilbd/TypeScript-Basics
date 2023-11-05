{
    //oop-class

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        //parameter properties 

        constructor(public name: string, public species: string, public sound: string) {  //parameter propertis does the same work as manuallay declaration
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal("German Shepard bhai", "dog", "ghew ghew");
    const cat = new Animal("Persian bhai", "cat", "mew mew");

    cat.makeSound(); //public ly avaiable
    cat.name;





}