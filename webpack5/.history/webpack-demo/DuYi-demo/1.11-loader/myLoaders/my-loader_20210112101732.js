var loaderUtils = require("loader-utils");
module.exports = function(sourceCode){  //sourceCode保存匹配到规则文件的代码
    console.log("my-loader运行了");
    var options = loaderUtils.getOptions(this);
    return sourceCode.replace(/变量/g,"var");
}