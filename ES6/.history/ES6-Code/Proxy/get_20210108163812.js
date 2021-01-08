var target = {
    name: "张三"
};
var handler = {
    get: function (target, prop, receiver) {
        if(prop in target) return target[prop];
        else throw new ReferenceError("Prop name \"" + prop + "\" does not exist.");
    }
};
var person = new Proxy(target, handler);
// person.name
console.log('getter返回结果：',person.age);