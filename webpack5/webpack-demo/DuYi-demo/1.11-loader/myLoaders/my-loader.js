var loaderUtils = require("loader-utils");
module.exports = function(sourceCode){  //sourceCode保存匹配到规则文件的代码
    console.log("my-loader运行了");
    var options = loaderUtils.getOptions(this);
    console.log(options);
    var reg = new RegExp(options.changeVar,"g")
    return sourceCode.replace(reg,"var");
}