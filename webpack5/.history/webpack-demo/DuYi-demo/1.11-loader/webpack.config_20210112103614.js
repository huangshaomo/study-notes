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
                test: /index\.js$/,
                use:["./myLoaders/loader1","./myLoaders/loader2"]
            },
            {
                test:/\.js$/,
                use:["./myLoaders/loader3","./myLoaders/loader4"]
            }

        ]
    }
}