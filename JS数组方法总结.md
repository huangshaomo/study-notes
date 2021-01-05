# JS数组方法总结

![数组方法大总结](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230928.jpg)

## ES5

### 改变原数组

#### push(val)

将val添加到数组的最好，返回被修改的数组长度

```javascript
let arr = [1,2,3,4]
let res = arr.push(1,2)
console.log(res,arr)	//6   [1,2,3,4,1,2]
```

**模拟实现**

往数组长度的位置添加元素

```javascript
Array.prototype.myPush = function(){
    for(let i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i]
    }
    return this.length;
}
```



#### pop

不接收参数，删除数组中最后一个元素，返回被删除元素

```javascript
let arr = [1,2,3,4]
let res = arr.pop()	//一次操作只能删除一个
console.log(res,arr)	// 4,[1,2,3]
```

**模拟实现**

使用length减少数组长度即可

```javascript
Array.prototype.myPop = function(){
    if(this.length == 0) return;
    let last = this[this.length-1];
    this.length--;
    return last;
}
```



#### unshift(val)

添加val到数组开头，返回被修改的数组长度。

```javascript
let arr = [1,2,3,4]
let res = arr.unshift(1,2)	//批量添加
console.log(res,arr)	// 6,[1,2,1,2,3,4]
```

**模拟实现**

把arguments与数组的数据都放到一个新数组里面，然后再覆写到原数组

```javascript
Array.prototype.myUnshift = function(){
    let newArr = [...arguments,...this];
    let len = newArr.length
    for(let i = 0; i < len; i++){
        this[i] = newArr[i]
    }
    return this.length;
}
```



#### shift

 删除数组的第一个元素,返回被删除元素

```javascript
let arr = [1,2,3,4]
let res = arr.shift()	//一次操作只能删除一个
console.log(res,arr)	// 1，[2，3，4]
```

**模拟实现**

使用值覆盖的原理

```javascript
Array.prototype.myShift = function(){
    let first = this[0];
    for(let i = 1; i < this.length; i++){
        this[i-1] = this[i]
    }
    this.length? this.length-- : 'undefined'
    return first;
}
```



#### reverse

反转数组，返回反转后的数组

```javascript
let arr = [1,2,3,4]
let res = arr.reverse();
console.log(res,arr)	//[4,3,2,1]   [1,2,3,4]
---无法进行深反转---
arr = [1,[2,3],[4,5]];
res = arr.reverse();
console.log(res,arr);        //[[4,5],[2,3],1] ,  [1,[2,3],[4,5]];
```

**模拟实现**

首尾互换。

```javascript
Array.prototype.myReverse = function(){
    var count = Math.floor(this.length/2);
    for(let i = 0; i< this.length; i++){
        if(i >= count) return this;
        let temp = this[i];
        this[i] = this[this.length-1-i];
        this[this.length -1- i] = temp
    }
}
```



#### splice(index，count，val) 

从索引为index处删除count个元素，插入value,返回被删除的数据组成的新数组

```javascript
let arr = [1,2,3,4];
let res = arr.splice(1,2,5)
console.log(res,arr)	//[2,3]  [1,5,4]
---其他操作,负数(= length+负数),count不存在默认为数组的长度---
arr = [1,2,3,4];
res = arr.splice(-2);
console.log(res,arr);          //[3,4]	[1,2]
---插入操作---
arr = [1,2,3,4];
res = arr.splice(-2,1,'A','B')
console.log(res,arr); [3]	[1,2,'A','B',4]
```

**模拟实现**

```javascript
Array.prototype.mySplice = function(index,count,...addElm){
    let len = this.length;
    let addCount = addElm.length;
    //1. 处理参数边缘化情况
    index = computedIndex(index,len);
    count = computedCount(index,count,len)
    console.log(index,count)
    // 2. 获取删除元素，暂时放入一个新数组中
    let delArr = new Array(count).fill(null);//创建长度为count，内容为null的新数组
    sliceDelElm.call(this,index,count,delArr);
    console.log(delArr)
    console.log(addElm)
    //3. 移动原数组
    removeArr.call(this,count,addCount);
    //4. 添加新元素到原数组中
    for(let i = 0; i < addCount; i++){
        this[index+i] = addElm[i]
    }
    this.length = this.length - count+ addCount;
    return delArr;
    // 初始化下标小于0或者大于数组长度
    function computedIndex(index,len){
        //index小于0的情况
        if(index < 0) return index + len > 0 ? index + len : 0;
        //index超出数组长度的边界情况
        return index - len > 0 ? len : index;
    }
    // 没写第二个参数的或删除数量小于0或删除数量比能删的数量多的情况
    function computedCount(index,count,len){
        // 没写count的情况
        if(typeof count == 'undefined') return len - index
        // count小于0,不操作
        if(count < 0) return 0;
        //count > 要删除的总数
        if(count > len - index) return len - index;
        return count;
    }

    //将需删除元素放入delArr中
    function sliceDelElm(index,count,delArr){
        for(let i = 0; i <count; i++ ){
            delArr[i] = this[index+i];
        }
    }

    //删除原数组，三种情况，删除数量大于/小于/等于/添加数量
    function removeArr(count,addCount){
        //1. 删除数量 < 添加数量；说明数组长度变长了
        if(count < addCount){ 
            //向右移动的位数：addCount - count
            //向右移动的元素个数（循环次数）：length - (index+count)
            for(let i = this.length-1; i >= index + count; i--){
                let fromIndex = i; 
                let toIndex = i + addCount - count; 
                this[toIndex] = this[fromIndex];
            }
        }
        //2. 删除数量 > 添加数量；说明数组长度变短了
        else if(count > addCount){
            //向前移动位数:count - addCount
            //向前移动的元素个数(循环次数)：length - (index+count)
            for (let i = index + count; i < this.length; i++) {
                let fromIndex = i;//3
                let toIndex = i - count + addCount;//2
                this[toIndex] = this[fromIndex];
            }
            //删除冗余元素,删除的次数取决于 count - addCount
            for(let i = this.length - 1; i >= this.length - count + addCount; i-- ){
                delete this[i]
            }
        }
        //3. 删除数量等于增加数量 ，数组长度不变
        else{
            return;
        }
    }
}
```



#### sort (fn)

该方法默认按照数组元素ASCII 字符顺序排列，返回对原数组的引用。请注意，数组在原数组上进行排序，不生成副本。

```javascript
let arr = [1,5,4,2,3,6];
let res = arr.sort();
console.log(res,arr)//(6) [1, 2, 3, 4, 5, 6]  (6) [1, 2, 3, 4, 5, 6]
```



**模拟实现**

```javascript
Array.prototype.mySort = function(fn){
	
}
```



### 不改变原数组

#### slice(index,len)

拷贝数组元素,拷贝区间为前闭后开[start,end)

```javascript
let arr = [1,2,3,4];
let res = arr.slice(1,3);
console.log(res,arr)	//[2,3]		[1,2,3,4]
//不允许反向截取,允许截取的位置为负数(= length+负数)，利用slice可以实现数组浅拷贝 
console.log(arr.slice(1));      //[2,4,7]
console.log(arr.slice(-1));     //[7]       //4+(-1)=3,start为3
console.log(arr.slice(-1,1))    //[]        //4+(-1)=3,start为3，end为1，不允许反向
console.log(arr.slice(1,-1))    //[2,4]    
console.log(arr.slice(-1,-2));  //[]        //start为3，end为2,不允许反向截取
console.log(arr.slice(-2,-1));  //[4]       //start为2，end为3
```

**模拟实现**

```javascript
Array.prototype.mySlice = function(inStart,exEnd){
    if(inStart == 'undefined' || exEnd == 'undefined') return;
    let len = this.length;
    // 处理参数边缘化情况
    inStart = computedInStart(inStart,len);
    exEnd = computedExEnd(inStart,exEnd,len);
    let newArr = [];
    for(let i = inStart; i < exEnd; i++){
        newArr[newArr.length] = this[i]
    }
    return newArr;

    // 小于0情况，大于数组长度情况
    function computedInStart(inStart,len){
        if(inStart < 0){
            return inStart + len > 0 ? inStart + len : 0;
        }
        return inStart > len ? len : inStart;
    }

    //处理无参情况，小于0情况，大于数组长度情况
    function computedExEnd(inStart,exEnd,len){
        //未赋值，则为数组长度
        if(typeof exEnd == 'undefined') return len;
        //值小于0，
        if(exEnd < 0) return exEnd + len > 0 ? exEnd + len : 0; 
        //值大于剩余数组长度
        if(exEnd > len - inStart) return exEnd%len;
        return exEnd;
    }
}
```





#### concat(arr)

连接合并多个数组，返回新数组

```javascript
let arr = [1,2,3,4];
let arr1 = [5,6,7,8];
let res = arr.concat(arr1);
console.log(res,arr)	//[1,2,3,4,5,6,7,8]	[1,2,3,4]
---支持同时合并多个数组---
let arr2 = [9,10];
let res = arr.result(arr1,arr2);
console.log(res,arr);	//[1,2,3,4,5,6,7,8,9,10] [1,2,3,4]
--- concat不支持深度合并----
arr.concat([5,6],[[7,8],4])	// [1, 2, 3, 4, 5, 6, Array(2), 4]
```

**模拟实现** 

```javascript
Array.prototype.myConcat = function(){
    let result = JSON.parse(JSON.stringify(this)); //拷贝一份数组
    for(let i = 0; i < arguments.length; i++){
        let argu = arguments[i];
        if(Object.prototype.toString.call(argu) === '[object Array]'){
            for(let j = 0; j < argu.length; j++){
                result.push(argu[j])
            }
        }else{
            result.push(argu);
        } 
    }
    return result
}
```

#### join(val)

将数组用value连接为字符串,返回连接的字符串

```javascript
let arr = [1,2,3,4];
let res = arr.myJoin('.');
console.log(res,arr)	//1.2.3.4  [1,2,3,4]
```

**模拟实现**

```javascript
Array.prototype.join = function(char){
    let result = this[0] || '';
    let length = this.length;
    for(let i = 1; i < length; i++){
        result += char + this[i];
    }
    return result;
}
```



#### split()



### 数组迭代方法(不改变原数组)

先声明两个数据，后面的操作都以这两个数据为基础

```javascript
let arr = [
    {
        name: '张三丰',
        age: '18',
        sex: 'male',

    },
    {
        name: '张三',
        age: '34',
        sex: 'male'
    },
    {
        name: '爱丽丝',
        age: '16',
        sex: 'female'
    }
]
let obj = {name:'HSM'}
```

#### forEach

该方法接收两个参数，第一个参数是一个函数，然后反复的调用该函数，调用的次数取决了数组的长度，并且会给调用的函数传递三个参数，ele，index，self(数组本身)。第二个参数是一个对象，表示将第一个参数（函数）的this指向指向该obj，否则就是默认指向window

```javascript
function deal(item,index,self){
    console.log(item,index,self,this)
}
arr.myForEach(deal,obj)
```

![image-20200905082810930](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230929.png)

**模拟实现**

```javascript
Array.prototype.myForEach = function(func){
    let len = this.length;
    let _this = arguments[1] || window;
    for(let i = 0; i < len; i++){
        func.apply(_this,[this[i],i,this])
    }
}
```



下面所有的方法都是基于forEach方法进行二次改进的



#### filter

过滤

filter方法基于forEach。

二次改进的地方在于调用该方法最终会返回一个新数组，return true的函数内容（item）会被放入到新数组中，起到过滤的作用。

```javascript
function filterDeal(item,index,self){
    console.log(this)
    if(item.sex =='male') return true
}
var newArr = arr.filter(filterDeal,obj);
console.log(newArr)
```

![image-20200904225248429](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230930.png)

**模拟实现**

```javascript
Array.prototype.myFilter = function(func,obj){
    let _arr = [];	//add
    let len = this.length;
    let _this = obj || window
    for(let i = 0; i < len; i++){
       func.apply(_this,[this[i],i,this]) && _arr.push(this[i])//add
    }
    return _arr;	//add
}
```



#### map

映射。

返回一个新数组，数组中的元素为原始数组元素调用函数处理后返回 的值。

当数组中元素是值类型，map不会改变原数组；当是引用类型，则可以改变原数组。因为基本类型返回的是值到新数组中，引用类型改变了内部的值

例子：引用类型值会被修改

```javascript
function MapDeal(item,index,self){
    console.log(this)
    item.age = +item.age + 10;
    return item
}
var newArr = arr.map(MapDeal,obj);
console.log(newArr)
console.log(arr)
```

![image-20200531160504023](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230931.png)

基本类型原数组不会被修改

```javascript
var arr2 = [1,2,3]
var newArr = arr2.map(function(item,index,self){
    return item*2
})
console.log(newArr); //[2,4,6]
console.log(arr2);		//[1,2,3]	
```

![image-20200905085844091](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230932.png)

  

也可以单独抽离出需要返回的内容

```javascript
function MapDeal3(item,index,self){
    console.log(this)
    return item.age
}
var newArr = arr.map(MapDeal3,obj);
console.log('newArr:',newArr)
console.log('arr:',arr)
```

![image-20200905085708782](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230933.png)

**模拟实现**

```javascript
Array.prototype.myMap = function(func,obj){
    let arr = [];
    let len = this.length;
    let _this = arguments[i] || window;
    for(let i = 0; i < len; i++){
        arr.push(func.apply(_this,[this[i],i,this]))	//新增
    }
    return arr;
}
```



#### some

可以理解为promise中的race，该函数只返回一个Boolean值

判断数组中的元素是否都符合条件，有一个符合条件就返回true，全不符合条件才返回false

```javascript
arr.some(function(item,index,self){
    console.log(this)
    if(item.age > 20){
        return true
    }
    return false;
})
```

![image-20200531165035573](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230934.png)

**模拟实现**

```javascript
Array.prototype.mySome = function (func, obj) {
    let flag = false;
    let len = this.length;
    let _this = arguments[1] || window;
    for (let i = 0; i < len; i++) {
        if (func.apply(_this, [this[i], i, this]) == true) {
            flag = true;
            break;
        }
    }
    return flag
}
```



#### every

可以理解为Promise中的all ，该函数只返回一个Boolean值。

判断数组中的元素是否都符合条件，全符合返回true，有一个不符合就返回false

```javascript
arr.every(function(item,index,self){
    console.log(this)
    if(item.age > 20){
        return true
    }
    return false;
})
```

![image-20200531164248554](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230935.png)

**模拟实现**

```javascript
Array.prototype.myEvery = function (func, obj) {
    let flag = true;
    let len = this.length;
    let _this = arguments[1] || window;
    for (let i = 0; i < len; i++) {
        if (func.apply(_this, [this[i], i, this]) == false) {
            flag = false;
            break;
        }
    }
    return flag
}
```



#### reduce

从左向右进行遍历，这个方法有点像接力

原始的该方法只接收两个参数，一个是函数，一个是初始值，该函数也接收4个参数，prevValue，item,index，self，其中的prevValue默认就是initValue的值，函数每一次return的值，都会赋予prevValue，如果函数没有return ,就默认undefined，最后一次的return 会返回给外部函数接收

```javascript
function reduceDeal(prev,item,index,self){
    console.log(prev,item.index,self)
}
arr.reduce(reduceDeal,3)
```

案例：将cookie字符串形式转化成对象形式;

```javascript
var str = "PSTM=1547202501;BIDUPSID=51A74B310E1C99BD28A9FA40AB749FD6;MSA_WH=375_667;BAIDUID=0D8F8152E381149:FG=1;BD_UPN=12314753;H_WISE_SIDS=140797_142277_110085;BDORZ=B490B5EBF6F3CD402E515D22BCDA1598;BD_HOME=1;H_PS_PSSID=31782_31464_31322_30824;delPer=0;BD_CK_SAM=1;PSINO=7;H_PS_645EC=bHv5XGOaNHro5ko"
function parseCookidStr(str){
    var obj1 = {};
    var cookieArr = str.split(/[:;]/);
    return cookieArr.reduce(function(prev,cur,index,self){
        var newArr = cur.split('=')
        prev[newArr[0]] = newArr[1];
        return prev
    },obj1)
}
var cookieObj = parseCookidStr(str);
console.log('最终结果是：'cookieObj)
```

![image-20200601074038209](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230936.png)

**模拟实现**

```javascript
Array.prototype.myReduce = function(func,initialValue){
    let len = this.length;
    let _this = arguments[2] || window;
    let nextValue = initialValue
    for(let i = 0; i < len; i++){
        nextValue = func.apply(_this,[nextValue,this[i],i,this])
    }
    return nextValue
}
```





#### reduceRight(func,initValue)

从右向左进行遍历

```javascript
var str = "PSTM=1547202501;BIDUPSID=51A74B310E1C99BD28A9FA40AB749FD6;MSA_WH=375_667;BAIDUID=0D8F8152E381149:FG=1;BD_UPN=12314753;H_WISE_SIDS=140797_142277_110085;BDORZ=B490B5EBF6F3CD402E515D22BCDA1598;BD_HOME=1;H_PS_PSSID=31782_31464_31322_30824;delPer=0;BD_CK_SAM=1;PSINO=7;H_PS_645EC=bHv5XGOaNHro5ko"
function parseCookidStr(str){
    var obj1 = {};
    var cookieArr = str.split(/[:;]/);
    return cookieArr.reduceRight(function(prev,cur,index,self){
        console.log(prev,cur)
        var newArr = cur.split('=')
        prev[newArr[0]] = newArr[1];
        return prev
    },obj1)
}
var cookieObj = parseCookidStr(str);
console.log('最终结果是：',cookieObj)
```

![image-20200601073821853](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230937.png)

**模拟实现**

```javascript
Array.prototype.myReduceRight = function(func,initialValue){
    let len = this.length;
    let _this = arguments[2] || window;
    let nextValue = initialValue
    for(let i = len-1; i >= 0; i--){
        nextValue = func.apply(_this,[nextValue,this[i],i,this])
    }
    return nextValue
}
```



## ES6

