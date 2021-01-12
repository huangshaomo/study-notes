class MySplit{
    constructor(value){
        this.value = value
    }
    [Symbol.split](string){
        var idx = string.indexOf(this.value);
        if(idx === -1){
            return string
        }
        return [
            string.substr(0, idx),
            string.substr(idx + this.value.length)
        ]
    }
}

"foobar".split(new MySplit('foo'))  //["","bar"]
"foobar".split(new MySplit("bar"))  //["foo",""]
"foobar".split(new MySplit("baz"))  //"foobar"