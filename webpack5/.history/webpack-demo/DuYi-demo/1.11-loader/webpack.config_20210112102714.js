module.exports = {
    mode:"development",
    entry:{
        index:"./src/index.js"
    },
    output:{
        filename: "[name].[hash:5].js"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:{
                    //必须写完整相对路径，否则会从node_module中找该loader
                    loader:"./myLoaders/my-loader.js?changeVar:'未知数'",

                    //这里的参数会传递给myl-oader函数的this山下文中，但this中的东西太多，因此需要用一个模块`loader-utils`去方便的帮我们解析出this上下文中的options参数。
                    // 参数也可以以get请求的形式拼接到loader路径中，如"loader?changeVar = 未知数"
                    options: {
                        
                    }
                }
            }
        ]
    }
}