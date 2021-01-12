// 7. 模块的singleton模式
function A(){
    this.foo = 'hello'
}

if(!global._foo){
    global._foo = new A();
}
// console.log(global._foo);
module.exports = global._foo;

// const FOO_KEY = Symbol.for('foo');
// function A() {
//     this.foo = "hello"
// }
// if (!global[FOO_KEY]) {
//     global[FOO_KEY] = new A();
// }
// console.log(FOO_KEY);
// module.exports = global[FOO_KEY];