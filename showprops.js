function showProps(title, object) {
    "use strict";

    let objectString = title + "<br />";

    // LOOP for all properties in the object
    for (const prop in object) {
        // Add the property name and value to the return string
        objectString += prop + " = " + object[prop] + "<br />";
        /*// Use object.hasOwnProperty method to show only properties or methods
        //that are within the prop object (not in the prototype)
        if (object.hasOwnProperty(prop)) {
            objectString += prop + " = " + object[prop] + "<br />";
        }*/

    }


    return objectString;
}
