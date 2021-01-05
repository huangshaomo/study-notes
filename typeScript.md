# typeScript

TypeScript与JavaScript有着不寻常的关系。TypeScript提供JavaScript的所有功能，并在这些功能的基础上附加一层：TypeScript的类型检查工具。

TypeScript的主要优点在于，它可以突出显示代码中的意外行为，从而减少错误的机会。

总结：ts是js的超集，在js的基础上覆盖上了一层，类型检查系统，能够规范JS代码，减少错误的机会。

## 1. 运行TypeScript

方式一：

```javascript
npm install typeScript -g
```

```javascript
tsc xxx.ts`//使用tsc编译器解析这段代码，会生成一份.js后缀文件
```

方式二：

```javascript
npm install ts-node -g
```

```javascript
ts-node xxx.ts	//直接使用node编译ts文件出结果
```



## 静态类型

### 基础静态类型

基础静态类型非常简单，只要在声明变量的后边加一个`:`号，然后加上对应的类型。比如下面的代码，就是声明了一个数字类型的变量，叫做`count`。

```javascript
const count : number = 918;
const myName ：string = 'jspang'
```

常用基础静态类型有

### 对象类型