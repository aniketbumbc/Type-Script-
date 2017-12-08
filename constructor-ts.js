var studnet = /** @class */ (function () {
    function studnet(named, numberd) {
        this.a = named;
        this.b = numberd;
    }
    studnet.prototype.getInfo = function () {
        console.log("The name of student is " + this.a);
        console.log("The Number of student is " + this.b);
    };
    return studnet;
}());
var stud = new studnet("aniket", 546);
stud.getInfo();
