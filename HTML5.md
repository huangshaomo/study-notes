# HTML5

### 1. 新增属性

#### 1. placeholder——提示信息



#### 2. Calendar类

> 兼容性不好

```html
//时间类
<input type="date"> <!--chrome支持，safari,IE不支持-->
<input type="time">
<input type="week">
<input type="data-local">
<br/>
<input type="number">//数字表单 <!--chrome支持，safari,IE不支持-->
<input type="email">//邮箱表单 <!--chrome，火狐 支持，safari,IE不支持-->
<input type="color">//颜色选择器 <!--chrome支持，safari,IE不支持-->
<input type="ranger" min="1" max="100">//范围条<!--chromesafari支持一点,火狐，IE不支持-->
<input type="search">//提供历史搜索文字<!--chrome支持，safari支持一点,IE不支持-->
<input type="url"><!--chrome，火狐 支持，safari,IE不支持-->
<input type="submit">//提交按钮

```



#### 3. ContentEditable

> 文字内容点击后可以修改，并且如果父级设置了该属性，子级也会继承。如果子级不想继承，可以单独对子级设置false，值默认为false，该属性兼容性好，可以使用

```html
<div contenteditable="true">
    Panda<br/>
    <span>orange</span>
</div>
```

该属性有个特点，只保护自己范围内的，没有保护到的，连标签、换行符都能删除，这样会导致页面布局出现混乱

```html
<div contenteditable="true">
    <span contenteditable="false">姓名：</span> panda<br/>
    <span contenteditable="false">姓名：</span> 汉子
</div>
```



#### 4. Dragger

> 可拖拽属性，dragger="true"，默认false，但有些例外**，a标签**、**img标签**默认为true
>
> 兼容性：只有chrome、safari支持，火狐、IE不支持

 **拖拽的生命周期**（3）

- ondragstart——拖拽开始（在按下后开始移动的一刹那，按下物体的一瞬间不会触发）

- ondrag——拖拽进行中

- ondrageend——拖拽结束（拖拽停止后触发）

  **上面的都有一个e事件参数**

  

**用JS实现拖拽离开原位置**

```javascript
var oDragDiv = document.getElementsByClassName('a')[0];
var startX = 0,
    startY = 0
oDragDiv.ondragstart = function (e) {
    startX = e.clientX;
    startY = e.clientY;

}

oDragDiv.ondragend = function (e) {
    var disX = e.clientX - startX;
    var disY = e.clientY - startY;
    oDragDiv.style.left = oDragDiv.offsetLeft + disX + "px";
    oDragDiv.style.top = oDragDiv.offsetTop + disY + "px";
}
```

**拖拽的组成（2）**

- 被拖拽的物体
- 目标区域（4）

针对目标区域的事件也有4个

- ondragEnter—— 可拖动的元素或选取的文本在鼠标进入目标区域后触发
- ondragover—— 可拖动的元素或选取的文本在进入目标区域后触发
- ondragleave—— 可拖动的元素或选取的文本移出放置目标时执触发。 
- ondrop——在ondragover事件中调用e.preventDefault()方法才会且鼠标松手后才触发是因为所有的标签元素，当拖拽周期结束后，默认事件是回到原处，因此需要阻止该默认事件，阻止该事件后才会执行ondrop事件（因为一个行为可以不止触发一个事件）

因为所有的标签元素，当拖拽周期结束后，默认事件是回到原处，不过不直接



**实现盒子元素移动到另一个盒子**

```html
<style>
*{
margin: 0px;
padding: 0px;
}
.box1{
position: absolute;
width: 150px;
height: auto;
border: 1px solid;
padding-bottom: 10px;
}
.box2{
position: absolute;
width: 150px;
height: auto;
border: 1px solid;
padding-bottom: 10px;
left: 300px;
}

li{
position: relative;
width: 100px;
height: 30px;
background-color: orange;
margin: 10px auto 0px auto;
list-style: none;

}
</style>
</head>
<body>
    <div class="box1">
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <div class="box2"></div>

    <script>
        var liList = document.getElementsByTagName('li');
        var liDom = null;
        for (let i = 0; i < liList.length; i++) {
            liList[i].setAttribute('draggable',"true"); 
            liList[i].ondragstart = function(e){
                liDom = e.target;
            }
        }

        var box2 = document.getElementsByClassName('box2')[0];
        box2.ondragover = function(e){
            e.preventDefault();
        }
        box2.ondrop = function(e){
            box2.appendChild(liDom);
            liDom = null
        }
        var box1 = document.getElementsByClassName('box1')[0];
        box1.ondragover = function(e){
            e.preventDefault();
        }
        box1.ondrop = function(e){
            box1.appendChild(liDom);
            liDom = null
        }
    </script>
```



在ondragstart 设置e.dataTransfer.effectAllowed = "link"	//移动时候的鼠标特性（链接图标）

在ondrop 设置 e.dataTransfer.dropEffect = "link"		//放下时候的鼠标特性

注意在ondragstart 和ondrop 的值要一致，对应，除了Link,还有move、copy、copyMove、linkMove、all 等等

#### 5.Hidden

#### 6.Context-menu

#### 7.Data-val（自定义属性）



### 2. 新增标签

#### 语义化标签（一群类似Div的东西）

- header标签——头部标签
- footer标签——尾部标签
- nav标签——导航条
- article标签——文章
- section标签——段落（一般放在article中）
- aside标签——侧边栏、管理系统

上面的都只是带有不同含义的Div，块级元素





#### canvas(画板)

> canvas是用JS操作来实现在画板上画画的

getContext（"2d"）方法：用于获取画板的内容区，顾名思义，想要 画画首先得得到画画区



##### 1. 画线

- moveTo(x, y)：画一个点路径
- lineTo(x, y)：画一个点路径和一条线路径（线的结束点为自己，起始点为上一个点，如果不存在上一个点，那线的起始点也是自己）
- closePath( )：：将起始点和结束点连接起来，形成一个闭合的路径
-  stroke( )： ：绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。 
- beginPath( )：：重新开启一个路径，前面画的路径跟这不是一伙的
- fill( )：给闭合的路径填充颜色，默认是黑色
- fillStyle = "color"：填充你想要的颜色

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d')
    ctx.moveTo(100,100);
    ctx.lineTo(200,100);
    ctx.lineTo(200,200);
    ctx.closePath()
    ctx.stroke()
    ctx.fill();
</script>
```



##### 2. 画矩形

>  画矩形除了用常规的线条画之外，也有针对画矩形的API

- rect(x, y)：画一个闭合的矩形路径，需要绘制才能出现
- strokeRect(x, y, w, h)：画一个闭合的矩形图形，已直接绘制
- fillRect(x, y, w, h)：画一个实心的闭合矩形图形，已直接绘制
- clearRect(x, y, w, h)： 消除指定区域内的图形



**小方块下落练习**

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.strokeRect(50,50,50,50)
    var height=50;
    var timer = setInterval(function(){
        ctx.clearRect(0,0,500,300)
        ctx.strokeRect(50,height,50,50)
        height+=5;
        if(height >= canvas.height){
            clearInterval(timer);
            timer=null
        }
    },1000/24)

</script>
```



##### 3. 画圆（arc）

> 圆心(x, y)，半径(r)，弧度( 起始弧度，结束弧度)，方向(顺时针（0），逆时针（1）)

π=180度

- arc（x, y , r, 起始弧度，结束弧度，方向）

![画圆](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230848.png)

画豆豆

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.arc(100,100,50,0,Math.PI*1.5,0)
    ctx.lineTo(100,100);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
</script>
```

![吃豆豆](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230849.png)



##### 4. 画圆角矩形（arcTo）

> B(x, y)	C(x, y)，圆角大小

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230850.png" alt="画圆角矩形" style="zoom: 67%;" />

需要注意的是B的位置问题，B点并不在直线的末尾，而在拐角处，还有C，C的作用只是为圆角的拐向提供方向，往哪边拐，而不是连线。

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.moveTo(100,110);//关键：闭合的时候由于圆角的原因，高度会减低，所已这个高度-10						   才能完全合并回来
    ctx.arcTo(100,200,200,200,10);//B(100,200),C(200,200)
    ctx.arcTo(200,200,200,100,10);//B(200,200),C(200,100)
    ctx.arcTo(200,100,100,100,10);//B(200,100),C(100,100)
    ctx.arcTo(100,100,100,200,10);//B(100,100),C(100,200)
    ctx.stroke()
    ctx.fill()
</script>
```



##### 5. 贝塞尔曲线

> moveTo(x,y)代表起始点
>
> ex,ey代表结束点，ix,iy代表控制点



二次贝塞尔曲线：quadraticCurveTo(x1, y1, ex, ey) 

![二次贝塞尔曲线](C:\Users\Administrator\Desktop\二次贝塞尔曲线.gif)

三次贝塞尔曲线：bezierCurveTo(x1, y1, x2, y2, ex, ey) 

![三次贝塞尔曲线](C:\Users\Administrator\Desktop\三次贝塞尔曲线.gif)

贝塞尔曲线画月亮

```html
<script>
    var moon = document.getElementById('moon');
    var ctx = moon.getContext('2d');
    ctx.beginPath()
    ctx.arc(0, 0, 100, 0, Math.PI/2, 0);
    ctx.moveTo(0, 100); 
    ctx.quadraticCurveTo(120, 120,100, 0); 
    ctx.strokeStyle = "#f40"; 
    ctx.fill();
</script>

```

![image-20200312153953108](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200312153953108.png)



##### 6. 坐标平移旋转与缩放

- rotate( 旋转度数 )——相对于原点进行旋转，**影响全局**
- scale( x,y )——缩放倍数，x,y填数字，2代表放大两倍。**影响全局**
- translate( x，y )——更改坐标系的原点，默认情况下，左边系的原点是在画布的左上角，以该位置为原点（0，0）。更改坐标系的原点后，相对的点位置自然也发生了改变

![translate](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230851.png)

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.rotate(Math.PI /6);//以原点为中心，旋转35度
    ctx.translate(100,100);//更改原点的位置
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(100,0)
    ctx.stroke()
</script>
```

缩放

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d')
    //缩放
    ctx.scale(2,2)
    ctx.strokeRect(100,100,50,50)
    //等价于
    ctx.strokeRect(200,200,100,100)

</script>
```

对于缩放，我们可以发现，进行缩放后，不仅方块变大了两倍，X，Y坐标也变大了两倍



##### 7. save和restore

save：存储当前的坐标平移及旋转状态

restore：恢复当前的坐标平移及旋转状态

**以上都需要在进行旋转或平移之前进行使用**





没有使用save和restore

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d')
    ctx.rotate(Math.PI/6)
    ctx.beginPath();
    ctx.strokeRect(100,100,100,50)
    ctx.beginPath();
    ctx.strokeRect(200,100,100,50)
</script>
```

![1583066016187](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230852.png)

可以发现，即使第一个和第一个矩形不是同一伙的，但仍然继承了旋转角度，因此我们需要用save保存还未进行旋转时的旋转状态和坐标平移，等到需要用到的地方再用restore恢复



使用save和restore后

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.save()	//存储当前的坐标平移及旋转状态
    ctx.rotate(Math.PI/6)
    ctx.beginPath();
    ctx.strokeRect(100,100,100,50)
    ctx.restore();//恢复当前的坐标平移及旋转状态
    ctx.beginPath();
    ctx.strokeRect(200,100,100,50)
</script>
```

![1583066204445](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230853.png)



##### 8. Canvas背景填充

> 填充图案默认也是根据坐标点原点进行填充

- fillStyle = 变量/"color"

填充颜色时有个注意点：图形必须填充了才能更改填充颜色，否则看不到效果

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.fillRect(100,100,200,100)
</script>
```



常规的更改背景色很简单，如果想要填充图片的话，首先要实例化一个Image构造函数，给实例的.src属性添加地址，等待异步图片加载获取到后再进行绘制

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var image = new Image();
    image.src = "./image/左边@2x.png"
    image.onload = function(){
        ctx.beginPath();
        ctx.translate(100,100)
        var bg = ctx.createPattern(image,"no-repeat");//创建一个模板
        ctx.fillStyle = bg
        ctx.fillRect(0,0,300,200)
    }
</script>
```



##### 9. Canvas线性渐变

> 线性渐变的坐标系原点依然是从（0，0）开始

- createLinearGradient(x0,  y0,  x1, y1)——创建渐变范围，参数为线性渐变的开始点和结束点，从哪个位置开始渐变，渐变到哪个位置
- addColorStop(0/1 , color)   //表示关键帧，界限为0-1，分别表示起始位置和末尾位置，也可以添加多个关键帧数，数字界限为0-1之间的小数

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    var bg = ctx.createLinearGradient(0,0,200,200)  //创建渐变范围
    bg.addColorStop(0, "white"); //渐变起始颜色
    bg.addColorStop(1, "black"); //渐变末尾颜色
    ctx.fillStyle = bg;
    ctx.translate(100,100)
    ctx.fillRect(0,0,200,200);
</script>
```



##### 9. Canvas辐射渐变

- createRadiaGradient(x0,y0,r0, x1,y1,r1)
- addColorStop()

| 参数 | 描述                  |
| ---- | --------------------- |
| *x0* | 渐变的开始圆的 x 坐标 |
| *y0* | 渐变的开始圆的 y 坐标 |
| *r0* | 开始圆的半径          |
| *x1* | 渐变的结束圆的 x 坐标 |
| *y1* | 渐变的结束圆的 y 坐标 |
| *r1* | 结束圆的半径          |

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    var bg = ctx.createRadialGradient(100,100,5,100,100,100)//创建辐射渐变
    bg.addColorStop(0,'red');//渐变起始颜色
    bg.addColorStop(1,'green');//渐变末尾颜色
    ctx.fillStyle = bg;
    ctx.fillRect(0,0,200,200);

</script>
```



##### 10.canvas阴影

- shadowColor = "颜色"	//阴影颜色
- shadowBlur=数字           //阴影大小
- shadowOffsetX = 数字       阴影 往X轴平移
- shadowOffsetY = 数字       阴影 往Y轴平移

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.shadowColor = "blue";
    ctx.shadowBlur = 30;
    ctx.shadowOffsetX = 10
    ctx.shadowOffsetY = 10
    ctx.beginPath();
    ctx.fillRect(0,0,200,200);
</script>
```



##### 11.canvas渲染文字

- font="大小，字体类型"

- strokeText("文字",x,y)	//空心文字,位置
- filltext("文字",x,y)     //实心文字,位置

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.font = "24px orial";
    ctx.fillStyle = "red"
    ctx.strokeText('小红红',0,30);
    ctx.fillText("小黄黄",50,60);
</script>
```



##### 12.canvas线端样式

- lineCap = "round"	//线的两端样式，有butt、square、round
- lineJoin = "miter"    //两条线接触的部分样式 有round、bevel、miter
- miterLimit = 5        //截断线段长度

```html
<canvas id="canvas" width="500px" height="300px"></canvas>
<script>
    var canvas= document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    lineCap = "round"   //线段两端样式
    ctx.lineWidth = 15; //线段粗细
    ctx.lineJoin = "miter"  //两根线重叠部分样式
    ctx.miterLimit = 50 //-  //截断线段长度
    ctx.beginPath();    
    ctx.moveTo(20,50)
    ctx.lineTo(200,50)
    ctx.lineTo(100,100)
    ctx.stroke();
</script>
```



#### SVG和Canvas的区别

canvas：适合用于小面积的绘图，适合动画，用JS绘制

SVG：矢量图，放大不会失真，适合大面积的贴图，通常动画较少或者较简单，用标签和CSS绘制



#### svg

svg图形有个特点。闭合的图形总是以默认黑色填充显示，如果想去除默认填充，可以如下

```css
fill:transparent	//填充设为透明
stroke:red;			//红笔绘制
stroke-width=3px;	//笔的粗细
```

##### 1. 画线

标签：line

属性：x1, y1, x2, y2

```html
<style>
    line1{
        stroke:black	//绘制的颜色
        strokeWidth:5px	//线的宽度
    }
</style>
<svg width="500px" height="300px" style="border:1px solid #000">
	<line x1="100" y1="100" x2="200" y2="200" class="line1"></line>
</svg>
```



##### 2. 画矩形

标签：rect，

属性：width（宽度）、height（高度）、X（起点X）、y（起点Y）、rx（x轴的圆角）、ry（y轴圆角）

```html 

<svg width="500px" height="300px" style="border:1px solid #000">
    <rect height="50" width="100" x="0"  y="0" rx="10" ry="10" class="line1"></rect>
</svg>
```



##### 3. 圆、椭圆、折线、多边形

> 这里的有个特点：都是默认填充黑色

**圆标签**：circle

属性：r(半径)   cx(圆心x左标) cy(圆心Y坐标)

```html
<svg width="500px" height="300px" style="border:1px solid #000">
    <circle r="50" cx="50" cy=220></circle>
</svg>
```



**椭圆标签**：ellipse

属性：rx(横向半径)    ry(纵向半径)	cx(圆心横坐标)	cy(圆心纵坐标)

```html
<ellipse rx="100" ry="30" cx="100" cy="200"> </ellipse> 
```



**折线标签**：polyline  

属性：points(  )：里面可以有多个坐标，坐标与坐标之间用，隔开，每两个点表示一个坐标，点与点之间用空格隔开

```html
<style>
    polyline{
        fill:transparent;	
        stroke:red;			
        stroke-width:3px;	
    }
</style>
<polyline points="0 0, 50 50 ,100 50"></polyline>
```



**多边形标签**：polygon

属性：points(  )：里面可以有多个坐标，坐标与坐标之间用，隔开，每两个点表示一个坐标，点与点之间用空格隔开

```html
<style>
    polygon{
        fill:transparent;	
        stroke:red;			
        stroke-width:3px;	
    }
</style>
<polygon points="200 200, 250 250 ,200 250"></polygon>
```



多边形标签与折线标签的唯一区别是多边形标签会自动闭合

![1583219593210](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230854.png)



##### 4. 文本

文本标签：text

文本属性:	x（横坐标）	y(纵坐标)

```html
<style>
    text{
        stroke: green;
        stroke-width: 3px;
    }
</style>
<svg  width="500px" height="300px" style="border:1px solid #000">
    <text x="300" y="50">卢本伟牛逼</text>
</svg>
```



##### 5. 透明度与线条属性

**透明度属性**

​	 边框半透明属性：stroke-opacity:0.5

​	填充半透明属性：fill-opacity:0.5

**线条属性**

​	线条两端样式：stroke-linecap：round

​	线条重合部分样式：stroke-linejoin:miter

​	截断线段长度：miterLimit:5

```html
<style>
    polyline{
        /* fill: transparent; */
        stroke: green;
        stroke-width: 10px;
        stroke-opacity: .5;
        fill-opacity: .3;
        stroke-linecap: round;
        stroke-linejoin: miter;
    }
</style>
<svg  width="500px" height="300px" style="border:1px solid #000">
    <!-- 折线 -->
    <polyline points="0 0, 50 50 ,100 50"></polyline>
</svg>
```



##### 6. path

> 属性参数区分大小写，大写字母表示绝对位置（相对于原点），小写字母表示相对于前一个点为原点的相对位置



标签：path

属性：d

值：M（moveTo） L(lineTo)	H(横向移动)	V（纵向移动）Z(闭合图形，不区分大小写)

```html
 <path d="M 50 50 L 100 50 l 0 100"></path>
 <path d="M 200 200 L 250 200 L 250 250"></path>
```

![1583222661386](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230855.png)

```html
<path d="M 100 100 H 200 V 200"></path>
<path d="M 200 200 h 200 v 100"></path>
```

![1583222762229](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230856.png)

##### 7.path 画弧

标签：path

属性: d

值：M（moveTo） L(lineTo)	H(横向移动)	V（纵向移动）Z(闭合图形，不区分大小写)，A（artTo）【X轴半径，Y轴半径，旋转角度（0-360 ）、大弧/小弧度（1/0） 顺时针/逆时针（1/0）    终点】

 ```html
  <svg  width="500px" height="300px" style="border:1px solid #000">
         <path d="M 100 100 A 100 50 90 1 1 150 200"></path>
    </svg>
 ```

  一个点和两个点都能画无穷多个圆 三个点要分情况 如果三点共线则不能画出圆 如果不共线则确定唯一的圆 ( 连接任意两点，做每一条线的中垂线（垂直平分线），交点就是圆心 )

两个点和一个半径，能确定两个圆

![path 画弧](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/20210105230857.png)



##### 8.SVG渐变

标签：<defs><linearGradient><stop></stop></linearGradient></defs>

属性：x1,y1表示渐变的起点、x2,y2表示渐变的终点，id表示到时候被引用的标记

```html
<svg  width="500px" height="300px" style="border:1px solid #000">
    <defs>
        <linearGradient id="bg1" x1 ="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: rgb(255, 255, 0);"></stop>
            <stop offset="100%" style="stop-color: rgb(255, 0, 0);"></stop>
        </linearGradient>
    </defs>
    <rect x="100" y="100" height="100" width="200" style="fill:url(#bg1)"></rect>
</svg>
```

上面的方块引用了该渐变去填充内部



##### 9.SVG高斯模糊

标签：feGaussianBlur

属性：in

```html
<svg  width="500px" height="300px" style="border:1px solid #000">
    <defs>
        <linearGradient id="bg1" x1 ="0" y1="0" x2=0 y2="100%">
            <stop offset="0%" style="stop-color: rgb(255, 255, 0);"></stop>
            <stop offset="100%" style="stop-color: rgb(255, 0, 0);"></stop>
        </linearGradient>
    </defs>
    <filter id="Gaussian">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur>
    </filter>
    <rect x="100" y="100" height="100" width="200" style="fill:url(#bg1); filter:url(#Gaussian)"></rect>
</svg>
```

- `<filter>` 标签的 id 属性可为滤镜定义一个唯一的名称（同一滤镜可被文档中的多个元素使用）
- `filter:url `属性用来把元素链接到滤镜。当链接滤镜 id 时，必须使用 # 字符
- 滤镜效果是通过` <feGaussianBlur>` 标签进行定义的。fe 后缀可用于所有的滤镜
- `<feGaussianBlur> `标签的 stdDeviation 属性可定义模糊的程度
- in="SourceGraphic" 这个部分定义了由整个图像创建效果



##### 10.SVG虚线和简单动画

属性：stroke-dasharray:10px 20px...

值：stroke-dasharray可以有一个或以上的值，如果是多个值，每个值按轮流顺序填充可填充区和空白区

```html
<style>
    line{
        stroke: red;
        stroke-width: 10px;
        stroke-dasharray: 10px 20px;
    }
</style>
<svg  width="500px" height="300px" style="border:1px solid #000">
    <line x1="100" y1="100" x2="300" y2="100"></line>
</svg>
```

简单动画：

会用到stroke-dashOffset偏移属性

属性：stroke-dashOffset——会将线作为一个整体向左移动某个值。

值：数字

```html
<style>
    line{
        stroke: red;
        stroke-width: 10px;
        stroke-dasharray: 200px;
        stroke-dashoffset: 200px;
        animation: move 1s linear infinite alternate-reverse;
    }
    @keyframes move{
        0%{
            stroke-dashoffset: 200px;
        }
        100%{
            stroke-dashoffset: 0px;
        }
    }
</style> 
<svg  width="500px" height="300px" style="border:1px solid #000">
    <line x1="100" y1="100" x2="300" y2="100"></line>
</svg>
```



##### 11、viewbox(比例尺)

属性：viewbox

参数：（x,y）起始位置，（w，h）比例尺

```html
<svg  width="500px" height="300px"  viewbox="0,0,250,150"style="border:1px solid #000">
    <rect x="0" y="0" width="200px" height="50px"></rect>
</svg>
```

所谓比例尺，就是改变画布的呈现大小，相当于修改了画布的大小，但而不改变物体本身的大小，这样就会达到放大或缩写的效果











#### Audio(声音播放)

#### Video(视频播放)







### 3. 新增API

#### 定位（需要地理位置的功能）

属性：geoLocation

该函数接受一个成功的回调和一个失败的回调

特点

1. 兼容性不高
2. 在手机上会调用GPS进行精确定位，电脑上会调用ip进行粗略定位
3. 仅支持https和file文件些，是因为这样安全性比较高，不会轻易泄露个人位置信息

```javascript
window.navigator.gepLocation.getCurrentPosition(function(position){
    console.log(position);
},function(err){
    console.log(err);
})
```



#### 重力感应（陀螺仪）

事件：deviceorientation

该事件会在拥有陀螺仪的设备自动触发，其中有三个比较重要的属性

- **alpha**：指北（指南针）[0-360),当为0的时候指北，180指南

- **beta**：平方的时候beta值为0 ，如果将手机立起，直立的时候beta为90，倒立-90

- **gamma**：平放的时候gamma值为0，如果将手机立起来（长边接触桌面），直立的时候为90，倒立-90

```html
<div id="main"></div>
<script>
    //陀螺仪
    window.addEventListener("deviceorientation",function(event){
        console.log(event);
        document.getElementById('main').innerHTML = "alpha:" + event.alpha + "<br/>"+"beta:" + event.beta + "<br/>" + "gamma:" + event.gamma + "<br/>";
    })

</script>
```



##### 重力加速度

事件：devicemotion

该事件会在拥有陀螺仪的设备自动触发，其中有三个比较重要的属性

- acceleration.x：x轴方向的重力加速度
- acceleration.y：y轴方向的重力加速度
- acceleration.z：z轴方向的重力加速度

```html
<div id="main"></div>
<script>
    window.addEventListener("devicemotion",function(event){
        console.log(event);
        document.getElementById('main').innerHTML = event.acceleration.x + "<br/>"+event.acceleration.y+"<br/>" + event.acceleration.z+"<br/>"
        if(Math.abs(event.acceleration.x ) > 9){
            alert('x轴方向的重力加速度启动');
        }
        if (Math.abs(event.acceleration.y ) > 9) {
            alert('x轴方向的重力加速度启动');
        }
        if(Math.abs(event.acceleration.z ) > 9){
            alert('x轴方向的重力加速度启动');
        }
    })
</script>
```



#### request-animation-frame（动画优化）

类似于setTimeOut（），



#### History

>  （控制当前页面的历史记录）

popState监听回退事件，只要URL变了就会触发，触发顺序> hashchange

hashchange：监听hash值变了才会触发





#### localStorage，SessionStorage

> （存储信息，比如：历史最高记录），localStorage是为了解决Cookie每次请求的时候会把当前域下的所有cookie信息传送到后端，浪费宽带跟时间，

localStorage：只能存储字符串，如果存入的是数组，会被（JSON.Stringify()）解析成数组字符串，可通过JSON.parse()再次解析回来，如果存入的是对象，会直接调用类似顶层的toString()方法[object,object]，因此对于对象，需要先用JSON.stringify()转换成数组字符串，再存进去，然后再调用JSON.parse拿取

localStorage：长期存放在浏览器，只有手动能清空

sessionStorage：窗口关闭后会sessionStorage自动清空



localStorage  和 Cookie

- localStorage在发送请求的时候不会把数据发出去，Cookie会把所有的数据带出去
- Cookie存储的内容比较少，只有4K左右，localStorage有5M左右



#### webSocket（聊天室）



#### FileReader（文件读取，预览）



#### webWorker

> （文件的 异步，提升性能，提升交互体验）

worker是一个真正的多线程，不是伪多线程，用postMessage()发送数据，用onMessage()接受数据

worker不能操作dom,没有window对象，不能读取本地文件。可以发送ajax，可以计算

```javascript
var worker  = new Worker(接受一个文件)
```

由于以上问题和兼容性问题，worker一般只是用于计算。

worker理论上是可以在worker内继续创建worker的，但目前没有任何一款浏览器支持



#### Fetch