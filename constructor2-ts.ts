class Studnet {
       constructor(private named: string, private numberd: number) {}
    getInfo() {

        console.log("The name of student is " + this.named);
        console.log("The Number of student is " + this.numberd);
    }
}

let stud = new Studnet("aniket", 546);
stud.getInfo();