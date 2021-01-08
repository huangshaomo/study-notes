var target = {name:'hsm',age:18};
var handler = {
    get:function(){
        console.log('get执行');
    }
};
// var obj = {proxy: new Proxy(target,handler) }
var proxy = new Proxy(target,handler);
var obj = Object.create(proxy);
console.log(obj.a);