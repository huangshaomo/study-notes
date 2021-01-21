# 通用原生UI组件

## 纯CSS

### 1. 图片遮罩层

#### 基本功能

```html
<style>
    /* 图片遮罩层 */
    .layer{position: relative; width: 270px; color: #fff;}
    .layer >.img{background-repeat: no-repeat; background-size: 100% 100%;}
    .layer > .mask{position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; margin: auto; background-color: rgba(0, 0, 0, 0.7);}
</style>   
<!-- 图片遮罩层 -->
<div class="layer">
    <img src="xxx.jpg" alt="">
    <div class="mask">这里为遮罩层内容</div>
</div>
```

![image-20200917214730847](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/image-20200917214730847.png)

#### 可选颜色扩展

```css
/* 遮罩层颜色扩展 */
/* 透明色 */
.layer > .mask.white{background-color: rgba(255, 255, 255, 0.7); color: #333;}
/* 青绿色 */
.layer > .mask.lightgreen{background-color: rgba(64, 196, 128, 0.7);}
/* 天蓝色 */
.layer > .mask.skyblue{background-color: rgba(35, 139, 199, 0.7);}
```



2. 带下划线标题

#### 基本功能

```html
<style>
    .title{display: inline-block; text-align: center; margin: 80px 0px 40px;}
    .title > h1{margin-bottom: 10px;}
    .title > .line{width: 30px; height: 5px; background-color: #000; margin: 0 auto; transition: width linear 0.2s;  border-radius: 10px;}
    .title:hover >.line{width: 100%;}
</style>
<!-- 带下划线标题 -->
<div class="title ">
    <h1>这是标题</h1>
    <div class="line "></div>
</div>
```

![JgRhsn6rZV](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/JgRhsn6rZV.gif)

#### 可选颜色样式扩展

```css
/* 颜色扩展 */
/* 白色 */
.title.white{color: #fff;}
.title.white .line{background: #fff;}
.line.white{background: #fff;}
/* 青绿色 */
.title.hightgreen{color: #40C480;}
.title.hightgreen .line{background: #40C480;}
.line.hightgreen{background: #40C480;}

/* 天蓝 */
.title.skyblue{color: #264788;}
.title.skyblue .line{background: #40C480;}
.line.skyblue{background: #264788;}
```

### 3. 带文字背景标题

#### 基础功能

```html
<style>
    .title{ display: inline-block; text-align: center;font-style: italic; font-weight: 300; }
    .title h3{position: absolute; top: 5%; left: 35%; font-size: 28px; color: #333;}
    .title .bg-text{position: relative;font-size: 55px;font-weight: 300;color: rgba(28, 31, 37, 0.05);line-height: 99px; text-align: center;}
</style>
<div class="title">    
    <div class="bg-text">Cora data<h3>核心数据</h3></div>
</div>
```

![chrome_Nc2kJOlUq5](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_Nc2kJOlUq5.png)

#### 可选颜色样式扩展

```css
//白色
.title.white .bg-text h3{color: #fff;}
.title.white .bg-text{color: rgba(255, 255, 255, 0.05);}
```

![chrome_uXXCV9ev4I](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_uXXCV9ev4I.png)

### 4. 菜单栏

#### 基本功能

```html
<style>
    /* 公共样式 */
    a{color: #fff; text-decoration: none;}
    /* 菜单栏 */
    #nav{list-style: none; height: 40px;}
    #nav > li {float: left; text-align: center;}
    #nav > li a{display: inline-block; width: 100px;  padding: 10px 20px;}
    #nav > li > ul{transition: all linear 0.3s; list-style: none; opacity: 0;}
    #nav > li:hover #nav2{opacity: 1;}
</style>
<ul id="nav">
    <li>
        <a href="">栏目一</a>
        <ul id="nav2">
            <li><a href="">二级栏目</a></li>
            <li><a href="">二级栏目</a></li>
            <li><a href="">二级栏目</a></li>
            <li><a href="">二级栏目</a></li>
        </ul>
    </li>
    <li>
        <a href="">栏目二</a>
    </li>
    <li><a href="">栏目三</a></li>
    <li><a href="">栏目四</a></li>
    <li><a href="">栏目五</a></li>
    <li><a href="">栏目六</a></li>
</ul>
```

![PlsCzHEnss](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/PlsCzHEnss.gif)

#### 可选动画扩展

向上渐入动画

```css
/* 公共样式 */
a{color: #fff; text-decoration: none;}
/* 菜单栏 */
#nav{list-style: none; height: 40px;}
#nav > li {position: relative; float: left; text-align: center;}
#nav > li a{display: inline-block; width: 100px;  padding: 10px 20px;}
#nav > li > ul{position: absolute; top: 100px;left: 0px; transition: all linear 0.3s; list-style: none; opacity: 0;}
#nav > li:hover #nav2{top:40px; opacity: 1;}
```

![1pAMCrZA9M](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/AhiVRfH1Ck.gif)

这动画还存在问题，原因是opacity只是使元素隐藏，完美的解决方法是给li设置overflow:hidden！



每个li延迟旋转 

```css
/* 可选过渡样式 */
/* 每个样式延迟旋转 */
#nav > li > ul li{transition: all linear 1s; transform: rotateY(-130deg);}
#nav > li > ul li:nth-of-type(2){transition: all linear 1s 0.2s; transform: rotateY(-130deg);}
#nav > li > ul li:nth-of-type(3){transition: all linear 1s 0.4s; transform: rotateY(-130deg);}
#nav > li > ul li:nth-of-type(4){transition: all linear 1s 0.6s; transform: rotateY(-130deg);}
#nav > li:hover #nav2 li {transform: rotateY(0deg);}
```

![AhiVRfH1Ck](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/1pAMCrZA9M.gif)

#### 力拓菜单栏

```html
<style>
    /* 公共样式 */
    * {margin: 0px;padding: 0px;text-align: center;}
    a{color: #333; text-decoration: none;}
    /* 菜单栏 */
    #nav{display: inline-block; list-style: none; height: 80px;line-height: 80px; box-sizing: border-box;}
    #nav > li {position: relative; float: left; text-align: center; box-sizing: border-box; padding: 0px 20px;}
    #nav > li > a{display: inline-block; box-sizing: border-box; border-top: 2px solid transparent;}
    #nav > li > ul{position: absolute; left: 31px; top: 70px; display: inline-block; transition: all linear 0.3s; list-style: none; 
        line-height: 40px; border: 1px solid #0000; display: none;}
    #nav > li > ul >li { min-width: 110px; text-align: left; border-bottom: 1px solid #999; box-sizing: border-box;margin: 0 3px;}
    #nav > li:hover .nav2{display: block; border: 1px solid #333;}
    #nav > li:hover >a{border-top: 2px solid #cb3939;}
    #nav > li>ul>li:hover{background: cadetblue;}
</style>
<ul id="nav">
    <li>
        <a href="">首页</a>
        <ul class="nav2">
            <li><a href="">二级栏目</a></li>
            <li><a href="">二级栏目</a></li>
            <li><a href="">二级栏目</a></li>
            <li><a href="">二级栏目</a></li>
            <li><a href="">二级栏目</a></li>
            <li><a href="">二级栏目</a></li>
        </ul>
    </li>
    <li>
        <a href="">产品和方案</a>
        <ul class="nav2">
            <li><a href="">二级栏目</a></li>
        </ul>
    </li>
    <li><a href="">平台</a>
        <ul class="nav2">
            <li><a href="">二级栏目</a></li>
        </ul></li>
    <li><a href="">营销</a>
        <ul class="nav2">
            <li><a href="">二级栏目</a></li>
        </ul></li>
    <li><a href="">渠道合作</a>
        <ul class="nav2">
            <li><a href="">二级栏目</a></li>
        </ul></li>
    <li><a href="">资讯</a>
        <ul class="nav2">
            <li><a href="">二级栏目</a></li>
        </ul></li>
    <li><a href="">关于我们</a>
        <ul class="nav2">
            <li><a href="">二级栏目</a></li>
        </ul></li>
</ul>
```

力拓三级菜单栏

```html
<style>
    /* 菜单栏 */
    /* 一级栏目 */
    #nav{display: inline-block; list-style: none; height: 80px;line-height: 80px; box-sizing: border-box;}
    #nav.to-right{float: right;}
    #nav > li {position: relative; float: left; text-align: center; box-sizing: border-box; padding: 0px 32px;}
    #nav > li:last-of-type {padding-right: 0px;}
    #nav > li > a{display: inline-block; box-sizing: border-box; border-top: 2px solid transparent; }
    #nav > li > ul{position: absolute; left: 0px; top: 80px;  display: inline-block; transition: all linear 0.3s; list-style: none; line-height: 40px; background-color: #fff; z-index: 1000;border: 1px solid #999;  padding:  10px 0px; display: none;}
    /* 二级栏目 */
    #nav > li:hover >.nav2{display: block;}
    #nav > li > ul >li >a{padding: 0 3px; color: #999;}
    #nav > li:hover >a{color: #C7403B;}
    #nav > li > ul >li {width: 110px; text-align: left; box-sizing: border-box;margin: 0px; text-align: center; }
    #nav > li > ul > li > a:hover{color: #333;}
    /* 三级栏目 */
    #nav .nav2.wide2{width: 691px; height: 372px; box-sizing: border-box; padding: 23px 42px!important;}
    #nav .nav2.wide2 > li{float: left; width: 155px; margin-right: 45px; cursor: pointer; text-align: left;}
    #nav .nav2.wide2 > li > a{padding-bottom: 12px; border-bottom: 1px solid #DCDCDC; margin-bottom: 20px;line-height: 16px; color: #333; }
    #nav .nav2.wide2 > li > ul:last-of-type{margin-right: 0px;  width: 196px;}
    #nav .nav2.wide2 > li > ul > li{color: #999999; text-align: left;}
    #nav .nav2.wide2 > li > ul > li > a{color: #999;}
    #nav .nav2.wide2 > li > ul li a:hover {color: #333;}
</style>
<ul id="nav">
    <li><a href="{$indexurl}" target="_blank">首页</a>
        <ul class="nav2">
            <li><a href="">91速课</a></li>
            <li><a href="">智能制课</a></li>
            <li><a href="">资源制作</a></li>
            <li><a href="">贴心站群</a></li>
        </ul>
    </li>
    <li><a href="#" target="_blank">产品和解决方案</a>
        <ul class="nav2 wide2">
            <li><a>产品</a>
                <ul class="nav3">
                    <li><a href="">混合式教学平台</a></li>
                    <li><a href="">速课智能制课系统</a></li>
                    <li><a href="">考试系统</a></li>
                    <li><a href="">站群</a></li>
                    <li><a href="">资源库</a></li>
                    <li><a href="">实验室安全教育平台</a></li>
                    <li><a href="">企业网校</a></li>
                </ul>
            </li>
            <li><a href="#">解决方案</a>
                <ul class="nav3">
                    <li><a href="">一流课程建设</a> </li>
                    <li><a href="">在线开放课程</a></li>
                    <li><a href="">专业群资源库建设</a></li>
                    <li><a href="">专业资源库建设</a></li>
                    <li><a href="">资源库</a></li>
                    <li><a href="">混合式教学</a></li>
                    <li><a href="">教学能力大赛</a></li>
                </ul>
            </li>
            <li><a href="#">服务</a>
                <ul class="nav3">
                    <li><a href="">教师信息技术人才培养服务</a> </li>
                    <li><a href="">教育部协同育人</a></li>
                    <li><a href="">资源制作</a></li>
                    <li><a href="">速课培训</a></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><a href="" target="_blank">平台</a>
        <ul class="nav2">
            <li><a href="">91速课</a></li>
            <li><a href="">贴心大学</a></li>
        </ul>
    </li>
    <li><a href="#" target="_blank">案例</a>
        <ul class="nav2">
            <li><a href="">课程</a></li>
            <li><a href="">服务</a></li>
            <li><a href="">平台</a></li>
            <li><a href="">速课</a></li>
        </ul>
    </li>
    <li><a href="#" target="_blank">渠道合作</a>
    </li>
    <li><a href="#" target="_blank">资讯</a>
        <ul class="nav2">
            <li><a href="">行业观察</a></li>
            <li><a href="">公司头条</a></li>
        </ul>
    </li>
    <li><a href="#" target="_blank">关于我们</a>
        <ul class="nav2">
            <li><a href="">公司简介</a></li>
            <li><a href="">联系方式</a></li>
            <li><a href="">招贤纳士</a></li>
            <li><a href="">公众号</a></li>
        </ul>
    </li>
</ul>
```

最新菜单栏

```html
<style>
/*默认二级下拉导航菜单*/
#nav{width: 800px; border: 1px solid #ccc;}
#nav li{position: relative; float: left; cursor: pointer;}
#nav > li{height: 60px; line-height: 60px;}
#nav li a{line-height: 20px;}
#nav li ul{position: absolute; display: block; opacity: 0;  visibility: hidden;  left: 0px; top: 80px; width: 120px;  opacity: 0; background: #fff; transition: all ease-in-out .3s; padding: 15px 0px; z-index: 9999;}
#nav>li>ul{overflow: hidden;}
/* 二级 */
#nav li ul li{line-height: 1; line-height: 24px; padding: 10px 0px;}

/*一级动效*/
#nav li:hover > a{color: #28ae65;}
#nav li:hover > ul{ opacity: 1; top: 60px; visibility: visible;}
/*二级动效*/
</style>
<div class="menu">
	<ul id="nav" class="nav clearFix">
		<li><a href="">首页</a></li>
		<li><a href="">申请书</a></li>
		<li><a href="">成果总结</a>
			<ul>
				<li><a href="">成果总结1</a></li>
				<li><a href="">成果总结1</a></li>
				<li><a href="">成果总结1</a></li>
			</ul>
		</li>
		<li><a href="">成果鉴定</a>
			<ul>
				<li><a href="">成果总结1</a></li>
				<li><a href="">成果总结1</a></li>
				<li><a href="">成果总结1</a></li>
			</ul>
		</li>
		<li><a href="">推广应用</a></li>
		<li><a href="">证明材料</a></li>
		<li><a href="">廉政鉴定</a></li>
		<li><a href="">联系我们</a></li>
	</ul>
</div>
```



### 5. 动态搜索栏

#### 基础功能

```html
<style>
    .search-box{position: relative; text-align: right; margin-right: 30px; width: 300px;}
    .search-box input{position: relative; z-index: 5; display: inline-block; width: 50px; height: 25px; transition: all .5s; opacity: 0; border-radius: 30px; outline: none; border: none; 
        padding: 0px 25px 0px 10px; box-sizing: border-box;}
    .search-box .search-icon{position: absolute; top: 5px; right: 10px; background: url("./images/search.png") no-repeat center center; width: 14px; height: 14px;}
    .search-box input:hover {cursor: pointer;}
    .search-box input:focus {width: 150px; opacity: 1;cursor: text; border: 1px solid #333;}
    .search-box input:focus ~ .search-icon {z-index: 6;}
    .search-box input::placeholder{color: #999;} 
</style>
<div class="search-box">
    <input type="text" placeholder="输入搜索内容">
    <div class="search-icon"></div>
</div>
```

![Jn1Q3KRyhJ](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_FrbH8zkp3v.png)

#### 快速了解

这个动画主要用到了三个比较重要的属性，text-align，width，::focus

text-align设置到父元素中，用来设置子元素的动画移动方向，center表示width宽度由两边扩展，两边收缩，left表示width向右伸展，向左收缩，right表示width向左边扩展，向右收缩

width必须要给父级设置width，否则只会向右伸展

::focus伪类用来操作input的伸缩，初次点击搜索icon，此时点击的是input，因为input此时设置了opacity所以不可见，但z-index又高于icon，再次点击icon时，此时点击的是搜索icon，因为提高了icon的z-index，点击非input元素会导致input失去焦点，所以input又会缩回来。其实点击非input区域都会导致input失去焦点而收缩

#### 可选功能扩展

```css
/* 右伸展，左收缩 */
.search-box.alignL{text-align: left; margin-left: 161px;}
.search-box.alignL > input{ right: 0px; top: 0px; padding: 0px 10px 0px 30px;}
.search-box.alignL > .search-icon{left: 10px;}

/* 左右伸展收缩 */
.search-box.alignC{ text-align: center;}
.search-box.alignC > input{  margin-left: 80px;}
.search-box.alignC > input:focus ~ .search-icon {right: -80px;}
```

### 6. 盒子列表

#### 基础功能

```html
<style>
    .list{ list-style: none; width: 1200px; margin: 0 auto; overflow: hidden;}
    .list > li{float: left; }
    .list > li:nth-of-type(4n) > .graphic-box{ margin-right: 0px;}
</style>
<ul class="list clearFix">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

<img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/Jn1Q3KRyhJ.gif" alt="chrome_FrbH8zkp3v" style="zoom:150%;" />



### 7. 图文盒子

#### 基础功能

```html
<style>
    .graphic-box{display: inline-block; margin: 0px 40px 30px 0px; }
    .graphic-img{width: 300px; height: 190px;}
    .graphic-img.pic1{background: url("images/pic1.png")no-repeat center center; }
    .graphic-info{height: 100px; background-color: gray; text-align: center; border: 1px solid #333; box-sizing: border-box; padding: 5px; color: #fff;}
    .graphic-info > h1{margin-bottom: 10px;}
    .graphic-info > p{}
</style> 
<a class="graphic-box">
     <div class="graphic-img pic1"></div>
     <div class="graphic-info">
         <h1>这是标题</h1>
         <p>这是一段很长很长很长的文本</p>
     </div>a
</a>
```

![chrome_iC1zU6hOp4](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_iC1zU6hOp4.png)

#### 可选功能扩展

```html
//左右图文盒子
<style>
    .graphic-box-level{width: 1200px; height: 300px; margin: 0 auto; border: 1px solid #333; line-height: 1;}
    .graphic-box-level .graphic-pic{width: 400px;height: 100%; float: left;}
    .graphic-box-level .graphic-text{overflow: hidden; padding: 20px;}
    .graphic-box-level .graphic-text > h3{margin-bottom: 20px;}
    .graphic-box-level .graphic-text > h3 > a{color: #333; text-decoration: none;}
    .graphic-box-level .graphic-text > p{}
    .graphic-box-level .graphic-pic.pic1{background: url("images/pic1.png")no-repeat center center;}
</style>
<div class="graphic-box-level">
    <div class="graphic-pic pic1"></div>
    <div class="graphic-text">
        <h3><a href="#">这是标题</a></h3>
        <p>这是一段很长很长的文本内容...</p>
    </div>
</div>
```

![360chrome_nPVBmrGHVu](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/360chrome_nPVBmrGHVu.png)





**1. 图片带遮罩层图文盒**

```html
<style>
    .graphic-box{display: inline-block; margin: 0px 40px 30px 0px; }
    .graphic-img{width: 270px; height: 190px;}
    .graphic-img.pic1{background: url("images/pic1.png")no-repeat center center; }
    .graphic-info{height: 100px; background-color: gray; text-align: center; border: 1px solid #333; box-sizing: border-box; padding: 5px; color: #fff;}
    .graphic-info > h1{margin-bottom: 10px;}
    .graphic-info > p{}
    .layer{position: relative;color: #fff;}
    .layer > .img{background-repeat: no-repeat; background-size: 100% 100%;}
    .layer > .layer-mask{position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; margin: auto; background-color: rgba(0, 0, 0, 0.7); opacity: 0; transition: all linear .3s;}
    .layer > .layer-mask:hover{opacity: 1;}
</style>
<div class="graphic-box">
    <div class="layer">
        <div class="graphic-img pic1"></div>
        <div class="layer-mask">这里为遮罩层内容</div>
    </div>
    <div class="graphic-info">
        <h1>这是标题</h1>
        <p>这是一段很长很长很长的文本</p>
    </div>
</div>
```

![U243CrXqu8](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/U243CrXqu8.gif)









### 8. 温馨提示

```html
<style>
.tips-area{text-align:center;color:#F00; height:45px; line-height:45px;}
.tips-area >p>a{text-decoration:none;color:rgb(21,99,171)}
</style>
<div class="tips-area">
    <p>温馨提示：建议使用<a href="https://browser.360.cn/ee/">360极速</a>或者<a href="https://browser.qq.com/?adtag=SEM170314031">QQ</a>浏览器查看</p>
</div>
```



### 9. banner

```html
<style>7E171B
    .banner{position: relative; width: 100%; height: 300px; min-width: 1200px;}
    .banner .banner-img{position: absolute;top: 0px; left: 50%; margin-left: -960px; height: 100%;}
    .banner-title{position: relative; width: 1200px; margin: 0 auto; height: 300px;}
    .banner-title .banner-info{position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; margin: auto; width: 200px; height: 100px; color: #fff;}
    .banner-title img{position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; margin: auto;}
</style>
<div class="banner">
    <img src="images/case/banner-bg.png" alt="" class="banner-img">
    <div class="banner-title">
        <div class="banner-info">
            <h1>这是标题</h1>
        </div>
         <!-- <img src="" alt=""> -->
    </div>
</div>
```

```html
//结构2
<div class="header">
    <div class="header-content">
        <div class="logo"><a href="{$indexurl}"><img src="{$logo}" /></a></div>
        <div class="banner"><img src="{$banner}" /></div>
    </div>
</div>
```

```html
//结构3
<style>
    .solution-banner {position: relative;width: 100%; height: 600px; min-width: 1350px; background: url("xxx") no-repeat center center; text-align: center;}
    .solution-banner > h3{font-size: 60px; padding: 190px 0 43px;  color: #fff;}
    .solution-banner > p{font-size: 20px; padding-bottom: 110px; color: rgba(255, 255, 255, 0.7);}
</style>
<div class="banner">
    <h3></h3>
    <p></p>
</div>
```

全屏图片：全屏状态下，图片视口和图片本身一致，图片视口默认填充屏幕100%，当屏幕缩小时，图片视口width发生变化，但由于不设置图片尺寸（background-size:100% 100%），所以图片不会随着屏幕的缩小而缩小，缩小的只是跟随宽度缩小而缩小的图片视口width。这种图片适合做全屏轮播图，但不适合做自适应轮播图。因为图片本身不改变，不会发生变形

```html
<style>
.banner{height: 500px; background: url("images/banner.png")no-repeat left top; border: 2px solid #f10;}
</style>
<div class="banner"></div>
```



![DjKL7yA45m](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/DjKL7yA45m.gif)

需要注意的一点时，设置图片位置必须为（background:position(top,center)）也就是默认的，如果设置为 center center 会出现下面这种情况

![CH4gOAUMeE](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/o2LDi9bO8H.gif)

图片尺寸虽然不会改变，但由于设置了图片一直处于图片视口中间，改变图片视口会让图片发生移动，往视口中间靠。



自适应图片：如果给图片设置了background-size:100% 100%，表示图片尺寸跟随图片盒的宽度而改变，且默认100% 填充图片盒，这样会造成图片尺寸改变，并发生变形，这种图片适合做自适应轮播图

![8saIKPltSC](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/taHO1Z7Nxr.gif)



## CSS + JS

### 1.tab 选项卡

#### 基础功能

```html
<style>
	.tabs-content li{display: none;}
    .tabs-content li.active-content{display: block;}
</style>
<div class="tabs">
    <ul class="tabs-title">
        <li></li>
        <li></li>
    </ul>
    <ul class="tabs-content">
        <li></li>
        <li></li>
    </ul>
</div>
```

```javascript
function Tabs(options){
    if(!options || !options.wrapper) throw new Error('必须指定一个容器');
    var baseObj = {
        wrapper:'.tabs',
        eventType:'click',
    }
    this.options = Object.assign({},baseObj,options);
    this.wrapper = options.wrapper && $(options.wrapper);
    this.tabs_title = this.wrapper.find('.tabs-title');
    this.tabs_content = this.wrapper.find('.tabs-content');
    this.count = this.tabs_title.find('li').length;
    this.curIndex = null;
    // 1.初始化：给第一个元素活跃
    this.init()
    // 2.绑定事件
    this.bindEvent() 
}
Tabs.prototype.init = function(tabs_title,tabs_content){
    this.tabs_title.find('li:eq(0)').addClass('active-title');
    this.tabs_content.find('li:eq(0)').addClass('active-content');
    this.curIndex = 0;
}
Tabs.prototype.bindEvent = function(){
    var _this = this;
    this.tabs_title.on(this.options.eventType, 'li',function(){
        var target = $(event.target);
        var curIndex = target.index();
        // 3. 指定第几个活跃
        _this.tabTo(curIndex);
    })
}
Tabs.prototype.tabTo = function(curIndex){
    //临界值判断,不能大于总数-1,不能小于0
    curIndex = curIndex < 0 ? 0: curIndex >=0 && curIndex > this.count -1 ? this.count -1 : curIndex;
    this.tabs_title.find('li').removeClass('active-title').eq(curIndex).addClass('active-title');
    this.tabs_content.find('li').removeClass('active-content').eq(curIndex).addClass('active-content');
    return curIndex;
}
var tab1 = new Tabs({
    wrapper:'.tabs'
}) 
```

```js
//新增功能：新增生命周期函数，tabBefore，tabEnd，分别在切换活跃元素前后触发。新增tabPrev，tabNext函数，可手动调用函数触发活跃元素切换
function Tabs(options){
    if(!options || !options.wrapper) throw new Error('必须指定一个容器');
    var baseObj = {
        wrapper:'.tabs',
        eventType:'click',
    }
    this.options = Object.assign({},baseObj,options);
    this.wrapper = options.wrapper && $(options.wrapper);
    this.tabs_title = this.wrapper.find('.tabs-title');
    this.tabs_content = this.wrapper.find('.tabs-content');
    this.count = this.tabs_title.find('li').length;
    this.curIndex = null;
    // 1.初始化：给第一个元素活跃
    this.init()
    // 2.绑定事件
    this.bindEvent() 
}
Tabs.prototype.init = function(tabs_title,tabs_content){
    this.tabs_title.find('li:eq(0)').addClass('active-title');
    this.tabs_content.find('li:eq(0)').addClass('active-content');
    this.curIndex = 0;
}
Tabs.prototype.bindEvent = function(){
    var _this = this;
    this.tabs_title.on(this.options.eventType, 'li',function(){
        var target = $(event.target);
        var curIndex = target.index();
        // 3. 指定第几个活跃
        _this.tabTo(curIndex);
    })
}
Tabs.prototype.tabTo = function(curIndex){
    //临界值判断,不能大于总数-1,不能小于0
    curIndex = curIndex < 0 ? 0: curIndex >=0 && curIndex > this.count -1 ? this.count -1 : curIndex;
    this.options.tabBefore && this.options.tabBefore()
    this.tabs_title.find('li').removeClass('active-title').eq(curIndex).addClass('active-title');
    this.tabs_content.find('li').removeClass('active-content').eq(curIndex).addClass('active-content');
    this.options.tabEnd && this.options.tabEnd()
    return curIndex;
}
Tabs.prototype.tabPrev = function(){
    return this.tabTo(this.curIndex - 1)
}
Tabs.prototype.tabNext = function(){
    return this.tabTo(this.curIndex + 1)
}
var tab1 = new Tabs({
    wrapper:'.tabs',
    eventType:'mouseover',
    tabBefore:function(){
        console.log('tabBefore执行了');
    },
    tabEnd:function(){
        console.log('tabEnd执行了');
    }
}) 
```





#### 下拉选项卡菜单

```html
<style>
    *{margin: 0; padding: 0; line-height: 1; list-style: none; text-decoration: none; color: #333;}
    .dropdown{position: absolute; left: 30px; top: 30px; width: 320px;height: 200px; background: #FBFBFB;box-shadow: 0px 0px 15px 0px rgba(199, 64, 59, 0.2);border-radius: 5px; padding: 30px; box-sizing: border-box;}
    .dropdown .button{position:relative; border: none; outline: none; background:transparent; font-size: 24px; cursor: pointer;}
    .dropdown .button::before{position: absolute; content: "";display: block; border: 8px solid; border-color: #333 transparent transparent transparent; left: 130px;  top: 10px;}
    .dropdown .button::after{position: absolute; content: "";display: block; border: 8px solid; border-color: #fbfbfb transparent transparent transparent; left: 130px;  top: 8px;}
    .dropdown .divide-line{padding-top:20px;border-bottom: 1px solid #ccc;}
    .dropdown .dropdown-menu{position: absolute;font-size: 18px;border: 1px solid rgba(225,227,232,.48); background: #fff;box-shadow: 0 2px 2px 0 rgba(44,71,146,.17);cursor: pointer; z-index: 10; padding: 10px; display: none; top: 0px;}
    .dropdown .dropdown-menu li{margin-bottom: 20px; padding: 15px 20px;}
    .dropdown .dropdown-menu li:hover{background: #edf1f8; color: #333;}
    .dropdown .dropdown-content{margin-left: 34px;}
    .dropdown .dropdown-content li{display: none;}
    .dropdown .dropdown-content li:first-child{display: block;}
    .dropdown .dropdown-content li p{position: relative; font-size: 14px; color: #999; line-height: 24px;}
    .dropdown .dropdown-content li p:first-child{margin: 20px 0 25px;}
    .dropdown .dropdown-content li p::before{position: absolute;  content: "";display: block; left: -30px; top: 4px; }
    .dropdown .dropdown-content li p:first-child::before{background: url("images/about/phone.png");width: 15px; height: 14px;}
    .dropdown .dropdown-content li p:last-child::before{background: url("images/about/address.png"); width: 15px; height: 18px;}
    .dropdown .button:hover > #dropdown-menu{display: block;}
</style>
<div class="dropdown" id="dropdown">
    <div class="button">
        <div class="showarea" data-key="0">东莞总公司</div>
        <ul class="dropdown-menu" id="dropdown-menu">
            <li data-key="1">广州总公司</li>
            <li data-key="2">广西总公司</li>
        </ul>
    </div>
    <div class="divide-line"></div>
    <ul class="dropdown-content">
        <li>
            <p>400-998-2665</p>
            <p>广东省东莞市南城天安数码城F4座504室</p>
        </li>
        <li>
            <p>020-36334915</p>
            <p>广州市海珠区中山大学科技园A座306</p>
        </li>
        <li>
            <p>400-998-2655</p>
            <p>广西南宁市高新区新苑路17号华城都市N栋608—609</p>
        </li>
    </ul>
</div>
<script>
    //下拉选择
    $('#dropdown .dropdown-menu').on('click', 'li', function (event) {
        var homeVal = $('#dropdown .showarea').text()//拿到当前显示标签的文本
        var homeIdx = $('#dropdown .showarea').data('key')//拿到当前显示标签的key
        var val = $(event.target).text();//拿到点击的下拉标签的文本
        var idx = $(event.target).data('key');//拿到点击的下拉标签的key
        $('#dropdown .showarea').text(val).data('key', idx)//给当前显示标签重新赋值为点击的下拉标签内容
        $(event.target).text(homeVal).data('key', homeIdx)//把点击的下拉标签内容替换成显示标签内容。
        //给点击的下拉标签显示其对应的文本内容
        $('.dropdown-content li').eq(idx).show().siblings().hide();
    })
</script>
```

![o2LDi9bO8H](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/CH4gOAUMeE.gif)

#### 下拉菜单

```html
<style>
    * {margin: 0;padding: 0;line-height: 1;list-style: none;text-decoration: none;color: #333;}
    .select{position: relative;border: 1px solid #ccc; display: inline-block; padding: 10px; cursor: pointer; width: 180px; box-sizing: border-box; border-radius: 5px;}
    .select p{line-height: 20px; position: relative;}
    /* 纯三级 */
    /* .select p::after{content: "";display: inline-block;border: 5px solid ; border-color: #333 transparent transparent transparent; margin-left: 5px; vertical-align: middle;} */
    /* 空心三角 */
    .select p::before{content: "";display: inline-block;border: 6px solid ; border-color: #333 transparent transparent transparent; position: absolute; right: 0px; top: 50%; margin-top: -4px; transition: all ease-in-out .3s; transform-origin: 5px 3px;}
    .select p::after{content: "";display: inline-block;border: 6px solid ; border-color: #fff transparent transparent transparent; position: absolute; right: 0px; top: 20%; transition: all ease-in-out .3s; transform-origin: 5px 3px;}
    .select p.rotate::before,.select p.rotate::after{transform: rotateZ(-180deg);} 
    .select p.rotate::after{top: 40%;}
    .select ul{position: absolute; left: 0px; top: 40px; padding: 5px 0px; width: 100%; border: 1px solid #ccc; border-radius: 5px; margin-top: 10px; display: none;}
    .select ul li{ padding: 10px; margin: 5px 0px; transition: all ease-in-out .1s; cursor: pointer;}
    .select ul li.active-option{background: #f5f7fa;}
</style>
<div class="select">
    <p><span data-url="baidu.com">百度搜索</span></p>
    <ul>
        <li class="active-option"><span data-url="baidu.com">百度搜索</span></li>
        <li><span data-url="google.com">谷歌搜索</span></li>
        <li><span data-url="chaoxin.com">超星检索</span></li>
        <li><span data-url="zhiwang.com">知网检索</span></li>
    </ul>
</div>
    <script src="script/jquery-1.7.2.min.js"></script>
    <script>
        $(function(){
            $('.select').click(function(){
                $(this).find('ul').slideToggle(300,'swing');
                $(this).find('p').toggleClass('rotate');
            })
            $('.select ul').on('mouseover','li',function(event){
                if(event.target !== this) return;
                $(this).addClass('active-option').siblings().removeClass('active-option');
            })
            $('.select ul').on('click','li',function(event){
                var _this = $(this);
                if(event.target !== this) _this = $(event.target).parents('li');
                var targetParent = $(this).parents('.select')
                var val = _this.html();
                targetParent.find('p').html(val);
            })
        })
    </script>
```

![frJb8bNJ4L](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/wwSBlKMG0i.gif)




### 2. 轮播图

#### 基础功能

```html
<style type="text/css">
    *{margin: 0px; padding: 0px; list-style: none; text-decoration: none; color: #333;}
    .slide-item  p{position: absolute;left: 0px; top: 0px; color: #fff; }
    .arrow{position: absolute;width: 30px; height: 80px;top: 50%; margin-top: -40px; background: rgba(0,0,0,0.5); }
    .prev{left: 30px;}
    .next{right: 30px;}
    .pagination{position: absolute;width: 100%;  text-align: center; bottom: 30px;}
    .pagination ul{display: inline-block;}
    .pagination li{ width: 10px; height: 10px; line-height: 10px; border-radius: 50%;background: #fff; float: left; margin-left: 10px;}
    .pagination li.active-point{background: #f10;}
</style>       
<div class="slide" id="slide">
    <ul class="slide-group">
        <li class="slide-item red"><a href="">
            <img src="./img/banner1.jpg" alt="">
            <p>这是第一张</p>
            </a></li>
        <li class="slide-item blue"><a href="">
            <img src="./img/banner2.jpg" alt="">
            <p>这是第二张</p>
            </a></li>
        <li class="slide-item pink"><a href="">
            <img src="./img/banner3.jpg" alt="">
            <p>这是第三张</p>
            </a></li>
        <li class="slide-item orange"><a href="">
            <img src="./img/banner4.jpg" alt="">
            <p>这是第四张</p>
            </a></li>
    </ul>
    <div class="arrow prev" id="btn-prev"></div>
    <div class="arrow next" id="btn-next"></div>
    <div class="pagination" id="pagination"></div>
</div>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript">
    function Slide(options) {
        this.wrapper = $(options.elm);
        this.slideGroup = this.wrapper.find('ul');
        this.slideItems = this.wrapper.find('li');
        this.pagination = $(options.pagination);
        this.width = options.width;
        this.height = options.height;
        this.length = this.slideItems.length;
        this.idx = 0;
        this.lock = false;
        this.timer = null;
        this.duration = options.duration || 3000;
        this.initLeft = 0;
        this.init(options)//初始化轮播图
    }
    Slide.prototype.init = function(options) {
        //初始化轮播图视口宽度，容器宽度，项目宽度。
        var that = this;
        if(options.loop) this.clone(options.loop);
        if(options.pagination) this.creatElm(options.pagination);
        this.wrapper.css({width:options.width || 600,height:options.height || 300,overflow:'hidden',position:'relative'});
        this.slideGroup.css({width:this.slideGroup.find('li').length * this.width,height:this.height,position:'absolute',left:-this.initLeft});
        this.slideGroup.find('li').css({width:this.width,height:this.height,float:'left',position:'relative'})
        this.slideGroup.find('li img').css({width:'100%',height:'100%' ,backgroundSize:'cover'});
        that.activeElm(that.idx);
        this.bindEvent(options)
        this.timer = setInterval(function(){
            that.toNext();
        },this.duration);
    }
    Slide.prototype.clone = function(mode){
        if(mode !== '' && mode === true){ 
            this.slideItems.eq(0).clone().appendTo(this.slideGroup)
            this.slideItems.eq(this.length - 1).clone().prependTo(this.slideGroup);
            this.initLeft = this.width;
        }else{
            this.slideItems.eq(0).clone().appendTo(this.slideGroup)
        }
    }
    Slide.prototype.creatElm = function(target){
        var ul = document.createElement('ul');
        $(ul).appendTo($(target));
        for(var i = 0; i < this.slideItems.length; i ++){
            var li = document.createElement('li');
            if(i === 0 ) $(li).addClass('active-point');
            $(li).appendTo($(ul));
        }

    }

    Slide.prototype.toPrev = function(){
        if(this.lock) return false;
        this.idx--;
        this.move();
    }

    Slide.prototype.toNext = function(){ 
        if(this.lock) return false;
        this.idx++;
        this.move();
    }

    Slide.prototype.move = function(){
        var that = this;
        this.lock = true
        // console.log('锁了',this.lock);
        // console.log('执行第'+ this.idx +'次');

        this.slideGroup.animate({left:-(this.idx * this.width + this.initLeft),top:0},'swing',function(){
            that.lock = false;
            that.activeElm(that.idx);
            // console.log('解开了',that.lock);
            if(that.idx == that.slideItems.length){
                that.idx = 0;
                that.activeElm(that.idx);
                that.slideGroup.css({left:-that.initLeft});
            }
            if(that.idx == -1){
                that.idx = that.slideItems.length-1;
                that.slideGroup.css({left:-that.initLeft*(that.slideItems.length)});
            }
        })
    }
    Slide.prototype.activeElm = function(curIdx){
        this.pagination.find('li').removeClass('active-point').eq(curIdx).addClass('active-point');
        this.slideItems.removeClass('active-item').eq(curIdx).addClass('active-item')
    }
    Slide.prototype.bindEvent = function(options){
        var that = this;
        if(options.arrow.prev){
            $(options.arrow.prev).click(function(){
                clearInterval(that.timer);
                that.timer = null;
                that.toPrev();
                that.timer = setInterval(function(){
                    that.toNext();
                },that.duration)
            })
        }
        if(options.arrow.next){
            $(options.arrow.next).click(function(){
                clearInterval(that.timer);
                that.timer = null;
                that.toNext();
                that.timer = setInterval(function(){
                    that.toNext();
                },that.duration)
            })
        }
        if(options.pagination){
            $(options.pagination).on('click','li',function(e){
                console.log(that.idx, $(e.target).index());
                var tarIdx = $(e.target).index()
                that.idx = tarIdx;
                clearInterval(that.timer);
                that.timer = null;
                that.move();
                that.timer = setInterval(function(){
                    that.toNext();
                },that.duration)
            })
        }
        this.wrapper.on('mouseover',function(){
            clearInterval(that.timer);
            that.timer = null;
        })
        this.wrapper.on('mouseleave',function(){
            that.timer = setInterval(function(){
                that.toNext();
            },that.duration)
        })
    }
    let slide = new Slide({
        elm:'#slide',
        width:820,
        height:300,
        arrow:{
            prev:'#btn-prev',
            next:'#btn-next'
        },
        pagination:'#pagination',
        loop:true,//启用无缝轮播,
        actived:function(){},
        befored:function(){}
        // direction:'right'//轮播方向
        // fullPage:true//是否启用全屏轮播

    })
</script>
```

![COlBcSTrPc](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/muzbtwPcpZ.gif)



#### 滑动无缝轮播

```html
<style>
    * {margin: 0px;padding: 0px;list-style: none;}
    .wrapper {margin: 100px;width: 800px;overflow: hidden;cursor: pointer;}
    .wrapper ul {position: relative;top: 0px;}
    .wrapper ul li {width: 100px;height: 50px !important;float: left;border: 1px solid #333;box-sizing: border-box;}
    .wrapper ul li.orange {	background-color: orange;}
    .wrapper ul li.red {background-color: red;}
    .wrapper ul li.pink {background-color: pink;}
    .wrapper ul li.blue {background-color: blue;}
    .wrapper ul li.area-inner-click {background: #333;}
    .arrow {width: 30px;height: 100px;background: #ddd;}
</style>
<div class="wrapper" id="wrapper">
    <div class="arrow" id="prev">上</div>
    <div class="arrow" id="next">下</div>
    <ul class="list">
        <li class="orange">0</li>
        <li class="red">1</li>
        <li class="pink">2</li>
        <li class="blue">3</li>
        <li class="orange">4</li>
        <li class="red">5</li>
        <li class="pink">6</li>
        <li class="pink">7</li>
        <li class="blue">8</li>
        <li class="orange">9</li>
    </ul>
    <div class="pagination"></div>
</div>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script>
    function SlideMove(options) {
        this.wrapper = $(options.elm);
        this.list = $(options.elm).find('ul');
        this.items = $(options.elm).find('li');
        this.curIdx = 0;
        this.listL = 0
        this.delay = $(options.delay)[0] || 3000
        this.lock = false;
        this.init(options);
    }
    SlideMove.prototype.init = function (options) {
        var that = this
        $(this.wrapper).css({ overflow: 'hidden' })
        if (options.seamLess){	//是否启用无缝轮播
            this.clone()
        }else{
            this.listW = this.items.length * this.items.outerWidth();
            $(this.list).css({ width: this.listW, height: $(this.items).outerHeight(),left: this.listL});
        }
        this.bindEvent(options.arrow);	//事件绑定函数
        this.activeItem()				//添加活跃
        this.timer = setInterval(function () {	//启动轮播
            that.toNext();
        }, this.delay);
    }
    SlideMove.prototype.toNext = function () {
        if (!this.clock) {
            ++this.curIdx;
            this.toMove();
        }
    }
    SlideMove.prototype.toPrev = function () {
        if (!this.clock) {
            --this.curIdx;
            this.toMove();
        }
    }
    SlideMove.prototype.clone = function (pos) {
        $(this.items).clone().prependTo($(this.list));
        $(this.items).clone().appendTo($(this.list));
        this.listW = $(this.list).find('li').length * this.items.outerWidth();
        this.listL = $(this.list).find('li').length / 3 * this.items.outerWidth();
        $(this.list).css({ width: this.listW,height: $(this.items).outerHeight(),left:-this.listL});
    }
    SlideMove.prototype.toMove = function () {
        var that = this;
        console.log(this.curIdx);
        this.activeItem()
        this.clock = true;
        var moveDIs = this.curIdx * this.items.outerWidth() + this.listL; //每次移动距离
        $(this.list).animate({ left: -moveDIs}, "slow", function () {
            // console.log('移动' + that.curIdx + '次')
            if (Math.abs(that.curIdx % that.items.length) === 0) {
                // console.log('归零');
                that.curIdx = 0;
                that.activeItem();
                $(that.list).css({ left: -that.listL})
            }
            that.clock = false
        })
    }
    SlideMove.prototype.bindEvent = function (arrow) {
        var that = this
        $(arrow.prev).click(function () {
            that.toPrev()
            clearInterval(that.timer);
            that.timer = null;
            that.timer = setInterval(function () {
                that.toNext();
            }, that.delay);

        })
        $(arrow.next).click(function () {
            that.toNext()
            clearInterval(that.timer);
            that.timer = null;
            that.timer = setInterval(function () {
                that.toNext();
            }, that.delay);

        })
        $(that.list).find('li').on('click',function (e) {
            var activeLi = $(e.target).parents('li');
            $(that.list).find('span').removeClass("area-inner-click")
            $(activeLi).find('span').addClass("area-inner-click");
            $("#area-con").html($(activeLi).find('div').html());
        })
    }
    SlideMove.prototype.activeItem = function(newIdx){
        var newIdx = newIdx || this.curIdx
        $(this.list).find('li').removeClass("area-inner-click").eq(newIdx + this.items.length).addClass("area-inner-click");
        $(this.list).find('span').removeClass("area-inner-click").eq(newIdx + this.items.length).addClass("area-inner-click");
        $("#area-con").html($(this.list).find('li').eq(newIdx +  this.items.length).children("div").html());
    }
    var slide = new SlideMove({
        elm: '#area-inner',
        arrow: {
            prev: "#btn-left",
            next: "#btn-right"
        },
        seamLess: true,
        delay: 3000
    });
</script>
```

![muzbtwPcpZ](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/8saIKPltSC.gif)



轮播图

```javascript
            var banners = document.querySelectorAll(".banner-inner img"),
                activedIndex = 0,
                timerId;

            for (var i = 0; i < banners.length; i++) {
                if (activedIndex == i) {
                    banners[i].className = "activated";
                    // banners[i].style.display = "block";
                } else {
                    banners[i].className = "";
                    // banners[i].style.display = "none";
                }
            }

            if (!timerId) {
                timerId = setInterval(function () {
                    changeImg();
                }, 5000);
            }

            function changeImg(left) {
                if (timerId) {
                    clearInterval(timerId);
                    timerId = null;
                }
                var prevIndex = activedIndex;
                // 临界点判断，最左或最右边
                if ((activedIndex == 0 && left) ||
                    (activedIndex == banners.length - 1 && !left)) {
                    activedIndex = left ? banners.length - 1 : 0;
                } else {
                    activedIndex = activedIndex + (left ? -1 : 1);
                }
                banners[prevIndex].className = "";
                banners[activedIndex].className = "activated";
                timerId = setInterval(function () {
                    changeImg(true);
                }, 5000);
            }

            var btnL = document.querySelector(".btn-left"),
                btnR = document.querySelector(".btn-right");
            btnL.onclick = function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                return changeImg(true);
            };
            btnR.onclick = function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                return changeImg(false);
            };
```





### 3. 分页

#### 基础功能

```html
<style>
    .pager{
        text-align: center;
    }
    .pager .pager-item{
        display: inline-block;
        padding: 5px 15px;
        margin-right: 10px;
        background-color: rgb(97, 97, 228);
        color: #fff;
        border: 1px solid #000;
        cursor: pointer;
        text-decoration: none;
    }
    .pager .pager-item.disabled{
        cursor: not-allowed;
        background-color: transparent;
        color: #000;
    }
    .pager .pager-item.active{
        background-color: transparent;
        border: none;
        color: deeppink;
        font-size: 20px;
    }
</style>
 <div class="pager"></div>
<script src="./pager.js"></script>
<script>
    let pager = new Pager({total:1000,current:1})
</script>
```

```javascript
// 步骤：
// 1、首先创建一个配置对象，存放分页插件的一些默认配置信息，如果用户传入了新的配置信息，
// 与默认配置信息进入混入（mixin）,可用Object.assign或展开运算符。
// 2、给容器创建各种元素，首页、上一页、数字页码、下一页、尾页 数据信息（1/100）搜索
// 3、给容器绑定事件委托，委托到各个源目标。源目标根据类名去区分（classList.contains()）

//处理点：
//数字页码处理：
//在数字页码中，当前页码一般情况在都在最中间，最左边的数字页码为（当前页码 - Math.floor(数字页码个数/2)）
//最右边的数字页码为（最左边数字页码 + 数字页码总数 -1）。
//当数字页码的current
//最后再根据for循环，长度为left+right。

class Pager {
    constructor(options) {
        let defaultOptions = {
            container: document.querySelector('.pager'),
            total: 1000,     //总数据量
            pageSize: 10,     //数据展示条数 
            current: 1,       //当前页码，最小为1
            panelNumber: 5,    //数字页码个数
            firstText: '首页',
            prevText: '上一页',
            nextText: '下一页',
            lastText: '尾页'
        }
        // 混入（mixin），得到最终的配置
        this.options = Object.assign({}, defaultOptions, options);
        // 或者
        // this.options = {
        //     ...defaultOptions,
        //     ...options
        // }
        this.render();
        this.bindEvent();
    }

    /**
     * 给容器初始化各种元素,并根据当前current情况添加一个disabled类名
     */
    render() {
        // 每次渲染之前都要置空容器内的内容，防止多次渲染容器内容生成多次
        this.options.container.innerHTML = '';
        let disabled = '';
        if (this.options.current == 1) {
            disabled = 'disabled'
        }
        // 创建首页
        this.createDom('first ' + disabled, this.options.firstText);
        //创建上一页
        this.createDom('prev ' + disabled, this.options.prevText);

        //创建数字页码（没有text部分，需创建）
        this.CreateNumberPager();

        disabled = ''//置空，再次判断
        if (this.options.current == this.getPageNumber()) {
            disabled = 'disabled'
        }
        //创建下一页
        this.createDom('next ' + disabled, this.options.nextText);
        //创建尾页
        this.createDom('last ' + disabled, this.options.lastText);

        //当前页码 / 总页码
        let span = document.createElement('span');
        span.innerHTML = `<i>${this.options.current}</i>/ <i>${this.getPageNumber()}</i>`;
        this.options.container.appendChild(span)

        //创建input输入框
        let input = document.createElement('input');
        this.options.container.appendChild(input)

    }

    /**
     * 创建Dom元素
     * @param {String} extraClass   //给元素添加类名
     * @param {String} content      //给元素添加内容
     */
    createDom(extraClass, content) {
        let a = document.createElement('a');
        a.setAttribute('href', 'javascript:void(false)')
        a.className = 'pager-item ' + extraClass;
        a.innerHTML = content;
        this.options.container.appendChild(a);
        return a;
    }

    /**
     * 得到总页码数
     */
    getPageNumber() {
        return Math.ceil(this.options.total / this.options.pageSize);
    }

    /**
     * 生成数字页码text部分
     */
    CreateNumberPager() {
        let minNumber = this.options.current - Math.floor(this.options.panelNumber / 2);
        //如果最小页小于最小页数
        if (minNumber < 1) {
            minNumber = 1
        }
        let maxNumber = minNumber + this.options.panelNumber - 1;
        let pageNumber = this.getPageNumber()
        //如果最大页超过了总页数，
        if (maxNumber > pageNumber) {
            maxNumber = pageNumber
        }
        let active = 'active';
        for (let i = minNumber; i <= maxNumber; i++) {
            if (this.options.current == i) {
                this.createDom('number ' + active, i);
            } else {
                this.createDom('number', i);

            }

        }

    }

    /**
     * 给容器绑定事件
     */
    bindEvent() {
        let that = this
        this.options.container.addEventListener('click', function (event) {
            let e = event || window.event;
            let target = e.target || e.srcElement;
            if (target.classList.contains('first') && !target.classList.contains('disabled')) {
                that.toPage(1);
            }
            else if (target.classList.contains('prev') && !target.classList.contains('disabled')) {
                that.toPage(that.options.current - 1)
            }
            else if (target.classList.contains('next') && !target.classList.contains('disabled')) {
                that.toPage(that.options.current + 1);
            }
            else if (target.classList.contains('last') && !target.classList.contains('disabled')) {
                that.toPage(that.getPageNumber());
            }
            else if (target.classList.contains('number')) {
                that.toPage(+target.innerHTML)
            }
        })
    }

    /**
     * 点击后更改current并重新渲染dom
     */
    toPage(page) {
        if (page < 1) {
            page = 1
        }
        let pageNumber = this.getPageNumber();
        if (page > pageNumber) {
            page = pageNumber
        }
        if (page == this.options.current) {
            return;
        }
        this.options.current = page;
        this.render();
        this.getCurPage()
    }

    //辅助函数，可有可无，返回当前页码到外部
    getCurPage(){
        console.log(this.options.current)
        return this.options.current;
    }

}
```



### 4.验证

#### 基础功能

```html
<div id="v_container" style="width: 200px;height: 50px;"></div>
<input type="text" id="code_input" value="" placeholder="请输入验证码"/><button id="my_button">验证</button>

<script>
    var verifyCode = new GVerify("v_container");
    document.getElementById("my_button").onclick = function(){
        var res = verifyCode.validate(document.getElementById("code_input").value);
        if(res){
            alert("验证正确");
        }else{
            alert("验证码错误");
        }
    }
</script>
```

```javascript
!(function(window, document) {
    function GVerify(options) { //创建一个图形验证码对象，接收options对象为参数
        this.options = { //默认options参数值
            id: "", //容器Id
            canvasId: "verifyCanvas", //canvas的ID
            width: "100", //默认canvas宽度
            height: "30", //默认canvas高度
            type: "blend", //图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
            code: ""
        }

        if(Object.prototype.toString.call(options) == "[object Object]"){//判断传入参数类型
            for(var i in options) { //根据传入的参数，修改默认参数值
                this.options[i] = options[i];
            }
        }else{
            this.options.id = options;
        }

        this.options.numArr = "0,1,2,3,4,5,6,7,8,9".split(",");
        this.options.letterArr = getAllLetter();

        this._init();
        this.refresh();
    }

    GVerify.prototype = {
        /**版本号**/
        version: '1.0.0',

        /**初始化方法**/
        _init: function() {
            var con = document.getElementById(this.options.id);
            var canvas = document.createElement("canvas");
            this.options.width = con.offsetWidth > 0 ? con.offsetWidth : "100";
            this.options.height = con.offsetHeight > 0 ? con.offsetHeight : "30";
            canvas.id = this.options.canvasId;
            canvas.width = this.options.width;
            canvas.height = this.options.height;
            canvas.style.cursor = "pointer";
            canvas.innerHTML = "您的浏览器版本不支持canvas";
            con.appendChild(canvas);
            var parent = this;
            canvas.onclick = function(){
                parent.refresh();
            }
        },

        /**生成验证码**/
        refresh: function() {
            this.options.code = "";
            var canvas = document.getElementById(this.options.canvasId);
            if(canvas.getContext) {
                var ctx = canvas.getContext('2d');
            }else{
                return;
            }

            ctx.textBaseline = "middle";

            ctx.fillStyle = randomColor(255, 255);
            ctx.fillRect(0, 0, this.options.width, this.options.height);

            if(this.options.type == "blend") { //判断验证码类型
                var txtArr = this.options.numArr.concat(this.options.letterArr);
            } else if(this.options.type == "number") {
                var txtArr = this.options.numArr;
            } else {
                var txtArr = this.options.letterArr;
            }

            for(var i = 1; i <= 4; i++) {
                var txt = txtArr[randomNum(0, txtArr.length)];
                this.options.code += txt;
                ctx.font = randomNum(this.options.height/2, this.options.height) + 'px SimHei'; //随机生成字体大小
                ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色		
                ctx.shadowOffsetX = randomNum(-3, 3);
                ctx.shadowOffsetY = randomNum(-3, 3);
                ctx.shadowBlur = randomNum(-3, 3);
                ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                var x = this.options.width / 5 * i;
                var y = this.options.height / 2;
                var deg = randomNum(-30, 30);
                /**设置旋转角度和坐标原点**/
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText(txt, 0, 0);
                /**恢复旋转角度和坐标原点**/
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            }
            /**绘制干扰线**/
            for(var i = 0; i < 4; i++) {
                ctx.strokeStyle = randomColor(40, 180);
                ctx.beginPath();
                ctx.moveTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                ctx.lineTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                ctx.stroke();
            }
            /**绘制干扰点**/
            for(var i = 0; i < this.options.width/4; i++) {
                ctx.fillStyle = randomColor(0, 255);
                ctx.beginPath();
                ctx.arc(randomNum(0, this.options.width), randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
                ctx.fill();
            }
        },

        /**验证验证码**/
        validate: function(code){
            var code = code.toLowerCase();
            var v_code = this.options.code.toLowerCase();
            console.log(v_code);
            if(code == v_code){
                return true;
            }else{
                this.refresh();
                return false;
            }
        }
    }
    /**生成字母数组**/
    function getAllLetter() {
        var letterStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
        return letterStr.split(",");
    }
    /**生成一个随机数**/
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    /**生成一个随机色**/
    function randomColor(min, max) {
        var r = randomNum(min, max);
        var g = randomNum(min, max);
        var b = randomNum(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    window.GVerify = GVerify;
})(window, document);
```



#### canvas滑块验证



### 5. 滚动锚点

```javascript
$(".anchor-list li a").click(function () {
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 20 + "px" }, 1000, 'swing');
        return false;
    });
```





### 6. 常用过渡动画

```css
//1.定义初始动画
/* 动画 */
/* 向上淡入 */
.slide-up-delay-0{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out;}
.slide-up-delay-1{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out .1s;}
.slide-up-delay-2{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out .2s;}
.slide-up-delay-3{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out .3s;}
.slide-up-delay-4{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out .4s;}
.slide-up-delay-5{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out .5s;}
.slide-up-delay-6{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out .6s;}
.slide-up-delay-7{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out .7s;}
.slide-up-delay-8{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out .8s;}
.slide-up-delay-9{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out .9s;}
.slide-up-delay-10{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out 1s;}
.slide-up-delay-11{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out 1.1s;}
.slide-up-delay-12{opacity: 0; transform: translateY(30px); transition: all .6s ease-in-out 1.2s;}
/* 向下淡入 */
.slide-down-delay-0{opacity: 0; transform: translateY(-30px); transition: all .6s ease-in-out;}
.slide-down-delay-1{opacity: 0; transform: translateY(-30px); transition: all .6s ease-in-out .1s;}
.slide-down-delay-2{opacity: 0; transform: translateY(-30px); transition: all .6s ease-in-out .2s;}
.slide-down-delay-3{opacity: 0; transform: translateY(-30px); transition: all .6s ease-in-out .3s;}
.slide-down-delay-4{opacity: 0; transform: translateY(-30px); transition: all .6s ease-in-out .4s;}
.slide-down-delay-5{opacity: 0; transform: translateY(-30px); transition: all .6s ease-in-out .5s;}
.slide-down-delay-6{opacity: 0; transform: translateY(-30px); transition: all .6s ease-in-out .6s;}
.slide-down-delay-7{opacity: 0; transform: translateY(-30px); transition: all .6s ease-in-out .7s;}
.slide-down-delay-8{opacity: 0; transform: translateY(-30px); transition: all .6s ease-in-out .8s;}
/* 向左淡入 */
.slide-left-delay-0{opacity: 0; transform: translateX(-30px); transition: all .6s ease-in-out;}
.slide-left-delay-1{opacity: 0; transform: translateX(-30px); transition: all .6s ease-in-out .1s;}
.slide-left-delay-2{opacity: 0; transform: translateX(-30px); transition: all .6s ease-in-out .2s;}
.slide-left-delay-3{opacity: 0; transform: translateX(-30px); transition: all .6s ease-in-out .3s;}
.slide-left-delay-4{opacity: 0; transform: translateX(-30px); transition: all .6s ease-in-out .4s;}
.slide-left-delay-5{opacity: 0; transform: translateX(-30px); transition: all .6s ease-in-out .5s;}
.slide-left-delay-6{opacity: 0; transform: translateX(-30px); transition: all .6s ease-in-out .6s;}
.slide-left-delay-7{opacity: 0; transform: translateX(-30px); transition: all .6s ease-in-out .7s;}
.slide-left-delay-8{opacity: 0; transform: translateX(-30px); transition: all .6s ease-in-out .8s;}
/* 向右淡入 */
.slide-right-delay-0{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out;}
.slide-right-delay-1{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out .1s;}
.slide-right-delay-2{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out .2s;}
.slide-right-delay-3{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out .3s;}
.slide-right-delay-4{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out .4s;}
.slide-right-delay-5{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out .5s;}
.slide-right-delay-6{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out .6s;}
.slide-right-delay-7{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out .7s;}
.slide-right-delay-8{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out .8s;}
.slide-right-delay-9{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out .9s;}
.slide-right-delay-10{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out 1s;}
.slide-right-delay-11{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out 1.1s;}
.slide-right-delay-12{opacity: 0; transform: translateX(30px);transition: all .6s ease-in-out 1.2s;}

/* 扩大 */
.grow-up-delay-0{opacity: 0; transform: scale(0); transition: all .6s ease-in-out ;}
.grow-up-delay-1{opacity: 0; transform: scale(0); transition: all .6s ease-in-out .1s;}
.grow-up-delay-2{opacity: 0; transform: scale(0); transition: all .6s ease-in-out .2s;}
.grow-up-delay-3{opacity: 0; transform: scale(0); transition: all .6s ease-in-out .3s;}
.grow-up-delay-4{opacity: 0; transform: scale(0); transition: all .6s ease-in-out .4s;}
.grow-up-delay-5{opacity: 0; transform: scale(0); transition: all .6s ease-in-out .5s;}
.grow-up-delay-6{opacity: 0; transform: scale(0); transition: all .6s ease-in-out .6s;}
.grow-up-delay-7{opacity: 0; transform: scale(0); transition: all .6s ease-in-out .7s;}
.grow-up-delay-8{opacity: 0; transform: scale(0); transition: all .6s ease-in-out .8s;}

//2.定义过渡动画
.transform-area.show .slide-up-delay-0,
.transform-area.show .slide-up-delay-1,
.transform-area.show .slide-up-delay-2,
.transform-area.show .slide-up-delay-3,
.transform-area.show .slide-up-delay-4,
.transform-area.show .slide-up-delay-5,
.transform-area.show .slide-up-delay-6,
.transform-area.show .slide-up-delay-7,
.transform-area.show .slide-up-delay-8,
.transform-area.show .slide-up-delay-9,
.transform-area.show .slide-up-delay-10,
.transform-area.show .slide-up-delay-11,
.transform-area.show .slide-up-delay-12,
.transform-area.show .slide-down-delay-0,
.transform-area.show .slide-down-delay-1,
.transform-area.show .slide-down-delay-2,
.transform-area.show .slide-down-delay-3,
.transform-area.show .slide-down-delay-4,
.transform-area.show .slide-down-delay-5,
.transform-area.show .slide-down-delay-6,
.transform-area.show .slide-down-delay-7,
.transform-area.show .slide-down-delay-8,
.transform-area.show .slide-left-delay-0,
.transform-area.show .slide-left-delay-1,
.transform-area.show .slide-left-delay-2,
.transform-area.show .slide-left-delay-3,
.transform-area.show .slide-left-delay-4,
.transform-area.show .slide-left-delay-5,
.transform-area.show .slide-left-delay-6,
.transform-area.show .slide-left-delay-7,
.transform-area.show .slide-left-delay-8,
.transform-area.show .slide-right-delay-0,
.transform-area.show .slide-right-delay-1,
.transform-area.show .slide-right-delay-2,
.transform-area.show .slide-right-delay-3,
.transform-area.show .slide-right-delay-4,
.transform-area.show .slide-right-delay-5,
.transform-area.show .slide-right-delay-6,
.transform-area.show .slide-right-delay-7,
.transform-area.show .slide-right-delay-8,
.transform-area.show .slide-right-delay-9,
.transform-area.show .slide-right-delay-10,
.transform-area.show .slide-right-delay-11,
.transform-area.show .slide-right-delay-12{
    opacity: 1;
    transform: translate(0,0);
}

.transform-area.show .grow-up-delay-0,
.transform-area.show .grow-up-delay-1,
.transform-area.show .grow-up-delay-2,
.transform-area.show .grow-up-delay-3,
.transform-area.show .grow-up-delay-4,
.transform-area.show .grow-up-delay-5,
.transform-area.show .grow-up-delay-6,
.transform-area.show .grow-up-delay-7,
.transform-area.show .grow-up-delay-8{
    opacity: 1;
    transform: scale(1);
}
```

```html
 <div class="area transform-area">
     <div class="item1 grow-up-delay-0"></div>
</div>
    <script>
        $(function(){
            $('.area1').addClass('show');
            setTimeout(function(){
                $('.area2').addClass('show');
            }, 1000);

            $(window).scroll(function(){
                var top = $(this).scrollTop();
                if(top > xxx){
                    $('area3').addClass('show');
                }
            })
        })
    </script>
```

### 7. 返回顶部

#### 基本功能

```html
<style>
    #backTop{position:fixed; bottom: 15px; right: 25px; background:url("backtop.png")no-repeat left top;width: 50px; height: 50px; transition: all linear .2s;}
    #backTop:hover{background-position: left bottom;}
</style>
<a href="javascript:void(false)" id="backTop" title="点击回到顶部"></a>
```

```html
<script src="js/jquery-1.7.2.min.js"></script>
<script>
    $(document).ready(function(){
    $('#backTop').hide()
    $(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() > 50){
                $('#backTop').fadeIn(200);
            }else{
                $('#backTop').fadeOut(200);
            }
        })
        $("#backTop").click(function(){
            $('body,html').animate({
                scrollTop:0
            },500);
            return false;
        })
    })
})

</script>
```

![taHO1Z7Nxr](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/frJb8bNJ4L.gif)

#### 添加文字提示



### 8. 吸顶

```javascript
var offsetTop = $('.news').offset().top; //距离window顶部的距离
var mainH = $('.main').innerHeight();	 //参考的高度盒
var slideH = $('.slide').innerHeight();	 //自身盒的高度
var absPos = mainH + offsetTop - slideH;
$(window).scroll(function(){
    var top = $(this).scrollTop();
    if(top > offsetTop && top < absPos){
        $('.slide').css({position:'fixed',top:0})
    }else if(top > absPos){
        $('.slide').css({position:'absolute',top:absPos - offsetTop})
    }else{
        $('.slide').css({position:'static'})
    }

})
```

![wwSBlKMG0i](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/COlBcSTrPc.gif)









## 3. jquery常用方法封装

### 1. 表单数据转JSON

```javascript
(function ($) {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        var array = this.serializeArray();
        var str = this.serialize();
        $(array).each(function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value);
                } else {
                    serializeObj[this.name] = [serializeObj[this.name], this.value];
                }
            } else {
                serializeObj[this.name] = this.value;
            }
        });
        return serializeObj;
    };
})(jQuery);
```

