var target = {
    name: "张三"
};
var handler = {
    get: function (target, prop, receiver) {
        console.log('参数1：拦截的目标对象target', target);
        console.log('参数2：操作的目标对象属性', prop)
        console.log('参数3：', receiver);
    }
};
var person = new Proxy(target, handler);
// proxy.name ="李四"
console.log(target.name);
console.log(person.name);