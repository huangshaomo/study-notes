var target = {name:'hsm',age:18};
var handler = {
    get:function(target,prop,receiver){
        console.log('get执行',target);
        console.log(`参数1为拦截的目标对象target：`,target);
    }
};
var proxy = new Proxy(target,handler);
var obj = Object.create(proxy);
console.log(obj.a);