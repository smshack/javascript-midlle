class Parnet {
    constructor(age){
        this.name = "paranet";
        this.age = age;
    }

    sayMyName(){
        console.log(this.name)
    }
    static holy(){
        return "holy"
    }
}

class Child extends Parnet{
    constructor(age){
        super(age);
        this.name = "child";
    }

    static holymoly(){
        console.log(super.holy() + "moly")
    }
}

console.log(Child.holy())
Child.holymoly()