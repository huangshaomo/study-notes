var target = {};
var handler = {
    get:function(){
        console.log('get执行');
    }
};
var obj = {proxy: new Proxy(target,handler) }
console.log(obj.proxy.a);