// interface  Student 
// {
// name:String,
// RollNumber?:number
// }
// function School(stud:Student)
// {
// console.log("Hello" + stud.name);
// console.log("Hello" + stud.RollNumber);
// }
// School({name:"Bunny",RollNumber:39485});
// School({name:"Yahooo"});
var Student = /** @class */ (function () {
    function Student(name, Rollnumber) {
        this.name = name;
        this.Rollnumber = Rollnumber;
    }
    Student.prototype.GetInfo = function () {
        console.log(" Student Name is " + this.name + " Number is " + this.Rollnumber);
    };
    return Student;
}());
var s1 = new Student("Aniket", 343434);
s1.GetInfo();
