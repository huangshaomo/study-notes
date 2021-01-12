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
                    loader:"./myLoaders/my-loader?changeVar=未知数",
                }
            }
        ]
    }
}