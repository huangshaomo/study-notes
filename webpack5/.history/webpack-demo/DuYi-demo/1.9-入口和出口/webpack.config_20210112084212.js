const path = require('path');
module.exports = {
    entry:{
        main:"./src/main.js",
    },
    output:{
        path: path.resolve(__dirname,'target'),
        filename:"[name].[hash:5]hhh.js"
    }
}