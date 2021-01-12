let obj = {
    [Symbol.toPrimitive](hint){
        switch(hint){
            case "number":
                return 123
            case "string":
                return "str"
            case "default":
                return "default"
            default:
                throw new Error()
        }
    }
}

console.log(2 * obj);
console.log(2 + obj);   //加号既可以当字符串拼接，又可以当成+号进行数学运算，像这种两种情况都满足的就会走defalut情况
console.log(obj == "default")
String(obj)