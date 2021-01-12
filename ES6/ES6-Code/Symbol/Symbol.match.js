class MyMatch{
    [Symbol.match](string){
        return 'hello world'.indexOf(string)
    }
}
'e'.match(new MyMatch)//1