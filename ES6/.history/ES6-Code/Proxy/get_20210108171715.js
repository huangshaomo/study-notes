// var target = {
//     name: "张三"
// };
// var handler = {
//     get: function (target, prop) {
//         if(prop in target) return target[prop];
//         else throw new ReferenceError("Prop name \"" + prop + "\" does not exist.");
//     }
// };
// var person = new Proxy(target, handler);
// console.log('getter返回结果：',person.name);


let proto = new Proxy({name:'张三'},{
    get:function(target,prop,receiver){
        console.log("GET"+prop);
        return target[prop]
    }
})
let obj = Object.create(proto)  //创建一个空对象，并把proto实例对象挂载到该空对象原型上
obj.foo // "GET foo"


obj = {}
obj.__proto = {
    proto:{name:"张三"}
}

// prototype = {
//     proto:{name:'张三'}
// }

// var pipe = function (value) {
//     var funcStack = [];
//     var oproxy = new Proxy({} , {
//       get : function (pipeObject, fnName) {
//         if (fnName === 'get') {
//           return funcStack.reduce(function (val, fn) {
//             return fn(val);
//           },value);
//         }
//         funcStack.push(window[fnName]);
//         return oproxy;
//       }
//     });
//   
//     return oproxy;
//   }
  
//   var double = n => n * 2;
//   var pow    = n => n * n;
//   var reverseInt = n => n.toString().split("").reverse().join("") | 0;
  
//   pipe(3).double.pow.reverseInt.get; // 63