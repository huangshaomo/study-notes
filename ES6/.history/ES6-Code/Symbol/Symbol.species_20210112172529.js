// 该方法可以改变对象实例指向的构造函数，会在创造实例时调用。

class MyArray extends Array {
    static get[Symbol.species](){
        return Array
    }
}
var a = new MyArray(1,2,3); 

var mapped = a.map((x)=>{
    return x * x
});
console.log(a);
console.log(mapped);
console.log(mapped instanceof MyArray);