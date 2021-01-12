// 

class MyArray extends Array {
    static get[Symbol.species](){
        return Array
    }
}
var a = new MyArray(1,2,3);