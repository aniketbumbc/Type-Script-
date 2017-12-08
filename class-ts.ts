class  Add{
    x: number;
    y: number;

    newadd(){        
    console.log(this.x + "the value of y " +this.y);
    console.log(this.x + this.y);
    }
  
}

let add=new Add();
add.x=10;
add.y=20;
add.newadd();