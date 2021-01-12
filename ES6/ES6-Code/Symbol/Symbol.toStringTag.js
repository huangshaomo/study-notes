class Person{
    constructor(name){
        this.name = name
    }
    // [Symbol.toStringTag] = "Person"

    //在 Class 内部可以使用get和set关键字， 对某个属性设置存值函数和取值函数， 拦截该属性的存取行为。
    get[Symbol.toStringTag](){      
        return "Person"
    }
}

let mike = new Person('mike')

console.log(Object.prototype.toString.call(mike));  //[object Person]
console.log(mike.toString());   //[object Person]