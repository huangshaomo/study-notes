class MyClass {
    [Symbol.hasInstance](foo){
        return foo instanceof Array
    }
}

let mc = new MyClass()
console.log([1, 2, 3] instanceof mc);