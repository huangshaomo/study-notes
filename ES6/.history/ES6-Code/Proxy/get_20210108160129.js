var target = {name:'hsm',age:18};
var handler = {
    get:function(target,prop,receiver){
        console.log(`参数1：拦截的目标对象target`,target);
        console.log('参数2：操作的目标对象属性',prop)
        console.log('参数3：',receiver.prop);
    }
};
var proxy = new Proxy(target,handler);
var obj = Object.create(proxy);
console.log(obj.a);