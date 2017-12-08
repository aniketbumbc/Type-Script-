"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto = /** @class */ (function () {
    function Auto(Aname, wheels, name) {
        this.Aname = Aname;
        this.wheels = wheels;
        this.name = name;
        console.log("Name of Car is " + Aname);
        console.log("Name of Number of wheels is " + wheels);
        console.log("Name of name of wheel is " + name);
    }
    return Auto;
}());
exports.Auto = Auto;
