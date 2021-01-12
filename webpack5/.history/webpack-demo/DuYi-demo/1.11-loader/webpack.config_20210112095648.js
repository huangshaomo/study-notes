module.exports = {
    module:{
        rules:[
            {
                test: /\.js$/,
                use:["./loaderFunc/my-loader.js"]
            }
        ]
    }
}