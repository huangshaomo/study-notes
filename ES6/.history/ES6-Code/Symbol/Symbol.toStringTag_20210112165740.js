class Person{
    constructor(name){
        this.name = name
    }
    [Symbol.toStringTag](){
        return "person"
    }
}