class Person{
    constructor(name){
        this.name = name
    }
    [Symbol.toStringTag](){
        return "person"
    }
}

let mike = new Person('mike')

console.log(Object.prototype.toString.call(mike));
console.log(mike.toString());