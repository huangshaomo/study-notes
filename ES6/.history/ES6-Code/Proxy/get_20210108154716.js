var target = {};
var handler = {
    get:function(){
        console.log('get执行');
    }
};
// var obj = {proxy: new Proxy(target,handler) }
var obj = Object.create(new Proxy);
console.log(obj.proxy.a);