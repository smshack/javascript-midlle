class Parent {
    constructor(age){
        this.name = "parant";
        this.age = age;
    }

    sayMyName(){
        console.log(this.name)
    }
}

class Child extends Parent{
    constructor(age){
        super(age);
        this.name ="child";
    }
}

const child1 = new Child(10);

child1.sayMyName();