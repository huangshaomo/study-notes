var target = {
    name: "张三"
};
var handler = {
    get: function (target, prop) {
        if(prop in target) return target[prop];
        else throw new ReferenceError("Prop name \"" + prop + "\" does not exist.");
    }
};
var person = new Proxy(target, handler);
console.log('getter返回结果：',person.name);


let proto = new Proxy({},{
    get:function(target,prop,receiver){
        console.log("GET"+prop);
        return target[prop]
    }
})
let obj = Object.create(proto)  //创建一个空对象，并把对象的原型指向proto