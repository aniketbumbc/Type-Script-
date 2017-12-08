var Add = /** @class */ (function () {
    function Add() {
    }
    Add.prototype.newadd = function () {
        console.log(this.x + "the value of y " + this.y);
        console.log(this.x + this.y);
    };
    return Add;
}());
var add = new Add();
add.x = 10;
add.y = 20;
add.newadd();
