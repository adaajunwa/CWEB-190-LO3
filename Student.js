"use strict";

function Student(first, middle, last, mark) {
    this.first = first;
    this.middle = middle;
    this.last = last;
    this.mark = mark;
}

Student.prototype.toString = function() {
    return this.first + " " + this.middle + " " + this.last + " has a mark of " + this.mark;
};

Student.prototype.initials = function() {
    return this.first.charAt(0) + this.middle.charAt(0) + this.last.charAt(0);
};
