![2020-01-09-10-53-28](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-10-26-15.png)

# webpack

webpack 开箱即用，可以无需使用任何配置文件。然而，webpack 会假定项目的入口起点为 `src/index.js`，然后会在 `dist/main.js` 输出结果

通常你的项目还需要继续扩展此能力，为此你可以在项目根目录下创建一个 `webpack.config.js` 文件，然后 webpack 会自动使用它。

`webpack.config.js`是运行在Node服务器环境上的，而Node使用的是ComonsJs规范，因此webpack的配置文件只能使用CommonJs规范，至于为什么webpack是运行在node服务环境中，是因为webpack在构建过程中需要读取文件，分析出入口文件的所有依赖关系（import，require...）因此它需要运行在node环境中。

## webpack核心功能

### 为什么要使用webpack

当开发一个具有规模的程序，会遇到非常多的非业务问题，这些问题包括：

- 效率问题：精细的模块划分带来了更多的JS文件，更多的JS文件带来了更多的请求，降低了页面访问效率
- 兼容性问题：浏览器目前仅支持ES6的模块化标准，并且还存在兼容性问题。就像Jq只支持服务端的commonjs规范，这样在浏览器端则无法使用，需要借助Browserify 
- 工具问题：浏览器不支持npm下载的第三方包

还有代码的可维护性可扩展性、团队协作、测试等等，我们将这些问题称之为**工程问题**。工程问题与业务无关，但它深刻的影响到开发进度，如果没有一个好的工具解决这些问题，将使得开发进度变得极其缓慢，同时也让开发者陷入技术的泥潭。

而最**根本原因**在于：在浏览器端，开发时态(devtime)和运行时态（runtime）的侧重点不一样。

**开发时态(devtime)**

1. 模块划分越细越好
2. 支持多种模块规范
3. 支持运行npm或其他包管理器下载的模块
4. 能够解决其他工程化问题

**运行时态(runtime)**

1. 文件数量越少越好
2. 文件体积越小越好
3. 代码越乱越好
4. 代码在所有浏览器都能兼容
5. 能够解决其他运行时的问题，主要是执行效率问题

既然开始时态和运行时态面临的局面有巨大的差异，因此，我们需要有一个工具，这个工具能够让开发者专心的在开发时态写代码，然后利用这里工具将开发时态编写的代码转换成运行时态的东西。

这样的工具，叫做**构建工具**，而**webpack**，就是当下最火热的构建工具



### webpack简介

webpack是基于模块化的打包（构建）工具，他把一切视为模块

他通过一个开发时态的入口文件为起点，分析出所有的依赖关系，然后经过一系列的过程（压缩，合并），最终生成运行时态的文件。

**特点**

**为前端工程化而生**：webpack致力于解决前端工程化，特别是浏览器工程化中遇到的问题，让开发者集中注意力编写业务逻辑代码，而把工程化过程中的问题全部交给webpack来处理。

**简单易用**：支持零配置，可以不用些任何一行额外的代码就使用webpack

**强大的生态**：webpack本身功能并不多，但是是非常灵活可拓展的，它提供了一些可以拓展功能的机制，使得一些第三方库可以融于到webpack中。

**基于nodejs**：由于webpack在构建过程中需要读取文件，因此它是运行在node环境中

**基于模块化**：webpack在构建过程中要分析依赖关系，方式是通过模块化导入语句进行分析的，它支持各种模块化标准，包括但不限于CommonJS、ES6 module



#### 安装使用

**本地安装** 

1. 创建项目本地文件夹，如“D:\webpack-demo”，运行cmd，输入如下命令，将在项目目录中自动生成package.json文件

   ```javascript
   npm init -y //初始化一个package.json文件
   ```

2. 切换到该目录

   ```javascript
   D:                 //切换到D盘
   cd D:\webpack-demo //切换到项目目录
   ```

3. 安装webpack和webpack-cli，其中 -D是本地安装

   ```javascript
   npm install webpack webpack-cli -D
   ```

4. 输入如下命令，若出现版本号，说明安装成功。

   ```
   webpack -v
   ```

5. 在项目目录下，新建src文件夹，用于存放源码，新建dist文件夹，用于生成打包文件，此时页面结构如下

![explorer_tAENs555Op](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/explorer_tAENs555Op.png)

**使用**

默认情况下，webpack会以```./src/index.js```作为入口文件分析依赖关系，打包到```./dist/main.js```文件中

通过--mode选项可以控制webpack的打包结果的运行环境



### 模块化兼容性

webpack不仅支持多种模块化导入，而是还支持多模块混用，就是可以用一种模块化导入，另一种模块化导出。但代码编写最忌讳的是精神分裂，选择一个合适的模块化标准，然后贯彻整个开发阶段。

**同模块化标准**

如果导出和导入使用的是同一种模块化标准，打包后的效果和之前学习的模块化没有任何差异

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-07-07-50-09.png" alt="2020-01-07-07-50-09" style="zoom:50%;" />

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-07-07-53-45.png" alt="2020-01-07-07-53-45" style="zoom:50%;" />

**不同模块化标准**

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-07-07-54-25.png" alt="2020-01-07-07-54-25" style="zoom:50%;" />

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-07-07-55-54.png" alt="2020-01-07-07-55-54" style="zoom:50%;" />

**注意**:如果使用 ES6 module的default导出，使用CommonJS导入时，default会变成一个变量名，如果想default的值，记得使用 xxx.default

```javascript
//es6.js
export a = 1;
export b = 2;
export default 3;
//commonJS.js
const obj  = require('./es6.js');
obj.default = 3 //true
```



### 编译结果分析（commonJS）

上一章我们说够，模块化的兼容性在浏览器端还不是很好，因此要想能在所有的浏览器端运行模块化代码，就必须手动实现一个能够编译解析和运行模块化代码的函数

```javascript
var modules = {
    "./src/a.js": function(module,exports){// 以路径名为路径，确保变量名的唯一性
        console.log("module a");	//函数里面的内容是通过node环境中读取出来的
        module.exports = "a"; //浏览器并不认识module.exports，因此我们要把它当做参数传进
    },
    "./scr/index.js": function(module,exports,require){     
        console.log("index module")
        var a = require("./a")//浏览器也不认识require，因此我们要把它当做参数传进
        a.abc();
        console.log(a)
    }
}
```



然后我们声明一个立即执行函数,该函数接收一个modules，我们把modules对象作为参数传进去

```javascript
(function(modules){
})(modules)
```

但此时modules是作为一个全局变量来着，污染了全局变量



我们可以把modules的值直接当做参数传进去，这样就不会污染全局变量了,如下

```javascript
(function(modules){
    //webpack做的第一件事，就是找到入口文件，并分析其依赖关系，所以我们要做的第一件事，就是执行入口文件,我们可以声明一个require函数，接收函数名，专门用来调用函数
    function __require__(moduleId){
        var module = {  //声明一个module,和exports对象，当做接收返回结果的对象。
            exports:{}
        }
        modules[moduleId](module,module.exports,__require__)    //把__require__放进入也是让里面能够使用__require__继续引入其他文件
        //得到的结果会放入到module.exports中
        var result = module.exports
        return result
    }

    return __require__("./src/index.js")    //执行入口文件

})({
    "./src/a.js": function(module,exports){// 以路径名为路径，确保变量名的唯一性
        console.log("module a");
        module.exports = "a"; //浏览器并不认识module.exports，因此我们要把它当做参数传进
    },
    "./src/index.js": function(module,exports,__require__){     
        console.log("index module")
        var a = __require__("./a")//浏览器也不认识require，因此我们要把它当做参数传进
        a.abc();
        console.log(a)
    }

})
```



其实上面就已经可以实现加载模块了，但如果我们需要对加载过的模块进行缓存呢？以便下一次加载同一个模块时，我们可以直接返回该模块导出(exports)的结果,然后声明一个对象，缓存已经加载过的模块与结果，下次加载同一模块时，直接从缓存中读取结果。

```javascript
(function(modules){
    var installModules = {} //声明一个对象，用于缓存已经加载过的模块
    function __require__(moduleId){
        if(installModules[moduleId]){   //下次再加载时判断该模块是否已被加载过，加载过就直接返回缓存
            return installModules[moduleId] 
        }
        var module = { 
            exports:{}
        }
        modules[moduleId](module,module.exports,__require__)
        var result = module.exports;
        installModules[moduleId] = result   //缓存加载过的结果
        return result;
    }

    return __require__("./src/index.js") 
})({
    "./src/a.js": function(module,exports){
        console.log("module a");
        module.exports = "a";
    },
    "./src/index.js": function(module,exports,__require__){     
        console.log("index module")
        var a = __require__("./a")//浏览器也不认识require，因此我们要把它当做参数传进
        // a.abc(); 
        console.log(a)

    }

})
```



此时该函数已经可以实现commonJs模块化的缓存加载了，至于webpack使用eval()来执行模块内部的函数，是为了方便调试，eval()会把字符串当成脚本执行，并单独创建一个变量环境，如果内容执行报错，错误只会局限在这个环境中

  //# sourceURL=./src/index.js"是告诉浏览器报错的变量环境用这个./src/index.js来命名、

```javascript
(function(modules){
    var installModules = {} //声明一个对象，用于缓存已经加载过的模块
    function __require__(moduleId){
        if(installModules[moduleId]){   //下次再加载时判断该模块是否已被加载过，加载过就直接返回缓存
            return installModules[moduleId] 
        }
        var module = { 
            exports:{}
        }
        modules[moduleId](module,module.exports,__require__)
        var result = module.exports;
        installModules[moduleId] = result   //缓存加载过的结果
        return result;
    }

    return __require__("./src/index.js") 
})({
    "./src/a.js": function(module,exports){
        eval("console.log(\"module a\");\nmodule.exports = \"a\";//# sourceURL=./src/a.js")
    },
    "./src/index.js": function(module,exports,__require__){     
        eval("console.log(\"index module\")\nvar a = __require__(\"./src/a.js\")\na.abc();\nconsole.log(a) //# sourceURL=./src/index.js")
        
    }

})
```

整个的实现也非常简单，事实上，webpack就是这样做的，只不过webpack对兼容其他规范有更多的思考，但总体的实现就是这样的。





### 配置文件

webpack提供的Cli支持很多的参数。

- mode: 编译模式，字符串，取值为development或production，指定编码结果代码运行的环境，会影响webpack对编译结果代码格式的处理，mode可以放package.json，命令行，webpack配置文件

  如果出现多个mode，命令行 > package.json＞webpack.config.js 

- --config：通过CLI参数`--config`来指定某个配置文件，默认使用`webpack.config.js`配置文件



配置文件(webpack.config.js)是在打包过程中运行的，而src源码在打包中是不参与运行的，只是webpack通过node环境把内容读取出来，允许多种方式导入也就是webpack内部做了处理。



配置文件打包过程是运行在node环境中，所以只支持commonJs规范。

webpack内部对多种模块规范进行了处理，所以能接收多种模块规范，为什么这么说，因为webpack内部实际上并不会运行src中的源码，只是根据导入字段来判断是用到了哪种规范，再基于该规范去处理



### devtool配置

> 参考文档：https://webpack.docschina.org/configuration/devtool/

前端发展到现阶段，很多时候都不会直接运行源码，可能需要对源代码进行合并，压缩，转换等操作，真正运行的是转换后的代码

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-08-16-38-26.png" alt="2020-01-08-16-38-26" style="zoom:50%;" />



这就给调试带来了困难，因为当运行发生错误的时候，我们更加希望看到源代码中的错误，而不是转换后代码的错误，

因此，source map解决的问题就是将打包后的代码与源码映射起来，



**原理：**

浏览器首先会发生两次请求，第一次请求打包后的代码，发现打包后的代码有源码地图文件的注释，再次请求源码地图文件，当打包后的代码发生报错后，就会从对应的源码地图（source map）中寻找，找到对应的源码位置,并显示源码地图在打包后的代码中对应位置的错误。

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-08-16-58-06.png" alt="2020-01-08-16-58-06" style="zoom:50%;" />

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-08-17-01-13.png" alt="2020-01-08-17-01-13" style="zoom:50%;" />



**开发环境推荐**

1. **eval**(构建速度快，但不能正确映射代码所在源码行数位置)

开发环境下默认会使用eval()环境映射，生产环境无

```javascript
module.exports = { 
    mode:"development"
    devtool:"eval"
}
```

使用eval会把代码放入到eval环境中执行，并且都有 `//# sourceURL`。此选项会非常快地构建。主要缺点是，由于会**映射到转换后的代码，而不是映射到原始代码**（没有从 loader 中获取 source map），所以不能正确的获取代码在源码中所在的行数

打包后代码【index.js片段】

![Code_trjDLK61P1](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/Code_trjDLK61P1.png)

浏览器source查看

![chrome_h37nNu3cRL](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_h37nNu3cRL.png)

2. **eval-source-map**（构建速度慢，但拥有开发环境最佳品质的source-map，且能准确对应错误所在行和列）

每个模块使用 `eval()` 执行，并且 source map 会用base64编码转换为 DataUrl 后添加到 `eval()` 中。初始化 source map 时比较慢，但是会在重新构建时提供比较快的速度，并把生成的source-map嵌入到eval()环境中。行数能够正确映射，因为会映射到原始代码中。它会生成用于开发环境的最佳品质的 source map。

```java
module.exports = {
    "mode":"development",
    "devtool":"eval-source-map"
}
```

打包后代码【a.js片段】

![Code_dxQ8YhHkZE](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/Code_dxQ8YhHkZE.png)

浏览器source查看

![ybKqoDyGCV](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/ybKqoDyGCV.gif)

webpack-internal://是eval()打包的。

webpack:// 则是eval-source-map打包的，可以看到映射的是完整的源码中的代码，行数自然也是一样的（当然在我这里没有体现）

 

**cheap-eval-source-map**（构建速度相对eval-source-map快，但仅能映射错误所在行，适合行代码量少使用）

相比eval-source-map，开销更低，构建速度更快，但只会映射代码所在的行数，而具体在第几列报错的地方就不知道了，如果每行的代码数比较少，这个也是较为推荐的一种

```javascript
module.exports = {
    "mode":"development",
    "devtool":"cheap-eval-source-map"
}
```







**source-map**（构建速度很慢，因为单独生成文件了，效率太低，一般不推荐使用）

如果想单独生成一个source-map映射文件

```javascript
module.exports = {
    "mode":"development",
    "devtool":"source-map"
}
```

使用该命令后会打包单独生成一个source-map文件

![Code_MhFxlW4YLu](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/Code_MhFxlW4YLu.png)

浏览器source查看

![chrome_8Mr4BBaFJv](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_8Mr4BBaFJv.png)





**生产环境推荐**

> 最好的是none，啥也不用

如果一定要使用的话，可以使用source-map



**source-map**（构建速度很慢，因为单独生成文件了，效率太低，一般不推荐使用）

```javascript
module.exports = {
    "mode":"production",
    "devtool":"source-map"
}
```

使用该命令后会打包单独生成一个source-map文件

![Code_MhFxlW4YLu](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/Code_MhFxlW4YLu.png)

main底部也会生成一个指向source-map的注释，方便浏览器请求

![Code_36gRqLASzl](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/Code_36gRqLASzl.png)

由于产生了source-map文件，因此会发生两次请求，产生额外的开销。而且在生产环节中发生错误时，会映射到souce-map，可能会导致源码泄露。所以如果真的要使用source-map，建议将服务器配置为，不允许普通用户访问source-map文件。



**hidden-source-map**

`hidden-source-map` - 与 `source-map` 相同，但不会为 bundle 添加引用注释。如果你只想 source map 映射那些源自错误报告的错误堆栈跟踪信息，但不想为浏览器开发工具暴露你的 source map，这个选项会很有用。

```javascript
module.exports = {
    mode:"production",
    devtool:"hidden-source-map"
}
```

![Code_Qe4TVfJ6eF](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/Code_Qe4TVfJ6eF.png)







**最佳实践**：

1. source map 应在开发环境中使用，作为一种调试手段
2. source map 不应该在生产环境中使用，source map的文件一般较大，不仅会导致额外的网络传输，还容易暴露原始代码。即便要在生产环境中使用source map，用于调试真实的代码运行问题，也要做出一些处理规避网络传输和代码暴露的问题。

### webpack编译过程

webpack的作用是将源代码编译（构建，打包）成最终代码

![2020-01-09-10-26-15](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-10-53-28.png)

整个过程大致分为三个步骤

1. 初始化
2. 编译
3. 输出

![2020-01-09-10-53-28](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-10-26-15.png)

#### 初始化

此阶段，webpack会将CLI参数，配置文件，默认配置进行融合，形成一个最终的配置对象。

对配置的处理过程是依托一个第三方库`yargs`完成的

此阶段相对比较简单，可以简单理解为，初始化阶段主要用于产生一个最终的配置。



#### 编译

1. **创建chunk**

chunk是webpack在内部构建过程中的一个概念，译为`块`，它表示通过某个入口找到的所有依赖的统称。

根据入口模块（默认为`src/index.js`）创建一个chunk

**一个入口文件对应一个chunk，多个入口文件对应多个chunk。**

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-11-54-08.png" alt="2020-01-09-11-54-08" style="zoom:50%;" />

每个chunk都至少有两个属性

- name：默认为main
- id：唯一编号，开发环境和name相同，生产环境是一个数字，从0开始



2. **构建所有依赖**

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-12-35-05.png" alt="2020-01-09-12-32-38"  />

> AST在线测试工具：https://astexplorer.net/

简图

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-12-32-38.png" alt="2020-01-09-12-35-05" style="zoom:50%;" />

3. **产生chunk assets**

在第二步完成后，chunk中会产生一个模块列表，列表中包含了依赖的**模块id**和**模块转换后的代码**

接下来，webpack会根据配置为Chunk生产一个资源列表，即`chunk assets`，资源列表可以理解为是生成到最终文件的文件名和文件内容

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-12-43-52.png" alt="2020-01-09-12-39-16" style="zoom:50%;" />

> chunk hash是根据所有chunk assets的内容生成的一个hash字符串
>
> hash：一种算法，具体有很多分类，特点是将一个任意长度的字符串转换为一个固定长度的字符串，而且可以保证原始内容不变，产生的hash字符串就不变。

简图

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-12-47-43.png" alt="2020-01-09-12-43-52" style="zoom:50%;" />



4. **合并chunk assest**

将多个chunk的assets合并到一起，并产生一个总的hash



<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-12-39-16.png" alt="2020-01-09-12-47-43" style="zoom:50%;" />

**一个chunk可以产生多个chunk assets，例如.map文件，也是依赖同一个chunk构建的，才能与main.js产生映射关系**



#### 输出

此步骤非常简单，webpack将利用node中的fs模块（文件处理模块），根据编译产生的总的assets，生成相应的文件

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-12-54-34.png" alt="2020-01-09-12-54-34" style="zoom:50%;" />

**总过程**

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-15-51-07.png" alt="2020-01-09-15-51-07"  />

#### 过程总结：

以下面代码为例

```javascript
//b.js
console.log('b');
module.exports = "b"
//a 
console.log("a");
require("./b")
module.exports = "a"
//index.js	入口文件
console.log("index");
require("./a");
require("./b");
```

**初始化**：

合并CLI参数，配置文件，默认配置成最终配置文件

**编译**：

1. webpack首先在内部根据入口文件构建chunk(块)，多个入口则构建多个chunk(块)。初始化的chunk中为空，没有模块。

   ```javascript
//chunk
   {
   
   }
   ```
   
2. 检查入口模块路径（"./src/index.js"）是否记录在chunk中，如果在chunk存在就是加载过的了，此时的chunk是空的，说明该模块文件未加载

   ```javascript
   //chunk
   {
   }
   ```

3. 读取入口模块文件的内容，使用AST抽象语法树，进行树形结构遍历，找到模块依赖关系，并把找到的依赖模块记录到dependeces数组中

   ```javascript
   //index.js
   console.log("index");
   require("./a");
   require("./b");
   ```

   但记录时不会直接记录该依赖模块的路径`./a`，而是记录该依赖模块的完整相对路径，如下

   ```javascript
    //dependecies[index]
    ["./src/a.js","./src/b.js"]
   ```

4. 然后把入口模块文件内容的模块依赖函数替换为webpack内部封装的\__webpack_require__函数，此时的代码就叫转换后的代码

   ```javascript
   console.log("index");
   require("./a");  ==>    __webpack_require__(/*! ./a */ "./src/a.js");
   require("./b");  ==>    __webpack_require__(/*! ./b */ "./src/b.js");
   ```

5. 然后把转换后的代码记录在chunk的入口文件模块中

   ```javascript
   //chunk
   {
       模块id: "./src/index.js",
       转换后的代码：
       console.log("index");
       __webpack_require__(/*! ./a */ "./src/a.js"),
       __webpack_require__(/*! ./b */ "./src/b.js");
   }
   ```

6. 接下来还没完，因为这个入口模块文件中依赖了其他模块，然后会根据denpendences的内容，继续递归加载a模块（./src/a.js）【下面的是递归，和1-6是一样的。】

   ```java
   取出"./src/a.js"出来执行，此时Index的依赖如下
   //dependecies[index]
   ["./src/b.js"] 
   ```

7. a模块文件路径不存在chunk中，则读取a模块文件内容，使用AST抽象语法树，进行树形结构遍历，找到模块依赖关系，并把找到的依赖模块记录到dependeces数组中

   ```javascript
   //a 
   console.log("a");
   require("./b")
   module.exports = "a"
   ```

   但记录时不会直接记录该依赖模块的路径`./a`，而是记录该依赖模块的完整相对路径，如下

   ```javascript
   //dependecies[a]
   ["./src/b.js"]
   ```

8. 然后把a模块文件内容的模块依赖函数替换为webpack内部封装的\__webpack_require__函数，此时的代码就叫转换后的代码

   ```javascript
   console.log("a");
   require("./b");  ==>    __webpack_require__(/*! ./b */ "./src/b.js");
   module.exports = "a"
   ```

9. 然后把转换后的代码记录在chunk的a文件模块中，如下

   ```javascript
   //chunk
   {
       模块id: "./src/index.js",
       转换后的代码：
       console.log("index");
       __webpack_require__(/*! ./a */ "./src/a.js"),
       __webpack_require__(/*! ./b */ "./src/b.js");
   },
    {
       模块id: "./src/a.js",
       转换后的代码：
       console.log("a");
       __webpack_require__(/*! ./b */ "./src/b.js");
       module.exports = "a"
    }  
   ```

   

10. 接下来还没完，因为这个a模块文件中依赖了b模块文件，然后会根据denpendences的内容，继续递归加载b模块（./src/b.js）

    ```java
    取出"./src/b.js"出来执行，此时a的依赖如下
    //dependecies[a]
    [null] 
    ```

11. b模块文件路径不存在chunk中，则读取b模块文件内容，使用AST抽象语法树，进行树形结构遍历，找到模块依赖关系，而b模块不存在依赖关系，因为b不依赖任何模块

    ```javascript
    //b
    console.log('b');
    module.exports = "b"
    ```

    因此b模块的依赖是空的

    ```javascript
    //dependecies[b]
    [null]
    ```

12. 然后把b模块文件内容的模块依赖函数替换为webpack内部封装的\__webpack_require__函数，此时的代码就叫转换后的代码,而b中没有模块依赖函数，所以转换后的b代码依旧是一样的

    ```javascript
    console.log('b');
    module.exports = "b"
    ```

13. 然后把转换后的代码记录在chunk的a文件模块中，如下

    ```javascript
    //chunk
    {
        模块id: "./src/index.js",
        转换后的代码：
        console.log("index");
        __webpack_require__(/*! ./a */ "./src/a.js"),
        __webpack_require__(/*! ./b */ "./src/b.js");
    }
    ,
     {
        模块id: "./src/a.js",
        转换后的代码：
        console.log("a");
        __webpack_require__(/*! ./b */ "./src/b.js");
        module.exports = "a"
     }
    ,
     {
        模块id: "./src/b.js",
        转换后的代码：
    	console.log('b');
    	module.exports = "b"
     } 
    ```

    

14. 接下来，由于b没有其他模块依赖，b便结束，此时回到a的依赖，因为依赖的b模块也加载完成了，a也不存在依赖了，a也结束，回到index，在a依赖加载完毕后，还剩下b依赖，然后继续加载b依赖，发现b依赖已经存在chunk中，说明b模块加载过来，则index的b模块也结束，再次回到Index，此时Index的依赖也加载完毕了，index也结束。完成。

至此，chunk生成完毕。



15. **产生chunk assets**

    在上面的依赖分析完毕后的，chunk中会产生一个模块列表，列表中包含了依赖的**模块id**和**模块转换后的代码**

    ```javascript
    //chunk
    {
        模块id: "./src/index.js",
        转换后的代码：
        console.log("index");
        __webpack_require__(/*! ./a */ "./src/a.js"),
        __webpack_require__(/*! ./b */ "./src/b.js");
    }
    ,
     {
        模块id: "./src/a.js",
        转换后的代码：
        console.log("a");
        __webpack_require__(/*! ./b */ "./src/b.js");
        module.exports = "a"
     }
    ,
     {
        模块id: "./src/b.js",
        转换后的代码：
    	console.log('b');
    	module.exports = "b"
     } 
    ```

    接下来，webpack会根据配置为Chunk生成一个资源列表，即`chunk assets`，资源列表可以理解为是生成到最终文件的文件名和文件内容,相当是webpack把chunk当成参数传递进去了。

    ```javascript
    (function (modules) { // webpackBootstrap
    	function __webpack_require__(){
            //...
        }
        return __webpack_require__(__webpack_require__.s = "./src/index.js")
    })({
    
        "./src/a.js": (function (module, exports, __webpack_require__) {
            console.log("a");
        	__webpack_require__(/*! ./b */ "./src/b.js");
        	module.exports = "a"
        }),
    
        "./src/b.js": (function (module, exports) {
          	console.log('b');
    		module.exports = "b"
        }),
    
        "./src/index.js": (function (module, exports, __webpack_require__) {
            console.log("index");
            __webpack_require__(/*! ./a */ "./src/a.js"),
            __webpack_require__(/*! ./b */ "./src/b.js");
        })
      });
    ```

    然后为这个chunk assets资源列表(文件)创建一个hash，里边的内容不变则hash不变。



16. **合并chunk assest**

    如果有多个chunk，生成多个chunk assets资源列表(多个文件)，则把将多个chunk的assets合并到一起，并产生一个总的hash，所有文件里边的内容不变则hash不变。

    

**输出：**

此步骤非常简单，webpack将利用node中的fs模块（文件处理模块），根据编译产生的总的assets，生成相应的文件。

生成的文件个数取决于**入口文件的个数**与**使用了chunk几次**

一般一个入口文件对应一个chunk，会生成一个文件，但当启动了源码地图(devtool:"source-map")时，webpack会利用同一个Chunk生成另一个.map映射文件。

总之：一个入口文件对应一个chunk，入口文件与chunk是一对一的关系，入口文件多吗，，chunk就多，但一个chunk可生成多个文件



**最后我们再看下打包结果，就非常清晰明了了**

![Code_nnRsE6S7cF](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/Code_nnRsE6S7cF.png)

Hash：就是总的 chunk assets 生成的总hash

Time：打包耗时

Built at：打包时间

Asset：就是生成的chunk assets，只不过使用node的fs已经生成一个文件了，

Size：打包的文件尺寸

Chunks：就是使用的哪个chunk，一个入口对应一个chunk，注意不是chunk assets!

ChunkName：chunk的名称，如果没有配置默认使用main

[emitted]：表示文件已经输出

[emitted] [dev]：表示该文件是使用开发环境打包输出的

Entrypoint：表示使用名字为main的chunk 打包出了main.js，main.js.map两个文件



涉及术语：

1. module：模块，分割的代码单元，webpack中的模块可以是任何内容的文件，不仅限于JS
2. chunk：webpack内部构建模块的块，一个chunk中包含多个模块，这些模块是从入口模块通过依赖分析得来的
3. bundle：chunk构建好模块后会产生chunk的资源清单，清单中的每一项就是一个bundle，可以认为bundle就是最终生成的文件
4. hash：最终的资源清单所有内容联合生成的hash值
5. chunkhash：chunk生成的资源清单内容联合生成的hash值
6. chunkname：chunk的名称，如果没有配置则使用main
7. id：通常值chunk的唯一编号，如果在开发环境下构建，和chunkname相同，如果是生产环境下构建，则使用一个从0开始的数字进行编号。

**可以把最终的chunk当成全局立即执行函数的参数，chunk assets就是个接收了这个chunk这个参数的全局立即执行函数文件（内容），而build就是使用node的fs生成的打包文件。**



#### AST抽象语法树分析依赖

例如**CommonJs**是找到ExpressStatement下callee（被调用函数）和arguments（参数）对应的name，value属性值，合并起来就是require('xxx')

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_xfDCJsuavC.png" alt="chrome_xfDCJsuavC" style="zoom: 80%;" />

ES6 Module则是看到ImortDeclaration，就知道是也是模块语法，抽出source里面的value值。

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_f0y4kMa8jD.png" alt="chrome_f0y4kMa8jD" style="zoom:80%;" />



### 出口和入口 

#### 出口

这里的出口是针对资源列表的文件名或路径的配置，也就是总的chunk assets阶段，出口配置会在这个阶段生效，决定着使用node文件生成的文件名与存放路径

![Typora_HWbVVn1G48](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/Typora_HWbVVn1G48.png)

出口通过output进行配置





#### 入口

前面我们说过，一个入口文件对应一个chunk，因此，**在这里配置的入口文件，在本质上配置的就是chunk**

入口文件通过entry进行配置。

- name：chunkname
- hash：总的资源hash，通常用于解决缓存问题
- chunkhash：使用chunkhash
- id：使用chunkid，不推荐



### 入口和出口的最佳实践



### loader

> webpack做的事情，仅仅是分析出各种模块的依赖关系，然后形成资源列表，最终打包生成到指定的文件夹中。更多的功能需要借助webpack loaders和webpack plugins完成

webpack loader：loader本质上是一个函数，他的作用是将某个源码字符串转换成另一个源码字符串

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-13-10-39-24.png" alt="2020-01-13-10-39-24" style="zoom:50%;" />

loader函数将在模块解析的过程中被调用，以得到最终的源码

**全流程：**

![2020-01-13-09-28-52](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-13-09-28-52.png)

**chunk中解析模块的流程：**

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-13-09-29-08.png" alt="2020-01-13-09-29-08" style="zoom:50%;" />

**chunk中解析模块的更详细流程：**

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-13-09-35-44.png" alt="2020-01-13-09-35-44" style="zoom:50%;" />

**处理loaders流程：**

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-13-10-29-54.png" alt="2020-01-13-10-29-54" style="zoom:50%;" />

**完整配置**

```javascript
module.exports = {
    module: { //针对模块的配置，目前版本只有两个配置，rules、noParse
        rules: [ //模块匹配规则，可以存在多个规则
            { //每个规则是一个对象
                test: /\.js$/, //匹配的模块正则
                use: [ //匹配到后应用的规则模块
                    {  //其中一个规则
                        loader: "模块路径", //loader模块的路径，该字符串会被放置到require中，所以loader不用手动require();
                        options: { //向对应loader传递的额外参数

                        }
                    }
                ]
            }
        ]
    }
}
```



**简化配置**

```javascript
module.exports = {
    module: { //针对模块的配置，目前版本只有两个配置，rules、noParse
        rules: [ //模块匹配规则，可以存在多个规则
            { //每个规则是一个对象
                test: /\.js$/, //匹配的模块正则
                use: ["模块路径1", "模块路径2"]//loader模块的路径，该字符串会被放置到require中
            }
        ]
    }
}
```



### plugin

loader的功能定位是转换代码，而一些其他的操作难以使用loader完成，比如：

- 当webpack生成打包文件时，顺便多生成一个描述文件
- 当webpack编译启动时，控制台输出一句话表示webpack启动了
- ...

这种类似的功能需要把功能嵌入到webpack的编译流程中，而这种事情的实现是依托于plugin的

红点表示plugin可以使用钩子函数运行在的任意编译阶段，

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-15-12-45-16.png" alt="2020-01-15-12-45-16" style="zoom:50%;" />

plugin的本质是一个带有apply方法的对象

```javascript
var plugin = {
    apply: function(compiler){}
}
```

通常，习惯上，我们会将该对象写成构造函数的模式

```javascript
class MyPlugin{	//自己创建一个plugin
    apply(compiler){}
}
var plugin = new MyPlugin();
```

要将插件应用到webpack，需要把插件对象配置到webpack的pluigins数组中，如下：

```javascript
module.exports = {
    plugins:[
        new Myplugin()
    ]
}
```

**apply函数会在初始化阶段，创建好Compiler对象后运行**

**compiler对象是在初始化阶段构建的**，整个webpack打包期间只有一个compiler对象，后续完成打包工作的是compiler对象内部创建的compilation

apply方法会在**创建好compiler对象后调用**，并向方法传入一个compiler对象。

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-15-12-49-26.png" alt="2020-01-15-12-49-26" style="zoom:50%;" />

**compiler和compilation**

- `compiler`对象代表了完整的`webpack`环境配置，这个对象在初始化阶段被一次性构建，并配置好所有可操作的设置，包括options，loader和plugin。当在webpack环境中应用一个插件时，插件将收到此compiler对象的引用。可以使用它来访问`webpack`的主环境

- `compilation`对象代表了一个资源版本的构建，当运行webpack开发环境中间件时，每当检测到一个文件变化，就会创建一个新的compilation，从而生成一组新的编译资源。一个

  compilation对象表现了当前的模块资源，编译生成资源，变化的文件，一集被跟踪依赖的状态信息。compilation对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。





compiler对象提供了大量的钩子函数（hooks，可以理解为事件），plugin的开发者可以注册这些钩子函数，参与webpack编译和生成。

你可以在apply方法中使用下面的代码注册钩子函数:

```javascript
class MyPlugin{
    apply(compiler){
        //compiler.hooks.someHook.tap(...)
        compiler.hooks.事件名称.事件类型(name,function(){
            //事件处理函数
        })
    }
}
```

**事件名称**

即要监听的事件名，即钩子名，所有的钩子：

https://www.webpackjs.com/api/compiler-hooks

**事件类型**

这一部分使用的是Tapable API，这个小型的库是一个专门用于钩子函数监听的库

它提供了一些事件类型：

- tap：注册一个同步的钩子函数，函数运行完毕则表示事件处理结束
- tapAsync：注册一个基于回调的异步的钩子函数，函数通过调用一个回调表示事件处理结束
- tapPromise：注册一个机遇Promise的异步的钩子函数，函数通过返回promise进入已决状态表示事件处理结束



**处理函数**

处理函数有一个事件参数`compilation`





### 区分环境

有的时候，我们需要针对生产环境和开发环境分别书写webpack配置

为了更好的适应这种要求，webpack运行配置不仅可以是一个对象，还可以是一个函数

```javascript
module.exports = env => {
    return {
     //配置内容   
    }
}
```

在开始构建时，webpack如果发现配置是一个函数，会调用该函数，将函数返回的对象作为webpack配置内容，因此，开发者可以根据不同的环境返回不同的对象。



在调用webpack函数时，webpack会向函数传入一个参数env，该参数的值来自于webpack命令中给env指定的值。例如

```shell
npx webpack --env abc #env: "abc"
npx webpack --env.abc #env: {abc:true}
npx webpack --env.abc=1 #env: {abc:1}
npx webpack --env.abc=1 --env.bcd=2 # env:{abc:1,bcd:2}
```

env是一个对象{}

这样一来，我们就可以在命令中指定环境，在代码中进行判断，根据环境返回不同的配置结果



**webpack.config.js**：webpack默认文件，如果存在会自动执行该文件

```javascript
var baseConfig = require("./webpack.base.js");
var devConfig = require("./webpack.dev.js");
var prodConfid = require("./webpack.prod.js");
console.log("默认配置文件执行了");
modulex.exports = env =>{
    if(env && env.prod){
        return {
            ...baseConfig,
            ...prodConfig
        }
    }else{
        return{
            ...baseConfig,
        	...devConfig
        }
    }
}
```

**webpack.base.js**

```javascript
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "scripts/[name]-[hash:5].js"
    }
}
```

**webpack.dev.js**

```javascript
module.exports = {  
    mode: "development",
    devtool: "source-map"
}
```

**webpack.prod.js**

```javascript
module.exports = {
    mode: "production",
    devtool: "none"
}
```

```shell
npx webpack --env.prod
```

上面表示，使用了webpack命令后，首先会先执行`webpack.config.js`，然后判断当前环境（env&& env.prod）env是否存在，且env.prod是否为true，再分别执行不同的代码



### 其他细节配置

#### context

```js
context: path.resolve(__dirname,"app")
```

该配置会影响入口和loaders的解析，入口和loaders的相对路径会以context的配置作为基准路径，这样，你的配置会独立于CWD（current working directrory 当前执行路径）

#### output

##### library

```js
library:"abc"
```

这样一来，打包后的结果中，会将只执行函数的执行结果暴露给abc



##### libraryTarget

```js
libraryTarget:"var"
```

该配置可以更加精细的控制如何暴露入口包的导出结果

其他可用的值有：

- var：默认值，暴露给一个普通变量
- window：暴露给window对象的一个属性
- this：暴露给this的一个属性
- global：暴露给global的一个属性
- commonjs：暴露给exports的一个属性
- 其他：https://www.webpackjs.com/configuration/output/#output-librarytarget



#### target

设置打包结果最终要运行的环境，常用有

```js
target:"web"
```

- web：打包后的代码运行在web环境中
- node：打包后的代码运行在node环境中
- 其他：https://www.webpackjs.com/configuration/target/



#### module.noParse

```js
noParse:/jquery/
```

不解析正则表达式匹配的模块，通常用它来忽略那些大型的单模块库，以提高**构建性能**



#### resolve

resolve的相关配置主要用于控制模块解析过程

##### modules

```js
modules:["node_modules"];	//默认值
```

当解析模块时，如果遇到导入语句，`require("test")`，webpack会从下面的位置寻找依赖的模块

1. 当前目录下的`node_modules`目录
2. 上级目录下的`node_modules`目录
3. ...

##### extensions

```js
extensions:[".js",".json"]	//默认值
```

当解析模块时，遇到无具体后缀的导入语句，例如```require("test")```，会依次测试它的后缀名

\- test.js

\- test.json



##### alias

```js
alias:{
    "@":path.resolve(__dirname,"src"),
    "_":dirname
}
```

有了alias（别名）后，导入语句中可以添加配置的键名，例如`require(@/abc.js)`，webpack会将其看作是`require(src的绝对路径+ "/abc.js")`。



在大型系统中，源码结果往往比较深和复杂，别名配置可以让我们更加方便的导入依赖。



#### externals

```js
externals:{
    jquery:"$",
    lodash:"_"
}
```

从最终的bundle中排除掉配置的配置的源码，例如，入口模块是

```js
//index.js
require("jquery")
require("lodash")
```

生成的bundle是：

```js
(function(){
    ...
})({
    "./src/index.js": function(module, exports, __webpack_require__){
        __webpack_require__("jquery")
        __webpack_require__("lodash")
    },
    "jquery": function(module, exports){
        //jquery的大量源码
    },
    "lodash": function(module, exports){
        //lodash的大量源码
    },
})
```

但有了上面的配置后，则变成了

```js
(function(){
    ...
})({
    "./src/index.js": function(module, exports, __webpack_require__){
        __webpack_require__("jquery")
        __webpack_require__("lodash")
    },
    "jquery": function(module, exports){
        module.exports = $;
    },
    "lodash": function(module, exports){
        module.exports = _;
    },
})
```

这比较适用一些第三方库来自外部CDN的情况，这样一来，即可在页面中适用CDN，又让bundle的体积变得更小，还不影响源码的编写



#### stats

stats控制的是构建过程中控制台的输出内容



























## 常用扩展

### 清除输出目录

> clean-webpack-plugin



### 自动生成页面

> html-webpack-plugin



### 复制静态资源

> copy-webpack-plugin



### 开发服务器

> webpack-dev-server

在**开发阶段**，目前遇到的问题是打包、运行、调试过程过于繁琐，回顾一下我们的操作流程：

1. 编写代码
2. 控制台运行命令完成打包
3. 打卡页面查看效果
4. 继续编写代码，回到步骤2

并且，我们往往希望吧最终生成的代码和页面部署到服务器上，来模拟真实环境



为了解决这些问题，webpack官方制作了一个单独的库：**webpack-dev-server**

它**既不是plugin也不是loaders**

先来看看它怎么用

1. 安装

   ```shell
   cnpm install webpack-dev-server --D
   ```

2. 执行`webpack-dev-server`命令

   `webpack-dev-server`命令几乎支持所有的webpack命令参数，如`--config`、`env`等等，你可以把它当做webpack命令使用

这个命令是专门为开发阶段服务的，真正部署的时候还是得使用webpack命令



当我们执行`webpack-dev-server`命令后，它做了以下操作：

1. 内部执行webpack命令，传递命令参数
2. 开启watch
3. 注册hooks：类似于plugin，webpack-dev-server会向webpack中注册一些钩子函数，主要功能如下：
   1. 将资源列表（assets）保存起来
   2. 禁止webpack输出文件
4. 用express开启一个服务器，监听某个端口，当请求到达后，根据请求的路径，给与相应的资源内容



#### 配置

针对webpack-dev-server的配置，参考：https://www.webpackjs.com/configuration/dev-server/

场景配置有：

- port：配置监听端口
- proxy：配置代理，常用于跨域访问
- stats：配置控制台输出内容

























## CSS工程化

### CSS工程化简述



### 利用webpack拆分css

要拆分css，就必须把css当成像js那样的模块，而把css当成模块后，就必须有一个构建工具，它具备合并代码的能力，而webpack本身只能读取css文件的内容、将其当作JS代码进行分析合并的能力，但不具有能够将css代码转换成js代码的能力。

于是，就必须有一个loader，能够将css代码转换为js代码

#### css-loader

> 将css代码转换成js代码。
>
> 处理原理及其简单：将css代码作为字符串导出。

例1：

```css
.red{
    color:'#f10'
}
```

经过css-loader转换后变成js代码

```javascript
module.exports = `.red{
	color:"#f10"
}`
```

> 当然上面的代码是简化过的，但核心思想不变。



例2：

```css
.red{
    color:'#f10';
    background:url('./bg.png');
}
```

经过css-loader转换后变成js代码

```javascript
var import1 = requrie("./bg.png");
module.exports = `.red{
	color:"#f10";
	background:url("${import1}")
}`
```

这样一来，经过webpack的后续处理，会把一来```./bg.png```添加到模块列表，然后再将代码转换为

```javascript
var import1 = __webpack_require__("./src/bg.png");
module.exports = `.red{
	color:"#f10",
	background:url("${import1}")
}`
```



例3：

```css
@import "./reset.css"
.red{
    color:'#f10';
    background:url('./bg.png');
}
```

经过css-loader转换后变成js代码

```js
var import1 = require("./reset.css");
var import2 = requrie("./bg.png");
module.exports = `${import1}
.red{
	color:"#f10",
	background:url("${import2}")
}
`
```

































## JS兼容性









































## 性能优化



## webpack 模块加载原理



**探究webpackBootstrap**

```javascript
//webpackBootstrap
(function(modules){
    //缓存__webpack_require__加载过的模块
    var installedModules = {};
    
   /**
   * Webpack 加载函数，用来加载 webpack 定义的模块
   * @param {String} moduleId 模块 ID，一般为模块的源码路径，如 "./src/index.js"
   * @returns {Object} exports 导出对象
   */
    function __Webapck_require__(moduleId){
        //....
    }
    return __webpack_require__(__webpack_require__.s = "./src/index.js")
})
```

可以看到其实主要做了两件事：

1. 定义一个模块加载函数`__webpack_require__`
2. 使用加载函数加载入口模块`"./src/index.js"`



整个 `webpackBootstrap` 中只出现了入口模块的影子，那其他模块又是如何加载的呢？我们顺着 `__webpack_require__("./src/index.js")` 细看加载函数的内部逻辑：

```javascript
function __webpack_require__(moduleId){
    //模块如果重复加载则利用缓存
    if(installModules[moduleId]){
    	return installModules[moduleId].exports   
    }
    
    // 如果是模块第一次加载，则初始化模块对象，并缓存
    var module = installModules[moduleId] = {
        i:moduleId,	//模块ID，存放的就是模块的源路径
        l: false,	//模块是否已加载 标识
		exports: {}	//模块导出对象
    }
    
    /**
    * 执行模块
    * @param module.exports -- 模块导出对象引用，改变模块包裹函数内部的 this 指向
    * @param module -- 当前模块对象引用
    * @param module.exports -- 模块导出对象引用
    * @param __webpack_require__ -- 用于在模块中加载其他模块
    */
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    
  // 模块加载标识置为已加载
  module.l = true;

  // 返回当前模块的导出对象引用
  return module.exports;
    
}
```

首先，加载函数使用了闭包函数`installModules`,用来将已加载过的模块保存在内容中，接着是初始化模块对象，并把它挂在到缓存里。然后是模块的执行过程，加载入口文件`modules[moduleId]`其实就是`./src/index.js`对应的模块函数。执行模块函数前传入了跟模块相关的几个实参，让模块可以导出内容，以及加载其他模块的导出。最后标识该模块加载完成，返回模块的导出内容

根据 `__webpack_require__` 的缓存和导出逻辑，我们得知在整个 IIFE 运行过程中，加载已缓存的模块时，都会直接返回 `installedModules[moduleId].exports`，换句话说，相同的模块只有在第一次引用的时候才会执行模块本身。



**模块执行函数**

`__webpack_require__`中通过`modules[modulesId].call()`运行了模块执行函数，下面我们进入到`webpackBootstrap`的参数部分，看看模块的执行函数。

```javascript
// webpackBootstrap
(function(modules){
  // ...
})({

/*** 入口模块 ./src/index.js ***/
"./src/index.js":(function(module,__webpack_exports_,__webpack_require__){
    "use strict"
    // 用于区分 ES 模块和其他模块规范，不影响理解 demo，战略跳过。
    __webpack_require__.r(__webpack_exports__);
    // 模块代码中，`import {plus, minus} from './utils/math.js';` 语句被 loader 解析转化。
    // 加载 "./src/utils/math.js" 模块，
    var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/math.js */ "./src/utils/math.js");
    
    document.writeln('Hello webpack!');
    document.writeln('1 + 2: ', Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_0__["plus"])(1, 2));
    document.writeln('1 - 2: ', Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_0__["minus"])(1, 2));
  })  
    
    
/*** 工具模块 ./src/utils/math.js ***/
"./src/utils/math.js":(function(module,__webpack_exports__,__webpack_require__){
    "use strict"
    // 同 "./src/index.js"
    __webpack_require__.r(__webpack_exports__);
    // 源模块代码中，`export` 语句被 loader 解析转化。
    // 导出 __webpack_exports__
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus", function() { return plus; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minus", function() { return minus; });
    const plus = (a, b) => {
      return a + b;
    };

    const minus = (a, b) => {
      return a - b;
    };
	})
})
```

执行顺序是：入口模块 -> 工具模块 -> 入口模块。入口模块中首先就通过 `__webpack_require__("./src/utils/math.js")` 拿到了工具模块的 `exports` 对象。再看工具模块，ES 导出语法转化成了`__webpack_require__.d(__webpack_exports__, [key], [getter])`，而 `__webpack_require__.d` 函数的定义在 `webpackBootstrap` 内：

```javascript
// ...

  // 定义 exports 对象导出的属性。
  __webpack_require__.d = function (exports, name, getter) {

    // 如果 exports （不含原型链上）没有 [name] 属性，定义该属性的 getter。
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
    }
  };

  // 包装 Object.prototype.hasOwnProperty 函数。
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

// ...
```

可见 `__webpack_require__.d` 其实就是 `Object.defineProperty` 的简单包装（怪不得叫 d 呢）。

回顾一下，`__webpack_exports__` 原本在 `__webpack_require__` 中创建，初始值为 `{}`。这个导出对象一路传到工具模块 `math.js` 中，被添加上 `plus` 和 `minus`，然后又在 `__webpack_require__` 函数最后导出，为入口模块 `index.js` 的执行函数所用。

exports 的一生：

![chrome_F1OpOBd0VI](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_F1OpOBd0VI.png)

引用工具模块导出的变量后，入口模块再执行它剩余的部分。至此，Webpack 基本的模块执行过程就结束了。



除了 ES6 Module 规范，Webpack 同样支持 CommonJS 与 AMD 规范，你可以替换模块化规范，重新打包来观察它们的区别。

![chrome_fciNNocTgj](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_fciNNocTgj.png)



installedModules结构类型下面这样

```javascript
installedModules = {
    "./src/index.js":{
        i:"./src/index.js",
        l:false,
        exports:{}
    },
    "./src/math.js":{
        i:"./src/math.js",
        l:false,
        exports:{}
    }
}
```



**webpack模块加载纯文详解**

**CommonJS**

```

```



**ES6 Module**

```javascript
//index.js
console.log("index")
import a from './a'
//a.js
console.log("a")
import b from './b'
export var a = "a"
//b.js
console.log("b")
export var b = "b"
```

package.json

```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "webpack --mode=development"
  },
  "devDependencies": {
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10"
  }
```



**全局立即执行函数**

1. 声明一个对象，存放加载过模块
2. 其他无关声明，忽略....
3. 使用__webpack_require__调用入口文件(./src/index.js)，执行完毕后，把入口文件的exports返回出去

**\__webpack_require__**（）：

1. 检查模块是否被缓存过，如果缓存过，直接返回缓存的模块结果，结束

2. 格式化模块然后放入缓存中

3. 进入模块的函数执行内部，并把this指向模块的exports，并传递三个参数（module，module.exports，\__webpack-require__）

   （停，先转入下面的./src/index.js函数内部）

4. 标志模块已被加载

5. 返回模块的exports

**\__webpack_require__ .r**（）:

> 接受一个export对象

1. 判断symbol是否类型不为undefined并且 Symbol.toStringTag存在
2. 如果满足上面条件，则给export对象内部定义一个Symbol的数据类型，值为字符串Module，格式如下，否则直接执行第三步。

![360chrome_NYff7JngV8](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_NYff7JngV8.png)

3. 然后再次给exports内部定义属性‘__esModule’，值为布尔类型的true

   ![360chrome_Y0ad3XSw9U](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_jh4dGEpppH.png)

4. 结束



**\__webpack_require__d**（）：

> 该函数接受三个参数，exports对象，属性，函数

1. 首先调用函数\__webpack_require__.o，把exports对象与属性参数传递进入，用来判断该属性是否属于该对象的。
2. 如果该属性不属于exports对象，继续执行第三步，否则结束。
3. 往export中声明该属性，并设置getter为传递过来的函数参数，（该属性可通过for-in循环枚举到，且当访问该属性时就会调用函数参数的执行）



**\__webpack_require__o**（）：

> 该函数接受两个参数，一个对象，一个属性

1. 判断该属性是否存在该对象中，如果存在，返回true，否则false。



tips：hasOwnProperty表示是否有自己的属性。这个方法会查找一个对象是否有某个属性，但是不会去查找它的原型链。

----------------------------------------------------------------------

**./src/index.js**

1. 在上面的index的\__webpack_require__走到第三步后进入这里

2. 调用**\__webpack_require__.r**()函数，并把index的exports对象作为参数传递过去(当然现在的exports对象是空的)

   **\__webpack_require__.r**函数执行完成后的export对象格式如下：

   ![360chrome_Y0ad3XSw9U](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_jh4dGEpppH.png)

3. 调用webpack内部封装的\__webpack_require__执行（./src/a.js）模块



**./src/a.js**

1. 在上面的a的\__webpack_require__走到第三步后进入这里

2. 调用**\__webpack_require__.r**()函数，并把a的exports对象穿过去(当然现在的exports对象是空的)

   **\__webpack_require__.r**函数执行完成后的export对象格式如下：

   ![360chrome_Y0ad3XSw9U](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_jh4dGEpppH.png)

3. 调用**\__webpack_require__.d**()函数，并把a的exports对象，字符串a，一个返回字符串a的函数，当作参数传递过去。

   **\__webpack_require__.d**函数执行完成后的export对象格式如下：

   ![360chrome_3cej6HRX1g](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_3cej6HRX1g.png)

4. 调用webpack内部封装的**\__webpack_require__**执行（./src/b.js）模块





**./src/b.js**

1. 在上面的b的\__webpack_require__走到第三步后进入这里

2. 调用**\__webpack_require__.r**()函数，并把a的exports对象穿过去(当然现在的exports对象是空的)

   **\__webpack_require__.r**函数执行完成后的export对象格式如下：

   ![360chrome_Y0ad3XSw9U](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_jh4dGEpppH.png)

3. 调用**\__webpack_require__.d**()函数，并把b的exports对象，字符串b，一个返回字符串b的函数，当作参数传递过去。

   **\__webpack_require__.d**函数执行完成后的export对象格式如下：

   ![360chrome_dKFLAWR87L](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_dKFLAWR87L.png)



4. 在控制台输出b
5. 继续执行语句（export var b = 'b'）,声明一个b，赋值为字符串b，并导出该变量b，此时export对象中的b触发getter执行，同样把字符串“b”赋值给exorts中的b。
6. 回到b的\__webpack_require__函数内部，执行剩下的4,5步（4. 模块执行完毕后，标注该模块已被加载，5. 返回b模块的exports对象）
7. b结束，回到./src/a.js



**./src/a.js**

5. 在控制台输出a
6. 继续执行语句（export var a = 'a'）,声明一个a，赋值为字符串a，并导出该变量a，此时export对象中的a触发getter执行，同样把字符串“a”赋值给exorts中的b。
7. 回到a的\__webpack_require__函数内部，执行剩下的4,5步（4. 模块执行完毕后，标注该模块已被加载，5. 返回a模块的exports对象）
8. a结束，回到./src/index.js



**./src/index.js**



5. 在控制台输出b
6. 回到index的\__webpack_require__函数内部，执行剩下的4,5步（4. 模块执行完毕后，标注该模块已被加载，5. 返回index模块的exports对象）
7. 结束



















## 常用loader和plugin

### loader

webpack默认情况下只知道如何打包js文件，但是对于一些图片，字体图标的模块，webpack就不知道如何打包了。**而loader就是一个打包的方案，它知道对于某些特定的文件该如何去打包**。

#### style-loader & css-loader

> style-loader：创建一个style标签将css文件嵌入到html中。
>
> css-loader：处理其中的@import和url()。

```javascript
npm i -D style-loader css-loader
```

```javascript
// webpack.config.js
module.exports = {
    // ...省略其他配置
    module:{
      rules:[
        {
          test:/\.css$/,
          use:['style-loader','css-loader'] // 从右向左解析原则
        }
      ]
    }
}

```

#### postcss-loader

为css添加浏览器产商前缀

```javascript
npm i -D postcss-loader autoprefixer
```

方式一：

在项目根目录下创建一个`postcss.config.js`文件，配置如下：

```javascript
module.exports = {
    plugins: [require('autoprefixer')] // 引用该插件即可
}
```

方式二：

```javascript
// webpack.config.js
module.exports = {
    // ...省略其它配置
    module: {
        rules: [{
            test: /\.less$/,
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: [require('autoprefixer')]
                },
            }, 'less-loader'] // 从右向左解析原则
        }]
    }
}
```



#### file-loader & url-loader

`file-loader`就是将文件在进行一些处理后（主要是处理文件名和路径，解析文件url），并将文件移动到输出的目录中

`url-loader`一般与`file-loader`搭配使用，功能与`file-loader`类似，如果文件小于限制的大小，则会返回base64编码，否则使用`file-loader`将文件移动到输出的目录中

```javascript
npm i -D file-loader url-loader
```

```javascript
// webpack.config.js
module.exports = {
    module: {
        rules: [
            // ...
            {
                test: /\.(jpe?g|png|gif|)$/i, // 图片文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: file-loader,
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, // 媒体文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    }
}

```



#### babel-loader & @babel/preset-env & @babel/core

```javascript
npm i babel-loader @babel/preset-env @babel/core
```

`babel-loader`与`babel-core`的对应关系

| babel-loader | babel-core |
| ------------ | ---------- |
| 8.x          | 7.x        |
| 7.x          | 6.x        |

```javascript
// webpack.config.js
module.exports = {
    // ...省略其它配置
    module: {
        rules: [
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            exclude: /node-modules/
        ]
    }
}

```



#### babel-polyfill

`babel-polyfill`并不属于loader。`babel-loader`会将ES6/7/8的语法转换成ES5的语法，但是对于新的api并不会转换，例如`Promise`、`Generator`、`Set`、`Maps`、`Proxy`等，此时，便可以借助`babel-polyfill`来解决。

```javascript
npm i @babel/polyfill
```

配置
有**三种**方式可供使用

1. `import方式使用`

   ```javascript
   import '@babel/polyfill'  // 在入口文件最上方使用import引入
   ```

2. `require`方式使用

   ```javascript
   require('@babel/polyfill')  // 在入口文件最上方使用require引入
   ```

3. `webpack`配置入口文件

   ```javascript
   // webpack.config.js
   module.exports = {
       entry: ['@babel/polyfill', './app/.js']
   }
   ```

   







### plugin

>  可以在webpack运行到某个时刻的时候,帮你做一些事情。

#### htmlWebpackPlugin

生成一个HTML文件，然后将打包好的js文件自动引入到这个html文件中。

1. 首先第一步下载HtmlWebpackPlugin

   ```javascript
   cnpm install --save-dev html-webpack-plugin
   ```

2. 然后在webpack.config.js中配置如下信息👇

   ```javascript
   var htmlWebpackPlugin = require('html-webpack-plugin');
   var path = require('path');
   module.exports = {
     plugins: [new HtmlWebpackPlugin({
               template: 'src/index.html'  // 以src/目录下的index.html为模板打包
           }
       )],
   };
   ```

   然后运行npm run dev，就会发现在dist目录下，自动帮你生成一个HTML模块，并且引入bundle.js文件。

   `template: 'src/index.html'` 这个配置信息的作用就是告诉你，以具体哪个index.html为模板去打包

#### clearWebpackPlugin

这个插件的作用就是会帮你删除某个目录的文件,是在打包前删除所有上一次打包好的文件。

```javascript
cnpm i clean-webpack-plugin -D
```

```javascript
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// plugins新增加这一项，webpack4版本不需要配置路径
plugins: [ new CleanWebpackPlugin()]

```

webpack4版本是不需要去配置路径的，自动帮我们清除打包好的dist目录下文件。