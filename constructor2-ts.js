var Studnet = /** @class */ (function () {
    function Studnet(named, numberd) {
        this.named = named;
        this.numberd = numberd;
    }
    Studnet.prototype.getInfo = function () {
        console.log("The name of student is " + this.named);
        console.log("The Number of student is " + this.numberd);
    };
    return Studnet;
}());
var stud = new Studnet("aniket", 546);
stud.getInfo();
