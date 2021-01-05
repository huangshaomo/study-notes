# ES6



## 1. let 和 const命令





## Class

ES6的Class本质上只是一个语法糖，他的绝大部分功能，在ES5构造函数中都可以做到，写成Class的写法只是让对象原型的写法更加清晰，更加接近面向对象编程的语法而已。

### getter 和 setter

与 ES5 一样，在“类”的内部可以使用`get`和`set`关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

```javascript
Class Xiaojiejie{
    constructor(age){}
    get age(){
        return this.age - 10
    }
    set age(newAge){
        this.age = newAge
    }
}
const xiaohon = new Xiaojiejie(28)
xiaohon.age = 25
console.log(xiaohon.age);
```



类的结构

```javascript
//Father类
class Person{
    constructor(){       
    }
    static fun1(){}
    fun2(){}
    fun3(){}
}

//child类
class Child{
    constructor(){
        super()
    }
    static func(){}
    func2(){}
}
```

Class中的constructor（）对应ES5中的构造函数

Class中的Static fun1（）对应ES5中构造函数中的方法

Class中的fun2()对应ES5中的prototype.fun2



### 继承

所谓继承，顾名思义就是继承了父类的所有东西，在原型链上的表现结构就是

prototype与\__proto\__指向同一个对象，区别在于\___proto\__在实例对象中，prototype在函数中。

```javascript
B.__proto__ === A // true   父类（构造函数）的继承
```

![360chrome_OsK66Sq2jQ](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_tU8tMuZvN7.png)

```javascript
B.prototype.__proto__ === A.prototype // true   父类方法的继承
```

![360chrome_tU8tMuZvN7](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_OsK66Sq2jQ.png)

sayHello（）是父类A的原型方法。



从上面可以看出，父类存在于子类的原型对象中，父类的方法存在于子类的原型对象中的\_proto\_中。





#### 子类的继承

子类的继承包括**父类构造函数的属性**，**父类原型上的方法**，**父类的静态方法**

不信，请看：

```javascript

```





#### 子类实例的继承

子类实例的继承包括**父类构造函数的属性**，**父类原型上的方法**，但没有父类的静态方法。

不信，请看：

```javascript

```



#### super的继承

super在子类的静态方法中，指向父类。

super在子类的原型对象中，指向父类的原型对象







### 疑问解答：

#### 1. 为什么Super要写在子构造器的第一位？

只要使用了继承，即使子类有没有显式定义constructor，也会隐式构建constructor方法，如下，而如果子类定义了constructor，就必须在第一位调用super（）方法，否则报错。

```javascript
class ColorPoint extends Point {
}

// 等同于
class ColorPoint extends Point {
  constructor(...args) {
    super(...args);
  }
}
```

这是因为子类自己的`this`对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用`super`方法，子类就得不到`this`对象。



