// // //A callback function in TypeScript is a function which is passed from another 
// function as its parameter.
// // A callback function is called automatically in another function when 
// another/normal function is invoked/called explicitly.
// // A callback function is passed from a normal function as an argument in order to invoke it.
// function Hello(){
//     console.log("Hello from Hello");
// }
// function callbackHello(callback){
//     var  name=console.log(" What is Your Name ");
//     callback(name);
// }
// callbackHello(Hello);
function Printhello() {
    console.log("Hello From Simple Print");
}
function PrintHi(callback) {
    console.log("HI from Printhi ");
}
PrintHi(Printhello);
