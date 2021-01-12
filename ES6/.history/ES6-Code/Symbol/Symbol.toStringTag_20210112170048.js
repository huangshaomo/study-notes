class Person{
    constructor(name){
        this.name = name
    }
    [Symbol.toStringTag] = "Person"

    get[Symbol.toStringTag](){
        return "Person"
    }
}

let mike = new Person('mike')

console.log(Object.prototype.toString.call(mike));
console.log(mike.toString());