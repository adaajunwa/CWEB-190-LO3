"use strict";

function Instructor(name, office, quirks, greet) {
    this.name = name;
    this.officeNumber = office;
    this.quirks = quirks;

    this.greet = function() {
        return "Never fear! " + this.name + " says hi";
    }

}

/*instructor.displayinfo = function(){
    return "" +this.name + " is in " + this.officeNumber
        + " and is " + this.quirks;
}*/
/*methods or properties cannot be added to object constructors outside the constructor
Include the prototype object to a constructor to enable this addition and enforce inheritance
 */
Instructor.prototype.program = "CST";
Instructor.prototype.displayinfo = function(){
    return this.name + " is in " + this.officeNumber
        + " and is " + this.quirks + " (program: " + this.program + ")";
}

