module.exports = function(sourceCode){
    console.log("my-loader运行了");
    console.log(sourceCode);

    return sourceCode.replace("变量","var");
}