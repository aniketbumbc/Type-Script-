interface ICar{
wheels:number,
name:string
}

export class Auto implements ICar{

constructor(public Aname:string, public wheels:number,public name:string){
console.log("Name of Car is " +Aname);
console.log("Name of Number of wheels is " +wheels);
console.log("Name of name of wheel is " +name);
}
}