module.exports = {
    entry:{
        main:"./src/index.js"
    },
    output:{
        filename:"[name].[chunkhash:5].js"
    }
}