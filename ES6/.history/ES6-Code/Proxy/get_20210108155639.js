var target = {name:'hsm',age:18};
var handler = {
    get:function(target,prop,receiver){
        console.log('get执行',target,receiver);
    }
};
var proxy = new Proxy(target,handler);
var obj = Object.create(proxy);
console.log(obj.a);