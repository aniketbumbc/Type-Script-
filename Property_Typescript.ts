export class Student {

private _age:number;
constructor(public name:string, public Dclass:string)
{

console.log(" The Value of  Student name is " +name+ " and DClass is " + Dclass);

};
get age():number{
return this._age;
}
set age(age:number){
    this._age=age;

    console.log(" age of person is " +age);
}
}