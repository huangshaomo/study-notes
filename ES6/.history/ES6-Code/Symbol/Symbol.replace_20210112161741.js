const MyReplace = {
    [Symbol.replace]: (...s)=>{
        console.log(s);
    }
}
"hello".replace(MyReplace,'world');