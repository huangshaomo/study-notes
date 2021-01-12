module.exports = function(sourceCode){
    console.log(sourceCode);
    console.log("my-loader运行了");
    return sourceCode.replace("变量","var");
}