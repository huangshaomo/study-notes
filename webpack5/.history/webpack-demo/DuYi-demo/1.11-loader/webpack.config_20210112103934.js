module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /index\.js$/, //正则表达式，匹配模块的路径
                use: ["./myLoaders/loader1", "./myLoaders/loader2"] //匹配到了之后，使用哪些加载器
            }, //规则1
            {
                test: /\.js$/, //正则表达式，匹配模块的路径
                use: ["./myLoaders/loader3", "./myLoaders/loader4"] //匹配到了之后，使用哪些加载器
            } //规则2
        ], //模块的匹配规则
    }
}