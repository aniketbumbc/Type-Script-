class studnet {
    a: string;
    b: number;
    constructor(named: string, numberd: number) {
        this.a = named;
        this.b = numberd;
    }
    getInfo() {

        console.log("The name of student is " + this.a);
        console.log("The Number of student is " + this.b);
    }
}
let stud = new studnet("aniket", 546);
stud.getInfo();