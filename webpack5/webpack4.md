---



---

# webpack

webpack 开箱即用，可以无需使用任何配置文件。然而，webpack 会假定项目的入口起点为 `src/index.js`，然后会在 `dist/main.js` 输出结果

通常你的项目还需要继续扩展此能力，为此你可以在项目根目录下创建一个 `webpack.config.js` 文件，然后 webpack 会自动使用它。

`webpack.config.js`是运行在Node服务器环境上的，而Node使用的是ComonsJs规范，因此webpack的配置文件只能使用CommonJs规范，至于为什么webpack是运行在node服务环境中，是因为webpack在构建过程中需要读取文件，分析出入口文件的所有依赖关系（import，require...）因此它是运行在node环境中。

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



但此时modules是作为一个全局变量来着，污染了全局变量，因此我们可以把modules的值直接当做参数传进去，这样就不会污染全局变量了,如下

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



其实上面就已经可以实现加载模块了，但如果我们需要对加载过的模块进行缓存呢？以便下一次加载同一个模块时，我们可以直接返回该模块导出(exports)的结果,我们需要声明一个对象，缓存已经加载过的模块

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

> 技术边界：解决了转换后代码难以调试的问题。直接将转换后代码与开发源码进行映射。所以就叫source map

前端发展到现阶段，很多时候都不会直接运行源码，可能需要对源代码进行合并，压缩，转换等操作，真正运行的是转换后的代码

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-08-16-38-26.png" alt="2020-01-08-16-38-26" style="zoom:50%;" />



这就给调试带来了困难，因为当运行发生错误的时候，我们更加希望看到源代码中的所谓，而不是转换后代码的错误。

为了解决这一问题，chrome浏览器率先支持了source map，其他浏览器纷纷效仿，目前，几乎所有新版浏览器都支持了source map

source map实际上是一个配置，配置中不仅记录了所有源码内容，还记录了和转换后的代码的对应关系

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-08-16-58-06.png" alt="2020-01-08-16-58-06" style="zoom: 50%;" />

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-08-17-01-13.png" alt="2020-01-08-17-01-13" style="zoom:50%;" />





**最佳实践**

1. source map 应在开发环境中使用，作为一种调试手段
2. source map 不应该在生产环境中使用，source map的文件一般较大，不仅会导致额外额网络传输，还容易暴露原始代码，即便要在生产环境中使用source map，用于调试真实的代码运行问题，也要做出一些处理规避网络传输和代码暴露的问题。



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

chunk是webpack在内部构建过程中的一个概念，译为`块`，它表示通过某个如果找到的所有依赖的统称。

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

在第二部完成后，chunk中会产生一个模块列表，列表中包含了**模块id**和**模块转换后的代码**

接下来，webpack会根据配置为Chunk生产一个资源列表，即`chunk assets`，资源列表可以理解为是生成到最终文件的文件名和文件内容

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-12-43-52.png" alt="2020-01-09-12-39-16" style="zoom:50%;" />

> chunk hash是根据所有chunk assets的内容生成的一个hash字符串
>
> hash：一阵算法，具体有很多分类，特点是将一个任意长度的字符串转换为一个固定长度的字符串，而且可以保证原始内容不变，产生的hash字符串就不变。

简图

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-12-47-43.png" alt="2020-01-09-12-43-52" style="zoom:50%;" />



4. **合并chunk assest**

将多个chunk的assets合并到一起，并产生一个总的hash

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-12-39-16.png" alt="2020-01-09-12-47-43" style="zoom:50%;" />

#### 输出

此步骤非常简单，webpack将利用node中的fs模块（文件处理模块），根据编译产生的总的assets，生成相应的文件

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-12-54-34.png" alt="2020-01-09-12-54-34" style="zoom:50%;" />

[]()

**总过程**

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/2020-01-09-15-51-07.png" alt="2020-01-09-15-51-07" style="zoom:50%;" />

初始化：合并CLI参数，配置文件，默认配置成最终配置文件

编译：首先读取入口模块文件，检查该模块文件id是否已记录到依赖中（dependencies），如果已记录说明该模块已被加载过，结束。如果没有记录，则进行第三步，读取文件内容进行语法分析，把文件内容变成AST抽象语法树，在AST中找到

















涉及术语：

1. module：模块，分割的代码单元，webpack中的模块可以是任何内容的文件，不仅限于JS
2. chunk：webpack内部构建模块的块，一个chunk中包含多个模块，这些模块是从入口模块通过依赖分析得来的
3. bundle：chunk构建好模块后会产生chunk的资源清单，清单中的每一项就是一个bundle，可以认为bundle就是最终生成的文件
4. hash：最终的资源清单所有内容联合生成的hash值
5. chunkhash：chunk生成的资源清单内容联合生成的hash值
6. chunkname：chunk的名称，如果没有配置则使用main
7. id：通常值chunk的唯一编号，如果在开发环境下构建，和chunkname相同，如果是生产环境下构建，则使用一个从0开始的数字进行编号。

























































































起步

如果存在`webpack.config.js`文件，使用`webpack`命令会自动使用它，相当于命令`webpack --config webpack.config.js`。我们在这里使用* `--config` *选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用的。*

## 常用扩展





























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