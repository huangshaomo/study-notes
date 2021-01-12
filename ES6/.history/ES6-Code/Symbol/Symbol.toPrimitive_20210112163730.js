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