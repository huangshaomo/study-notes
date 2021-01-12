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
                use:["./myLoaders/loader1.js","./myLoaders/loader2.js"]
            },
            {
                test:/\.js$/,
                use:["./myLoaders/loader3.js","./myLoaders/loader4.js"]
            }

        ]
    }
}