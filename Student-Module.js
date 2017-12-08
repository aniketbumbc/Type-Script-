"use strict";
exports.__esModule = true;
var Studnet = /** @class */ (function () {
    function Studnet(named, numberd) {
        this.named = named;
        this.numberd = numberd;
    }
    Studnet.prototype.getInfo = function () {
        console.log("The name of student is " + this.named);
        console.log("The Number of student is " + this.numberd);
        console.log("This is form module which is create new one");
    };
    return Studnet;
}());
exports.Studnet = Studnet;
