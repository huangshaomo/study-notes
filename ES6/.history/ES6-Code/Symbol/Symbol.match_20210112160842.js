class MyMatch{
    [Symbol.match](string){
        return 'hello world'.indexof(string)
    }
}
'e'.match(new MyMatch)