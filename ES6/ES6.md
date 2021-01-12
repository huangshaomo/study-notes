# ES6

## let 和 const

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_f3edZ2KYzg.png" alt="chrome_f3edZ2KYzg" style="zoom:50%;" />











## Symbol

> 全新的原始数据类型，是 JavaScript 语言的第七种数据类型
>
> 前六种是：`undefined`、`null`、Boolean、String、Number、Object。

### 概述

Symbol出现的目的主要是为了解决变量名冲突的原因，比如对象，如果使用字符串定义一个新方法，新方法的名字就有可能与现有方法产生冲突，因此为了保证每个属性的名字都是独一无二的，从而从根本上防止属性名的冲突。 ES6 引入了`Symbol`。



ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值，它通过`Symbol`函数生成。

```js
let s = Symbol()
typeof s //"symbol"
```

注意：Symbol函数前不能使用`new`命令，否则会报错，这是因为生成的Symbol是一个原始数据类型的值，不是对象，只有对象才需要new，也就是说，由于Symbol值不是对象，所以也不能添加方法，可以把Symbol看出是一种类似字符串的数据类型



**Symbol描述**

`Symbol`函数可以接受一个字符串作为参数，表示对Symbol实例的描述，这样做主要是为了方便区分。

```js
let s1 = Symbol("s1-xixi");
let s2 = Symbol("S2-xixi");

s1	//Symbol(s1-xixi) 
s2	//Symbol(s2-xixi)

s1.toString();	//"symbol(s1-xixi)"
s2.toString();	//"symbol(s2-xixi)"
```

上面代码中，`s1`和`s2`是两个 Symbol 值。如果不加参数，它们在控制台的输出都是`Symbol()`，不利于区分。有了参数以后，就等于为他们加上了描述，输出的时候就能够分清，到底是哪一个值。



如果Symbol的参数是一个对象，就会调用该对象的`toString`方法，将其转为字符串，然后在生成一个Symbol值

```js
const obj = {}
const sym = Symbol(obj);
sym		//Symbol([Oject Object])
```

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_Wv3PNfulON.png" alt="360chrome_Wv3PNfulON"  />

注意：`Symbol`参数只是对当前Symbol值的描述，因此相同参数的`Symbol`函数的返回值是不相等的

```js
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();
s1 === s2   //false

//有参数的情况
let s1 = Symbol("foo");
let s2 = Symbol("foo");
s1 === s2   //false
```

上面代码中，`s1`和`s2`都是`Symbol`函数的返回值，而且参数相同，但是它们是不相等的。



**Symbol运算与转换**

Symbol值不能与其他类型的值进行运算，会报错

```js
let sym = Symbol("My symbol");
"your symbol is " + sym
//TypeError: Cannot convert a Symbol value to a string(不能将Symbol转为字符串)
`your symbol is ${sym}`
//TypeError: Cannot convert a Symbol value to a string
```

symbol无法隐式的调用toString()方法去转换成字符串。从而导致错误。



但是，Symbol值可以显式转换为字符串后再进行运算就不会报错

```js
let sym = Symbol("My symbol")
sym = sym.toString();
console.log("your symbol is " + sym);//"your symbol is Symbol(My symbol)"
console.log(`your symbol is ${sym}`);//"your symbol is Symbol(My symbol)"
```



另外，Symbol值也可以转为布尔值，但是不能转为数值

```js
let sym = Symbol();
Boolean(sym);	//true
Boolean(!sym);	//false

Number(sym) // TypeError
sym + 2 // TypeError
```



### Symbol.prototype.description

> 直接返回Symbol的描述

通常我们读取Symbol描述时需要将Symbol显式转为字符串，即下面的写法：

```js
const sym = Symbol('foo');

String(sym) // "Symbol(foo)"
sym.toString() // "Symbol(foo)"
```

上面的用法不是很方便。[ES2019](https://github.com/tc39/proposal-Symbol-description) 提供了一个实例属性`description`，直接返回 Symbol 的描述。

```js
const sym = Symbol('foo');
sym.description // "foo"
```



### 作为对象属性名的Symbol

由于每一个Symbol值都是不相等的，这意味着如果用于对象的属性名，就能保证不会出现重名的属性。

**写法**

```js
let sym = Symbol("foo");

// 第一种写法
let a = {};
a[sym] = "hello!";

// 第二种写法
let a = {
    [sym]:"hello!"
}

//第三种写法
let a = {};
Object.defineProperty(a,sym,{value:"hello!"});

//以上写法都得到同样结果
a[mySymbol] //"hello!"
```

**注意**：在对象中如果用Symbol当属性名，Symbol值必须放在方括号中，如果不放在字符串中，就会被认为是字符串。例如

```js
const sym = Symbol();
const a = {};
a.sym = "hello!"    //不加方括号就只是普通字符串
console.log(a[sym]);    //undefined

console.log(a.sym);     //hello!
console.log(a["sym"]);  //hello!
```

![360chrome_qarBXW02Me](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_qarBXW02Me.png)

加了方括号后

![360chrome_CvXUVxrLQk](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_CvXUVxrLQk.png)





**作为属性值的Symbol**

Symbol既然能做属性名，那自然也可以当属性值。



Symbol类型可以用于定义一组常量，常量使用 Symbol 值最大的好处，就是其他任何值都不可能有相同的值了，因此可以保证上面的`switch`语句会按设计的方式工作。

```js
const color_red = Symbol('red');
const color_green = Symbol('green');

function getComplement(color){
    switch(color){
        case color_red:
            return color_green;
        case color_green:
            return  color_red;
        default:
            throw new Error('undefiend color');
    }
}
getComplement(color_red);	//Symbol(green)
```



### 消除魔术字符串

魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。

```js
function getArea(shape,options){
    let area = 0;
    switch(shape){
        case 'Triangle':
            area = .5 * options.width * options.height;
            break;
            //...
    }
    return area;
}
getArea('Triangle',{width:100,height:100});
```

上面的Triangle就是魔术字符串，通用性太差，与swith形成了强耦合，不好。



消除魔术字符串的方法，就是把它写成一个变量

```js
const shapeType = {
    triangle: "Triangle"
}
function getArea(shape, options) {
    let area = 0;
    switch (shape) {
        case shapeType.triangle:
            area = .5 * options.width * options.height;
            break;
            //...
    }
    return area;
}
getArea(shapeType.triangle, { width: 100, height: 100 }); //魔术字符串
```

上面代码中，我们把`Triangle`写成`shapeType`对象的`triangle`属性，这样就消除了强耦合。

如果仔细分析，可以发现`shapeType.triangle`等于哪个值并不重要，只要确保不会跟其他`shapeType`属性的值冲突即可。因此，这里就很适合改用 Symbol 值。

```js
const shapeType = {
    triangle:Symbol()
}
```



### 对象属性名的遍历

Symbol作为对象的属性名，在遍历对象的时候，是不会被 `for... in`、`for...of`遍历到的，也不会被`Object.keys()`、`Obejct.getOwnPropertyNames`、`JSON.stringify()`返回。

```js
const obj = {};
const a =Symbol('a');
obj[a] = "bar";

for(let i in obj){
    console.log(i);     //不执行，连输出都没
}
for(let i of obj){
    console.log(i);     //TypeError: obj is not iterable
}

console.log(Object.getOwnPropertyNames(obj));   //[]
console.log(Object.keys()); //TypeError: Cannot convert undefined or null to object
console.log(JSON.stringify());  //undefined
```



但是这并不意味着它就是私有属性，有一个`Object.getOwnPropertySymbols()`方法，可以获取指定对象的所有Symbol属性名，该方法返回一个数组，成员是当前对象的所有用作属性名的Symbol

```js
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = "hello";
obj[b] = "world";

const Symbol_arr = Object.getOwnPropertySymbols(obj);
Symbol_arr;	// [Symbol(a), Symbol(b)]
```



另一个新的API，`reflect.ownKeys()`方法可以返回所有类型的键名，包括常规键名和Symbol键名。

```js
let obj = {
    [Symbol('a')] : 1,
    b:2,
    c:3
}

console.log(Reflect.ownKeys(obj));  // ["b", "c", Symbol(a)]
```



**私有化方法**

由于以Symbol值为键名，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。

```js
let size = Symbol('size');

class Collection {
  constructor() {
    this[size] = 0;
  }

  add(item) {
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance) {
    return instance[size];
  }
}

let x = new Collection();
Collection.sizeOf(x) // 0

x.add('foo');
Collection.sizeOf(x) // 1

Object.keys(x) // ['0']
Object.getOwnPropertyNames(x) // ['0']
Object.getOwnPropertySymbols(x) // [Symbol(size)]
```

上面代码中，对象`x`的`size`属性是一个 Symbol 值，所以`Object.keys(x)`、`Object.getOwnPropertyNames(x)`都无法获取它。这就造成了一种非私有的内部方法的效果。



### Symbol.for()，Symbol.keyFor()

**Symbol.for()**

有时，我们希望重新使用同一个symbol，`Symbol`可以做到这一点。它接收一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建一个以该字符串为名称的Symbol值，并将其注册到全局

```js
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true
```

上面代码中，`s1`和`s2`都是 Symbol 值，但是它们都是由同样参数的`Symbol.for`方法生成的，所以实际上是同一个值。

`Symbol.for()`与`Symbol()`这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。`Symbol.for()`不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的`key`是否已经存在，如果不存在才会新建一个值。比如，如果你调用`Symbol.for("cat")`30 次，每次都会返回同一个 Symbol 值，但是调用`Symbol("cat")`30 次，会返回 30 个不同的 Symbol 值。

```js
Symbol.for("bar") === Symbol.for("bar")
// true

Symbol.for("bar") === Symbol("bar")
// false
```



**symbol.keyFor**

> 返回一个已登记的Symbol类型值的key。

```js
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```

上面代码中，变量`s2`属于未登记的 Symbol 值，所以返回`undefined`。

注意，`Symbol.for()`为 Symbol 值登记的名字，是全局环境的，不管有没有在全局环境运行。

```js
function foo() {
  return Symbol.for('bar');
}

const x = foo();
const y = Symbol.for('bar');
console.log(x === y); // true
```

上面代码中，`Symbol.for('bar')`是函数内部运行的，但是生成的 Symbol 值是登记在全局环境的。所以，第二次运行`Symbol.for('bar')`可以取到这个 Symbol 值。

`Symbol.for()`的这个全局登记特性，可以用在不同的 iframe 或 service worker 中取到同一个值。

```js
iframe = document.createElement('iframe');
iframe.src = String(window.location);
document.body.appendChild(iframe);

iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')
```

上面代码中，iframe 窗口生成的 Symbol 值，可以在主页面得到。



### 实例：模块的singleton模式

Singleton模式指的是调用一个类，任何时候返回的都是同一个实例。



### 内置的Symbol值

除了定义自己使用的Symbol值以外，ES6还提供了11个内置的Symbol值，指向语言内部使用的方法，ES6提供这些方法主要是为了能让开发者也能够去定制语言的内部逻辑，**这些方法都是定义在对象或实例对象内部的**

```js
1: Symbol.hasInstance 一个在执行 instanceof 时调用的方法，用于检测对象的继承信息
2: Symbol.isConcatSpreadable 一个布尔值，用于表示当传递一个集合作为Array.prototype.concat()的参数是，是否应该将集合内的元素拍平到同一层级
3: Symbol.iterator 在迭代器和生成器那篇文章已经细讲过

4: Symbol.match 一个在调用String.prototype.match()时调用的方法，用于比较字符串
5: Symbol.replace 一个在调用String.prototype.replace()时调用的方法，用于替换字符串的子串
6: Symbol.search 一个在调用String.prototype.search()时调用的方法，用于定位子串在字符串中的位置
7: Symbol.split 一个在调用String.prototype.split()时调用的方法，用于分割字符串

8: Symbol.species 用于创建派生对象的构造函数
9: Symbol.toPrimitive 一个返回对象原始值的方法
10: Symbol.toStringTag 一个在调用Object.prototype.toString()时使用的字符换，用于创建对象的描述
11: Symbol.unscopables 一个定义了一些不可被with语句引用的对象属性名称的对象集合
```

##### Symbol.hasInstance

`instanceof`的作用就是判断构造函数的prototype是否与实例对象的__proto最终所指向的对象是否一致

```js
function instance_of(L,R){
    // l代表操作符左侧的实例对象，r代表操作符右侧的构造函数
    while(L.__proto__ !== null){
        if(L.__proto__ === R.prototype){
            return true
        }
        L = L.__proto__
    }
    return false;
}
```

`Symbol.hasInstance`用于确定对象是否为函数的实例。此方法定义在Function.prototype中，所以所有的函数都默认继承了此方法。当我们在调用例如

```js
obj instanceof Array
```

其实等价于调用：

```js
Array[Symbol.instanceof](obj);
```



重写`Symbol.hasInstance`方法：

```js
class MyClass {
    [Symbol.hasInstance](foo){
        return foo instanceof Array
    }
}

let mc = new MyClass()
console.log([1, 2, 3] instanceof mc);	//true
```

上面代码中，我们就重写了`Symbol.hasInstance`的默认逻辑，`MyClass`是一个类，`new MyClass()`会返回一个对象实例。该实例的`Symbol.hasInstance`方法，会在进行`instanceof`运算时自动调用，判断左侧的[1, 2, 3]是否为`Array`的实例，



下面是另一个例子。

```javascript
class Even {
  static [Symbol.hasInstance](obj) {
    return Number(obj) % 2 === 0;
  }
}

1 instanceof Even // false
2 instanceof Even // true
12345 instanceof Even // false
```

上面的例子都是表明一个意思，使用 instanceof的时候，实际上调用的是`Symbol.hasInstance`方法，我们也可以修改这个`Symbol.hasInstance`方法去实现我们的逻辑。



##### Symbol.isConcatSpreadable

一个布尔值，用于表示当传递一个集合作为`Array.prototype.concat()`的参数时，是否应该将集合内的元素拍平到同一层级中，等于`true`或`undefined`，都有这个效果。

- 数组中默认是拍平到一个层级中
- 类数组默认是不拍平到一个层级中
- 用类实例化的数组默认是拍平到一个层级中

**数组**

```js
let arr1 = ['c','d']
['a','b'].concat(arr1,'e');  //[ 'a', 'b', 'c', 'd', 'e' ]
arr1[Symbol.isConcatSpreadable];   //undefined  等于true或undefined，都有这个效果。

let arr2 = ['c','d']
arr2[Symbol.isConcatSpreadable] = false;
['a','b'].concat(arr2,'e')	// ['a', 'b', ['c','d'], 'e']
```



**类数组**

```js
let obj = {0:'c',1:'d',length:2};
['a','b'].concat(obj,'e')   // ['a', 'b', obj, 'e']

obj[Symbol.isConcatSpreadable] = true
console.log(['a','b'].concat(obj,'e') );    // ['a', 'b', 'c', 'd', 'e']
```



**类**

```js
class A1 extends Array{
    constructor(args){
        super(args);
        this[Symbol.isConcatSpreadable] = true;
    }
}

class A2 extends Array{
    constructor(args){
        super(args);
        this[Symbol.isConcatSpreadable] = false;
    }
}

let a1 = new A1();
a1[0] = 3;
a1[1] = 4;
let a2 = new A2();
a2[0] = 5;
a2[1] = 6;
[1, 2].concat(a1).concat(a2)// [1, 2, 3, 4, [5, 6]]
```

把A1的`Symbol.isConcatSpreadable`注释掉得到的结果也是一样的。



##### Symbol.species

该方法可以改变对象实例指向的构造函数，会在创造实例时调用。

```js
class MyArray extends Array {
    static get[Symbol.species](){
        return Array
    }
}
var a = new MyArray(1,2,3); 

var mapped = a.map((x)=>{	//当读取数组中的属性时，就会触发[Symbol.species]
    return x * x
});
console.log(a);     //MyArray [ 1, 2, 3 ]
console.log(mapped);    //[ 1, 4, 9 ]
console.log(mapped instanceof MyArray); //false
```







##### Symbol.match, Symbol.replace, Symbol.search, Symbol.split

通常我们对一个字符串调用match(), replace(), search(), split()方法，它们的参数，既可以是字符串，也可以是一个正则表达式。但是它们本身内部的逻辑，我们是不能修改的。而Symbol.match, Symbol.replace, Symbol.search, Symbol.split这四个属性，就是开放了这个窗口，让开发者可以自行定义其内部逻辑。



现在，我们可以在使用字符串调用match(), replace(), search(), split()调用这几个方法时，往里边传入带有`Symbol.xxx`方法的对象或实例对象，本质上调用的是`Symbol.xxx`方法。



**Symbol.match**

```js
class myMatch{
    [Symbol.match](string){
        return 'hello world'.indexof(string)
    }
}
'e'.match(new MyMatch)	//1
```



**Symbol.replace**

```js
const MyReplace = {
    [Symbol.replace]: (...s)=>{
        console.log(s);
    }
}
"hello".replace(MyReplace,'world');
```

`Symbol.replace`方法会收到两个参数，第一个参数是`replace`方法正在作用的对象，上面例子是`Hello`，第二个参数是替换后的值，上面例子是`World`。



**Symbol.search**

```js
class MySearch{
    constructor(value){
        this.value = value
    }
    [Symbol.search](string){
        return string.indexOf(this.value)
    }
}
console.log("barfoo".search(new MySearch('foo')));    //3
```



**Symbol.split**

```js
class MySplit{
    constructor(value){
        this.value = value
    }
    [Symbol.split](string){
        var idx = string.indexOf(this.value);
        if(idx === -1){
            return string
        }
        return [
            string.substr(0, idx),
            string.substr(idx + this.value.length)
        ]
    }
}

"foobar".split(new MySplit('foo'))  //["","bar"]
"foobar".split(new MySplit("bar"))  //["foo",""]
"foobar".split(new MySplit("baz"))  //"foobar"
```

上面方法使用`Symbol.split`方法，重新定义了字符串对象的`split`方法的行为，



##### Symbol.iterator

对象的`Symbol.iterator`属性，指向该对象的默认遍历器方法。

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]
```

对象进行`for...of`循环时，会调用`Symbol.iterator`方法，返回该对象的默认遍历器。

```js
class Collection {
  *[Symbol.iterator]() {
    let i = 0;
    while(this[i] !== undefined) {
      yield this[i];
      ++i;
    }
  }
}

let myCollection = new Collection();
myCollection[0] = 1;
myCollection[1] = 2;

for(let value of myCollection) {
  console.log(value);
}
// 1
// 2
```



##### Symbol.toPrimitive

我们知道，对象不属于基本类型。那如果我们对对象进行一些基本类型的操作会怎样呢？这些情况下，需要将对象先转换为基本数据类型，但是转换的规则是什么呢？ES6提供了Symbol.toPrimitive方法给开发者，开发者可以自行定义。Symbol.toPrimitive有一个重要的参数，规范中叫做类型提示（hint）。hint为String类型，有三种可能的值：

```js
Number：该场合需要转成数值
String：该场合需要转成字符串
Default：该场合可以转成数值，也可以转成字符串(当转换场景模棱两可的时候)
```

```js
let obj = {
    [Symbol.toPrimitive](hint){
        switch(hint){
            case "number":
                return 123
            case "string":
                return "str"
            case "default":
                return "default"
            default:
                throw new Error()
        }
    }
}

console.log(2 * obj);
console.log(2 + obj);   //加号既可以当字符串拼接，又可以当成+号进行数学运算，像这种两种情况都满足的就会走defalut路线
console.log(obj == "default")
console.log(String(obj));
```



##### Symbol.toStringTag

这个方法可以定制调用`Object.prototype.toString()`时返回的`[object Object]`或`[object Array]`中`object`后面的那个字符串。

```js
Object.prototype.toString.call([]);// '[object Array]'
```

'Array'这是储存在数组对象的Symbol.toStringTag属性中。



一般我们自己创建的对象，如果调用以上方法，或者对象的toString()方法会得到`"[object Object]"`。我们可以重写对象的Symbol.toStringTag来自定义对象调用toString()方法时得到的值：

```js
class Person{
    constructor(name){
        this.name = name
    }
    // [Symbol.toStringTag] = "Person"	//一样的效果

    //在 Class 内部可以使用get和set关键字， 对某个属性设置存值函数和取值函数， 拦截该属性的存取行为。
    get[Symbol.toStringTag](){      
        return "Person"
    }
}

let mike = new Person('mike')

console.log(Object.prototype.toString.call(mike));  //[object Person]
console.log(mike.toString());   //[object Person]
```



##### Symbol.unscopables

该对象指定了使用`with`关键字时，哪些属性会被`with`环境排除。





## Set 和Map数据结构

### Set

Set是一种新的数据结构，类似数组，但是成员的值都是唯一的，没有重复的值。

Set 本身是一个构造函数，用来生成 Set 数据结构。

```js
const s = new Set();
[1,2,3,4,2,1].forEach((x=>{
    s.add(x)
}))
console.log(s); //Set { 1, 2, 3, 4 }
```

上面代码通过`add`方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值

















#### 基本用法

#### Set实例属性和方法

#### 遍历操作

### weakSet







## Proxy 代理

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

### 结构

Proxy是一个构造函数，接受两个Object参数（Target，Handler）,第一个参数表示代理目标，第二个参数表示架设的拦截器，用来定制拦截行为，可以操作拦截器对外界访问代理目标时进行过滤和改写。该构造函数返回一个被架设了拦截器的代理目标实例。

```javascript
var target = {name:'hsm',age:18,sex:'male;}
var handler = {
	get:function(){}
	set:function(){}
	...
}       
var person = new Proxy(target,handler)
```

Tips：要使得`Proxy`起作用，必须针对`Proxy`实例（上例是`person`对象）进行操作，而不是针对目标对象（target）进行操作。但操作实例对象，结果也会影响到目标对象。







## Proxy 实例的方法

下面是上面这些拦截方法的详细介绍。

### get()

> 该方法接收三个参数，目标对象（target），访问的目标对象的属性名，Proxy实例本身（严格地说，是操作行为所针对的对象）,最后一个参数可选。

`get`方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身，其中最后一个参数可选。

例一：`get`参数

```javascript
var target = {
    name: "张三"
};
var handler = {
    get: function (target, prop, receiver) {
        console.log('参数1：拦截的目标对象target', target);
        console.log('参数2：操作的目标对象属性', prop)
        console.log('参数3：proxy实例本身', receiver);
        return "ok"
    }
};
var person = new Proxy(target, handler);
console.log('getter返回结果：',person.name);
```

![Code_QPKCNP4Nbc](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/Code_QPKCNP4Nbc.png)

上面代码表示，访问实例对象属性name时，会触发getter函数，然后把函数返回结果返回给person.name，注意不是赋值给name，是不会触发set的



例二：`get`拦截读取操作

```javascript
var target = {
    name: "张三"
};
var handler = {
    get: function (target, prop) {
        if(prop in target) return target[prop];
        else throw new ReferenceError("Prop name \"" + prop + "\" does not exist.");
    }
};
var person = new Proxy(target, handler);
person.name	//张三
person.age 	//ReferenceError: Prop name "age" does not exist.
```

上面代码表示，如果访问目标对象不存在的属性，会抛出一个错误。如果没有这个拦截函数，访问不存在的属性，只会返回`undefined`。因为return没有给返回值的话，默认就是返回undefined



例三：`get`方法可以继承。

```javascript
let proto = new Proxy({},{
    get:function(target,prop,receiver){
        console.log("GET"+prop);
        return target[prop]
    }
})
let obj = Object.create(proto)  //创建一个空对象，并把proto实例对象挂载到该对象原型上
obj.foo // "GET foo"

//结构如下
//obj = {}
// obj.__proto = {
//     proto:{name:"张三"}
// }
```

上面代码中，拦截操作定义在`Prototype`对象上面，所以如果读取`obj`对象继承的属性时，拦截会生效。



利用 Proxy，可以将读取属性的操作（`get`），转变为执行某个函数，从而实现属性的链式操作。

```javascript
var pipe = function (value) {
  var funcStack = [];
  var oproxy = new Proxy({} , {
    get : function (pipeObject, fnName) {
      if (fnName === 'get') {
        return funcStack.reduce(function (val, fn) {
          return fn(val);
        },value);
      }
      funcStack.push(window[fnName]);
      return oproxy;
    }
  });

  return oproxy;
}

var double = n => n * 2;
var pow    = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;

pipe(3).double.pow.reverseInt.get; // 63
```

上面代码设置 Proxy 以后，达到了将函数名链式使用的效果。



下面的例子则是利用`get`拦截，实现一个生成各种 DOM 节点的通用函数`dom`。

```javascript
const dom = new Proxy({}, {
  get(target, property) {
    return function(attrs = {}, ...children) {
      const el = document.createElement(property);
      for (let prop of Object.keys(attrs)) {
        el.setAttribute(prop, attrs[prop]);
      }
      for (let child of children) {
        if (typeof child === 'string') {
          child = document.createTextNode(child);
        }
        el.appendChild(child);
      }
      return el;
    }
  }
});

const el = dom.div({},
  'Hello, my name is ',
  dom.a({href: '//example.com'}, 'Mark'),
  '. I like:',
  dom.ul({},
    dom.li({}, 'The web'),
    dom.li({}, 'Food'),
    dom.li({}, '…actually that\'s it')
  )
);

document.body.appendChild(el);
```

下面是一个`get`方法的第三个参数的例子，它总是指向原始的读操作所在的那个对象，一般情况下就是 Proxy 实例。

```javascript
const proxy = new Proxy({}, {
  get: function(target, key, receiver) {
    return receiver;
  }
});
proxy.getReceiver === proxy // true
```

上面代码中，`proxy`对象的`getReceiver`属性是由`proxy`对象提供的，所以`receiver`指向`proxy`对象。

```javascript
const proxy = new Proxy({}, {
  get: function(target, key, receiver) {
    return receiver;
  }
});

const d = Object.create(proxy);
d.a === d // true
```

上面代码中，`d`对象本身没有`a`属性，所以读取`d.a`的时候，会去`d`的原型`proxy`对象找。这时，`receiver`就指向`d`，代表原始的读操作所在的那个对象。

如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。

```javascript
const target = Object.defineProperties({}, {
  foo: {
    value: 123,
    writable: false,
    configurable: false
  },
});

const handler = {
  get(target, propKey) {
    return 'abc';
  }
};

const proxy = new Proxy(target, handler);

proxy.foo
// TypeError: Invariant check failed
```

### set()

> `set`方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。



假定`Person`对象有一个`age`属性，该属性应该是一个不大于 200 的整数，那么可以使用`Proxy`保证`age`的属性值符合要求。

```javascript
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // 对于满足条件的 age 属性以及其他属性，直接保存
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;

person.age // 100
person.age = 'young' // 报错
person.age = 300 // 报错
```

上面代码中，由于设置了存值函数`set`，任何不符合要求的`age`属性赋值，都会抛出一个错误，这是数据验证的一种实现方法。利用`set`方法，还可以数据绑定，即每当对象发生变化时，会自动更新 DOM。

有时，我们会在对象上面设置内部属性，属性名的第一个字符使用下划线开头，表示这些属性不应该被外部使用。结合`get`和`set`方法，就可以做到防止这些内部属性被外部读写。

```javascript
const handler = {
  get (target, key) {
    invariant(key, 'get');
    return target[key];
  },
  set (target, key, value) {
    invariant(key, 'set');
    target[key] = value;
    return true;
  }
};
function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}
const target = {};
const proxy = new Proxy(target, handler);
proxy._prop
// Error: Invalid attempt to get private "_prop" property
proxy._prop = 'c'
// Error: Invalid attempt to set private "_prop" property
```

上面代码中，只要读写的属性名的第一个字符是下划线，一律抛错，从而达到禁止读写内部属性的目的。

下面是`set`方法第四个参数的例子。

```javascript
const handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = receiver;
  }
};
const proxy = new Proxy({}, handler);
proxy.foo = 'bar';
proxy.foo === proxy // true
```

上面代码中，`set`方法的第四个参数`receiver`，指的是原始的操作行为所在的那个对象，一般情况下是`proxy`实例本身，请看下面的例子。

```javascript
const handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = receiver;
  }
};
const proxy = new Proxy({}, handler);
const myObj = {};
Object.setPrototypeOf(myObj, proxy);

myObj.foo = 'bar';
myObj.foo === myObj // true
```

上面代码中，设置`myObj.foo`属性的值时，`myObj`并没有`foo`属性，因此引擎会到`myObj`的原型链去找`foo`属性。`myObj`的原型对象`proxy`是一个 Proxy 实例，设置它的`foo`属性会触发`set`方法。这时，第四个参数`receiver`就指向原始赋值行为所在的对象`myObj`。

注意，如果目标对象自身的某个属性，不可写且不可配置，那么`set`方法将不起作用。

```javascript
const obj = {};
Object.defineProperty(obj, 'foo', {
  value: 'bar',
  writable: false,
});

const handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = 'baz';
  }
};

const proxy = new Proxy(obj, handler);
proxy.foo = 'baz';
proxy.foo // "bar"
```

上面代码中，`obj.foo`属性不可写，Proxy 对这个属性的`set`代理将不会生效。

注意，严格模式下，`set`代理如果没有返回`true`，就会报错。

```javascript
'use strict';
const handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = receiver;
    // 无论有没有下面这一行，都会报错
    return false;
  }
};
const proxy = new Proxy({}, handler);
proxy.foo = 'bar';
// TypeError: 'set' on proxy: trap returned falsish for property 'foo'
```

上面代码中，严格模式下，`set`代理返回`false`或者`undefined`，都会报错。

### apply()

`apply`方法拦截函数的调用、`call`和`apply`操作。

`apply`方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（`this`）和目标对象的参数数组。

```javascript
var handler = {
  apply (target, ctx, args) {
    return Reflect.apply(...arguments);
  }
};
```

下面是一个例子。

```javascript
var target = function () { return 'I am the target'; };
var handler = {
  apply: function () {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);

p()
// "I am the proxy"
```

上面代码中，变量`p`是 Proxy 的实例，当它作为函数调用时（`p()`），就会被`apply`方法拦截，返回一个字符串。

下面是另外一个例子。

```javascript
var twice = {
  apply (target, ctx, args) {
    return Reflect.apply(...arguments) * 2;
  }
};
function sum (left, right) {
  return left + right;
};
var proxy = new Proxy(sum, twice);
proxy(1, 2) // 6
proxy.call(null, 5, 6) // 22
proxy.apply(null, [7, 8]) // 30
```

上面代码中，每当执行`proxy`函数（直接调用或`call`和`apply`调用），就会被`apply`方法拦截。

另外，直接调用`Reflect.apply`方法，也会被拦截。

```javascript
Reflect.apply(proxy, null, [9, 10]) // 38
```

### has()

`has()`方法用来拦截`HasProperty`操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是`in`运算符。

`has()`方法可以接受两个参数，分别是目标对象、需查询的属性名。

下面的例子使用`has()`方法隐藏某些属性，不被`in`运算符发现。

```javascript
var handler = {
  has (target, key) {
    if (key[0] === '_') {
      return false;
    }
    return key in target;
  }
};
var target = { _prop: 'foo', prop: 'foo' };
var proxy = new Proxy(target, handler);
'_prop' in proxy // false
```

上面代码中，如果原对象的属性名的第一个字符是下划线，`proxy.has()`就会返回`false`，从而不会被`in`运算符发现。

如果原对象不可配置或者禁止扩展，这时`has()`拦截会报错。

```javascript
var obj = { a: 10 };
Object.preventExtensions(obj);

var p = new Proxy(obj, {
  has: function(target, prop) {
    return false;
  }
});

'a' in p // TypeError is thrown
```

上面代码中，`obj`对象禁止扩展，结果使用`has`拦截就会报错。也就是说，如果某个属性不可配置（或者目标对象不可扩展），则`has()`方法就不得“隐藏”（即返回`false`）目标对象的该属性。

值得注意的是，`has()`方法拦截的是`HasProperty`操作，而不是`HasOwnProperty`操作，即`has()`方法不判断一个属性是对象自身的属性，还是继承的属性。

另外，虽然`for...in`循环也用到了`in`运算符，但是`has()`拦截对`for...in`循环不生效。

```javascript
let stu1 = {name: '张三', score: 59};
let stu2 = {name: '李四', score: 99};

let handler = {
  has(target, prop) {
    if (prop === 'score' && target[prop] < 60) {
      console.log(`${target.name} 不及格`);
      return false;
    }
    return prop in target;
  }
}

let oproxy1 = new Proxy(stu1, handler);
let oproxy2 = new Proxy(stu2, handler);

'score' in oproxy1
// 张三 不及格
// false

'score' in oproxy2
// true

for (let a in oproxy1) {
  console.log(oproxy1[a]);
}
// 张三
// 59

for (let b in oproxy2) {
  console.log(oproxy2[b]);
}
// 李四
// 99
```

上面代码中，`has()`拦截只对`in`运算符生效，对`for...in`循环不生效，导致不符合要求的属性没有被`for...in`循环所排除。

### construct()

`construct()`方法用于拦截`new`命令，下面是拦截对象的写法。

```javascript
const handler = {
  construct (target, args, newTarget) {
    return new target(...args);
  }
};
```

`construct()`方法可以接受三个参数。

- `target`：目标对象。
- `args`：构造函数的参数数组。
- `newTarget`：创造实例对象时，`new`命令作用的构造函数（下面例子的`p`）。

```javascript
const p = new Proxy(function () {}, {
  construct: function(target, args) {
    console.log('called: ' + args.join(', '));
    return { value: args[0] * 10 };
  }
});

(new p(1)).value
// "called: 1"
// 10
```

`construct()`方法返回的必须是一个对象，否则会报错。

```javascript
const p = new Proxy(function() {}, {
  construct: function(target, argumentsList) {
    return 1;
  }
});

new p() // 报错
// Uncaught TypeError: 'construct' on proxy: trap returned non-object ('1')
```

另外，由于`construct()`拦截的是构造函数，所以它的目标对象必须是函数，否则就会报错。

```javascript
const p = new Proxy({}, {
  construct: function(target, argumentsList) {
    return {};
  }
});

new p() // 报错
// Uncaught TypeError: p is not a constructor
```

上面例子中，拦截的目标对象不是一个函数，而是一个对象（`new Proxy()`的第一个参数），导致报错。

注意，`construct()`方法中的`this`指向的是`handler`，而不是实例对象。

```javascript
const handler = {
  construct: function(target, args) {
    console.log(this === handler);
    return new target(...args);
  }
}

let p = new Proxy(function () {}, handler);
new p() // true
```

### deleteProperty()

`deleteProperty`方法用于拦截`delete`操作，如果这个方法抛出错误或者返回`false`，当前属性就无法被`delete`命令删除。

```javascript
var handler = {
  deleteProperty (target, key) {
    invariant(key, 'delete');
    delete target[key];
    return true;
  }
};
function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}

var target = { _prop: 'foo' };
var proxy = new Proxy(target, handler);
delete proxy._prop
// Error: Invalid attempt to delete private "_prop" property
```

上面代码中，`deleteProperty`方法拦截了`delete`操作符，删除第一个字符为下划线的属性会报错。

注意，目标对象自身的不可配置（configurable）的属性，不能被`deleteProperty`方法删除，否则报错。

### defineProperty()

`defineProperty()`方法拦截了`Object.defineProperty()`操作。

```javascript
var handler = {
  defineProperty (target, key, descriptor) {
    return false;
  }
};
var target = {};
var proxy = new Proxy(target, handler);
proxy.foo = 'bar' // 不会生效
```

上面代码中，`defineProperty()`方法内部没有任何操作，只返回`false`，导致添加新属性总是无效。注意，这里的`false`只是用来提示操作失败，本身并不能阻止添加新属性。

注意，如果目标对象不可扩展（non-extensible），则`defineProperty()`不能增加目标对象上不存在的属性，否则会报错。另外，如果目标对象的某个属性不可写（writable）或不可配置（configurable），则`defineProperty()`方法不得改变这两个设置。

### getOwnPropertyDescriptor()

`getOwnPropertyDescriptor()`方法拦截`Object.getOwnPropertyDescriptor()`，返回一个属性描述对象或者`undefined`。

```javascript
var handler = {
  getOwnPropertyDescriptor (target, key) {
    if (key[0] === '_') {
      return;
    }
    return Object.getOwnPropertyDescriptor(target, key);
  }
};
var target = { _foo: 'bar', baz: 'tar' };
var proxy = new Proxy(target, handler);
Object.getOwnPropertyDescriptor(proxy, 'wat')
// undefined
Object.getOwnPropertyDescriptor(proxy, '_foo')
// undefined
Object.getOwnPropertyDescriptor(proxy, 'baz')
// { value: 'tar', writable: true, enumerable: true, configurable: true }
```

上面代码中，`handler.getOwnPropertyDescriptor()`方法对于第一个字符为下划线的属性名会返回`undefined`。

### getPrototypeOf()

`getPrototypeOf()`方法主要用来拦截获取对象原型。具体来说，拦截下面这些操作。

- `Object.prototype.__proto__`
- `Object.prototype.isPrototypeOf()`
- `Object.getPrototypeOf()`
- `Reflect.getPrototypeOf()`
- `instanceof`

下面是一个例子。

```javascript
var proto = {};
var p = new Proxy({}, {
  getPrototypeOf(target) {
    return proto;
  }
});
Object.getPrototypeOf(p) === proto // true
```

上面代码中，`getPrototypeOf()`方法拦截`Object.getPrototypeOf()`，返回`proto`对象。

注意，`getPrototypeOf()`方法的返回值必须是对象或者`null`，否则报错。另外，如果目标对象不可扩展（non-extensible）， `getPrototypeOf()`方法必须返回目标对象的原型对象。

### isExtensible()

`isExtensible()`方法拦截`Object.isExtensible()`操作。

```javascript
var p = new Proxy({}, {
  isExtensible: function(target) {
    console.log("called");
    return true;
  }
});

Object.isExtensible(p)
// "called"
// true
```

上面代码设置了`isExtensible()`方法，在调用`Object.isExtensible`时会输出`called`。

注意，该方法只能返回布尔值，否则返回值会被自动转为布尔值。

这个方法有一个强限制，它的返回值必须与目标对象的`isExtensible`属性保持一致，否则就会抛出错误。

```javascript
Object.isExtensible(proxy) === Object.isExtensible(target)
```

下面是一个例子。

```javascript
var p = new Proxy({}, {
  isExtensible: function(target) {
    return false;
  }
});

Object.isExtensible(p)
// Uncaught TypeError: 'isExtensible' on proxy: trap result does not reflect extensibility of proxy target (which is 'true')
```

### ownKeys()

`ownKeys()`方法用来拦截对象自身属性的读取操作。具体来说，拦截以下操作。

- `Object.getOwnPropertyNames()`
- `Object.getOwnPropertySymbols()`
- `Object.keys()`
- `for...in`循环

下面是拦截`Object.keys()`的例子。

```javascript
let target = {
  a: 1,
  b: 2,
  c: 3
};

let handler = {
  ownKeys(target) {
    return ['a'];
  }
};

let proxy = new Proxy(target, handler);

Object.keys(proxy)
// [ 'a' ]
```

上面代码拦截了对于`target`对象的`Object.keys()`操作，只返回`a`、`b`、`c`三个属性之中的`a`属性。

下面的例子是拦截第一个字符为下划线的属性名。

```javascript
let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
};

let handler = {
  ownKeys (target) {
    return Reflect.ownKeys(target).filter(key => key[0] !== '_');
  }
};

let proxy = new Proxy(target, handler);
for (let key of Object.keys(proxy)) {
  console.log(target[key]);
}
// "baz"
```

注意，使用`Object.keys()`方法时，有三类属性会被`ownKeys()`方法自动过滤，不会返回。

- 目标对象上不存在的属性
- 属性名为 Symbol 值
- 不可遍历（`enumerable`）的属性

```javascript
let target = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.for('secret')]: '4',
};

Object.defineProperty(target, 'key', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: 'static'
});

let handler = {
  ownKeys(target) {
    return ['a', 'd', Symbol.for('secret'), 'key'];
  }
};

let proxy = new Proxy(target, handler);

Object.keys(proxy)
// ['a']
```

上面代码中，`ownKeys()`方法之中，显式返回不存在的属性（`d`）、Symbol 值（`Symbol.for('secret')`）、不可遍历的属性（`key`），结果都被自动过滤掉。

`ownKeys()`方法还可以拦截`Object.getOwnPropertyNames()`。

```javascript
var p = new Proxy({}, {
  ownKeys: function(target) {
    return ['a', 'b', 'c'];
  }
});

Object.getOwnPropertyNames(p)
// [ 'a', 'b', 'c' ]
```

`for...in`循环也受到`ownKeys()`方法的拦截。

```javascript
const obj = { hello: 'world' };
const proxy = new Proxy(obj, {
  ownKeys: function () {
    return ['a', 'b'];
  }
});

for (let key in proxy) {
  console.log(key); // 没有任何输出
}
```

上面代码中，`ownkeys()`指定只返回`a`和`b`属性，由于`obj`没有这两个属性，因此`for...in`循环不会有任何输出。

`ownKeys()`方法返回的数组成员，只能是字符串或 Symbol 值。如果有其他类型的值，或者返回的根本不是数组，就会报错。

```javascript
var obj = {};

var p = new Proxy(obj, {
  ownKeys: function(target) {
    return [123, true, undefined, null, {}, []];
  }
});

Object.getOwnPropertyNames(p)
// Uncaught TypeError: 123 is not a valid property name
```

上面代码中，`ownKeys()`方法虽然返回一个数组，但是每一个数组成员都不是字符串或 Symbol 值，因此就报错了。

如果目标对象自身包含不可配置的属性，则该属性必须被`ownKeys()`方法返回，否则报错。

```javascript
var obj = {};
Object.defineProperty(obj, 'a', {
  configurable: false,
  enumerable: true,
  value: 10 }
);

var p = new Proxy(obj, {
  ownKeys: function(target) {
    return ['b'];
  }
});

Object.getOwnPropertyNames(p)
// Uncaught TypeError: 'ownKeys' on proxy: trap result did not include 'a'
```

上面代码中，`obj`对象的`a`属性是不可配置的，这时`ownKeys()`方法返回的数组之中，必须包含`a`，否则会报错。

另外，如果目标对象是不可扩展的（non-extensible），这时`ownKeys()`方法返回的数组之中，必须包含原对象的所有属性，且不能包含多余的属性，否则报错。

```javascript
var obj = {
  a: 1
};

Object.preventExtensions(obj);

var p = new Proxy(obj, {
  ownKeys: function(target) {
    return ['a', 'b'];
  }
});

Object.getOwnPropertyNames(p)
// Uncaught TypeError: 'ownKeys' on proxy: trap returned extra keys but proxy target is non-extensible
```

上面代码中，`obj`对象是不可扩展的，这时`ownKeys()`方法返回的数组之中，包含了`obj`对象的多余属性`b`，所以导致了报错。

### preventExtensions()

`preventExtensions()`方法拦截`Object.preventExtensions()`。该方法必须返回一个布尔值，否则会被自动转为布尔值。

这个方法有一个限制，只有目标对象不可扩展时（即`Object.isExtensible(proxy)`为`false`），`proxy.preventExtensions`才能返回`true`，否则会报错。

```javascript
var proxy = new Proxy({}, {
  preventExtensions: function(target) {
    return true;
  }
});

Object.preventExtensions(proxy)
// Uncaught TypeError: 'preventExtensions' on proxy: trap returned truish but the proxy target is extensible
```

上面代码中，`proxy.preventExtensions()`方法返回`true`，但这时`Object.isExtensible(proxy)`会返回`true`，因此报错。

为了防止出现这个问题，通常要在`proxy.preventExtensions()`方法里面，调用一次`Object.preventExtensions()`。

```javascript
var proxy = new Proxy({}, {
  preventExtensions: function(target) {
    console.log('called');
    Object.preventExtensions(target);
    return true;
  }
});

Object.preventExtensions(proxy)
// "called"
// Proxy {}
```

### setPrototypeOf()

`setPrototypeOf()`方法主要用来拦截`Object.setPrototypeOf()`方法。

下面是一个例子。

```javascript
var handler = {
  setPrototypeOf (target, proto) {
    throw new Error('Changing the prototype is forbidden');
  }
};
var proto = {};
var target = function () {};
var proxy = new Proxy(target, handler);
Object.setPrototypeOf(proxy, proto);
// Error: Changing the prototype is forbidden
```

上面代码中，只要修改`target`的原型对象，就会报错。

注意，该方法只能返回布尔值，否则会被自动转为布尔值。另外，如果目标对象不可扩展（non-extensible），`setPrototypeOf()`方法不得改变目标对象的原型。

## Proxy.revocable()

`Proxy.revocable()`方法返回一个可取消的 Proxy 实例。

```javascript
let target = {};
let handler = {};

let {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 123;
proxy.foo // 123

revoke();
proxy.foo // TypeError: Revoked
```

`Proxy.revocable()`方法返回一个对象，该对象的`proxy`属性是`Proxy`实例，`revoke`属性是一个函数，可以取消`Proxy`实例。上面代码中，当执行`revoke`函数之后，再访问`Proxy`实例，就会抛出一个错误。

`Proxy.revocable()`的一个使用场景是，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问。

## this 问题

虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的`this`关键字会指向 Proxy 代理。

```javascript
const target = {
  m: function () {
    console.log(this === proxy);
  }
};
const handler = {};

const proxy = new Proxy(target, handler);

target.m() // false
proxy.m()  // true
```

上面代码中，一旦`proxy`代理`target`，`target.m()`内部的`this`就是指向`proxy`，而不是`target`。

下面是一个例子，由于`this`指向的变化，导致 Proxy 无法代理目标对象。

```javascript
const _name = new WeakMap();

class Person {
  constructor(name) {
    _name.set(this, name);
  }
  get name() {
    return _name.get(this);
  }
}

const jane = new Person('Jane');
jane.name // 'Jane'

const proxy = new Proxy(jane, {});
proxy.name // undefined
```

上面代码中，目标对象`jane`的`name`属性，实际保存在外部`WeakMap`对象`_name`上面，通过`this`键区分。由于通过`proxy.name`访问时，`this`指向`proxy`，导致无法取到值，所以返回`undefined`。

此外，有些原生对象的内部属性，只有通过正确的`this`才能拿到，所以 Proxy 也无法代理这些原生对象的属性。

```javascript
const target = new Date();
const handler = {};
const proxy = new Proxy(target, handler);

proxy.getDate();
// TypeError: this is not a Date object.
```

上面代码中，`getDate()`方法只能在`Date`对象实例上面拿到，如果`this`不是`Date`对象实例就会报错。这时，`this`绑定原始对象，就可以解决这个问题。

```javascript
const target = new Date('2015-01-01');
const handler = {
  get(target, prop) {
    if (prop === 'getDate') {
      return target.getDate.bind(target);
    }
    return Reflect.get(target, prop);
  }
};
const proxy = new Proxy(target, handler);

proxy.getDate() // 1
```

另外，Proxy 拦截函数内部的`this`，指向的是`handler`对象。

```javascript
const handler = {
  get: function (target, key, receiver) {
    console.log(this === handler);
    return 'Hello, ' + key;
  },
  set: function (target, key, value) {
    console.log(this === handler);
    target[key] = value;
    return true;
  }
};

const proxy = new Proxy({}, handler);

proxy.foo
// true
// Hello, foo

proxy.foo = 1
// true
```

上面例子中，`get()`和`set()`拦截函数内部的`this`，指向的都是`handler`对象。

## 实例：Web 服务的客户端

Proxy 对象可以拦截目标对象的任意属性，这使得它很合适用来写 Web 服务的客户端。

```javascript
const service = createWebService('http://example.com/data');

service.employees().then(json => {
  const employees = JSON.parse(json);
  // ···
});
```

上面代码新建了一个 Web 服务的接口，这个接口返回各种数据。Proxy 可以拦截这个对象的任意属性，所以不用为每一种数据写一个适配方法，只要写一个 Proxy 拦截就可以了。

```javascript
function createWebService(baseUrl) {
  return new Proxy({}, {
    get(target, propKey, receiver) {
      return () => httpGet(baseUrl + '/' + propKey);
    }
  });
}
```

同理，Proxy 也可以用来实现数据库的 ORM 层。