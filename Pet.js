"use strict";
function Pet(name, type, licensed){
    this.name =name;
    this.animalType = type;
    this.licensed = licensed;
}

Pet.prototype.toString = function (){
    return this.name + " is a(n) " + this.animalType + " whose licensed status is "
    + this.licensed;
}

//Step 1: in the child's constructor call the parent's constructor
function Fish(name,licensed,species){
    //the key word this is passed in to give the context for this fish child constructor
    Pet.call(this,name,"fish",licensed);
    this.species = species;
}

//Step 2: Set the child's prototype to an object of the Parent's prototype
Fish.prototype = Object.create(Pet.prototype);

//Step 3: set the child's constructor property back to its own name
Object.defineProperty(Fish.prototype, 'constructor', {
    value: Fish,
    enumerable: false,
    writable: true
});
