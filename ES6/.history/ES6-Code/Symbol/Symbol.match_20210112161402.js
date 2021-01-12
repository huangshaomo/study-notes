class MyMatch{
    [Symbol.match](string){
        return 'hello world'.indexOf(string)
    }
}
console.log('e'.match(new MyMatch));