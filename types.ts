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



class Student 
{
    name:string;
    Rollnumber:number;

constructor(name:string,Rollnumber:number)
{
this.name=name;
this.Rollnumber=Rollnumber;
}

GetInfo()
{
    console.log(" Student Name is " +this.name+ " Number is " +this.Rollnumber);
}
}

//var  s1=new Student("Aniket",343434);
//s1.GetInfo();
