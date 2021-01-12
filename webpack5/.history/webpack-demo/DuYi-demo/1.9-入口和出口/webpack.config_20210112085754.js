module.exports = {
    entry:{
        pageA: "./src/pageA/index.js",
        pageB: "./src/pageB/index.js",
        pageC: "./src/statistics/index.js"
    },
    output:{
        filename:"[name].[chunkhash:5].js"
    }
}