module.exports = {
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
                use:["my-loader"]
            }
        ]
    }
}