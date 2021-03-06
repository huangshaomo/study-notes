// 该方法可以改变对象实例指向的构造函数，会在创造实例时调用。

class MyArray extends Array {
    [Symbol.species] = "Array"
}
var a = new MyArray(1,2,3); 

var mapped = a.map((x)=>{
    return x * x
});
console.log(a);     //MyArray [ 1, 2, 3 ]
console.log(mapped);    //[ 1, 4, 9 ]
console.log(mapped instanceof MyArray); //false