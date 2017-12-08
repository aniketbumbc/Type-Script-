"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name, Dclass) {
        this.name = name;
        this.Dclass = Dclass;
        console.log(" The Value of  Student name is " + name + " and DClass is " + Dclass);
    }
    ;
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
            console.log(" age of person is " + age);
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
