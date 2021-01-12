class MyClass {
    [Symbol.hasInstance](foo){
        return foo instanceof Array
    }
}