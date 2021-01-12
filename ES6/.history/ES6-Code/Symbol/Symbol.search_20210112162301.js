class MySearch{
    constructor(value){
        this.value = value
    }
    [Symbol.search](string){
        return string.indexOf(this.value)
    }
}
console.log("barfoo".search(new MySearch('foo')));    //0