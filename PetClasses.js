class Pet {
    constructor(name,type,licensed) {
        this.name =name;
        this.animalType = type;
        this.licensed = licensed;
    }

    toString(){
        return this.name + " is a(n) " + this.animalType + " whose licensed status is "
            + this.licensed;
    }

    makeSound(){
        return this.name + " the " + this.animalType + " makes noise";
    }
}

class Dog extends Pet{ /* use the extends keyword to create a subclass */
    constructor(name, licensed, dangerous) {
        /* makes a call to the parent's constructor with super */
        super(name,"dog", licensed);
        this.dangerous = dangerous;
    }

    makeSound() {
        return this.name + " the dog "
            + (this.dangerous ? " barks angrily." : " says woof and wags its tail");
    }
}

// add the Fish

class Fish extends Pet{ /* use the extends keyword to create a subclass */
    constructor(name, licensed, species) {
        /* makes a call to the parent's constructor with super */
        super(name,"fish", licensed);
        this.species = species;
    }

    makeSound() {
        return this.name + " the fish , does not make a sound";
    }
}
