C语言

**主板**：主板的英文是Mainboard，是电脑各个配件的连接平台，相当于人体的血管、神经和骨骼系统。主板上最关键的是芯片组，**芯片组**的型号决定了主板的型号，**芯片组决定了主板上各种插槽、总线、接口可以支持的速度和功能**，有的芯片组还集成了显示、声音、网络等功能。 电脑的内存需要插到主板的特定插槽中。其他电脑配件例如显卡、声卡等通过插槽垂直插在主板上，硬盘、光驱、软驱等内部存储设备通过数据线和主板上的各类接口连接。将电源通过连线插到主板上之后，由主板向电脑各个配件供电，主板上还有连接各种外部设备的接口。 所有的电脑硬件信息都保存在主板上的CMOS中，通过BIOS系统我们可以轻易的调整各种配置。主板的品牌包括华硕、微星、精英、联想、技嘉、升技、磐英、承启等。



硬盘：硬盘是用来存储数据的地方：分为固态硬盘和机械硬盘

1. 固态硬盘：通过**电路**来读写数据，但是因为与内存的控制方式不一样，速度也不及内存。
2. 机械硬盘：通过**电机**来读写数据，转速肯定没有电的传输速度（几乎是光速）快

内存：内存只是一个存放数据和指令的地方，并不能进行运算，如果要进行运算，必须要读取到CPU内部才能进行加法运算

对于读写速度，内存 > 固态硬盘 > 机械硬盘。

CPU:CPU 是一个复杂的计算机部件，它内部又包含很多多的小零件，如下图所示：



![chrome_3UAkWwUXMC](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_3UAkWwUXMC.png)

1. 运算单元：是 CPU 癿大脑，负责加减乘除、比较、位秱等运算工作，歯种运算都有对应癿电路支持，速度径快。

2. 寄存器：

3. 缓存：虽然内容的读取速度已经很快了，但和CPU比起来，也不是一个数量级的，因此与其把计算的结果返回给内容，还不如再复制一份结果存到缓存中，这样，对于可以将使用频繁的数据暂时读取到缓冲，需要同一地址上的数据时，就不用大老远地再去访问内容，直接从缓存中读取不更快。

   

CPU的运算可以从内存和地址中拿到数值进行运算

CPU的（1小时）处理数据的大小由寄存器的为何和数据总线的宽度（也即有多少根数据总线）决定，我们通常说的多少位的CPU，除了可以理解为寄存器的位数，也可以理解为数据总线的宽度，通常情况下他们 是相等 的



**虚拟地址**：把程序给出的地址看做是一种**虚拟地址（virtual address）**，然后通过内存映射机制，将这个虚拟地址转换成真实的物理地址，之所以需要虚拟地址，是因为不同的程序可能会使用同一个地址，这样就会造成其中一个程序无法运行或者强行占用导致另一个程序崩溃，这对于需要安全稳定的计算机环境的用户来说是不能容忍的，因此，程序给出的地址系统会把它看成虚拟的地址，通过内存映射机制将虚拟地址与真实物理地址之间建立映射关系，这样，即使其他程序中也使用到了同一个地址，映射机制也会把它映射到其他的真实物理地址当中去，这样不同程序之间的地址空间就相互隔离开了，无论对一个程序如何进行操作，都不会修改到对方的内存，自然就不会导致其他程序奔溃了。

使用虚拟地址还有一个好处是能够提高内存的使用效率，因为一旦使用了虚拟地址，操作系统便有了管理内存的能力，就可以介入到内存管理工作中，不仅能灵活的控制数据换入换出的力度，更可以控制内存的读取权限。针对性使用习惯定制化的管理内存，自然就提高了内存的使用效率。



**中间层思想：**

所谓中间层，就是使用一种间接的方式来屏蔽复杂的底层细节，只给用户提供简单的调用接口。实际上，计算机的整个发展就是不断引入新的中间层的过程。

中间层：javaScript > C语言 > 汇编语言 > 机械指令，

最底层的是机械指令，经过层层套壳到JS，我们用到的经过几层封装后的指令，越顶层的制作的效率越快，越底层的执行效率越快。



**内存对齐**

计算机内存以字节(Byte)为单位划分的，理论上CPU可以访问内存中任意编号的字节，但实际情况并非如此。

CPU访问内存是通过地址总线来访问的。CPU一次性能处理几个字节的数据，就命令地址总线读取几个字节的数据，32为位的CPU一次可以处理4个字节的数据，那么每次就从内存读取四个字节的数据。少了浪费主频，多了没有用。64位的处理器也是这个道理，每次读取8个字节。而每次读取字节的个数，就称为步长，32位的步长为4。**将一个数据尽量放在一个步长之内，避免跨步长存储，这就称为内存对齐**，在32位编译模式下，默认以4字节对齐，在64位编译模式下，默认以8字节对齐



内存对齐并非C语言专有，它属于计算机的运行原理，C++，java,python等其他变成语言同样也会有内存对齐的问题。





### 字符集与字符编码

ASCII：一共有127位字符，字符编码方式为

UTF-8字符编码：



## C语言基础

### 数据类型：

Int：int的建议长度一般为一个机械字长，32 位环境下机器字长为 4 字节，64 位环境下机器字长为 8 字节。但在实际的为 Win XP、Win 7、Win 8、Win 10、Mac OS、Linux，在这些系统中中，int都为4。

short：表示短整形，至少占用 2 个字节。

long：表示长整形，short 的长度不能大于 int，long 的长度不能小于 int。

总结起来，它们的长度（所占字节数）关系为：

```
2 ≤ short ≤ int ≤ long
```

**这就意味着，short 并不一定真的”短“，long 也并不一定真的”长“，它们有可能和 int 占用相同的字节数。**

| 操作系统                                                  | short | int  | long |
| --------------------------------------------------------- | ----- | ---- | ---- |
| Win32、Win64（64 位 Windows）                             | 2     | 4    | 4    |
| 类 Unix 系统（包括 Unix、Linux、Mac OS、BSD、Solaris 等） | 2     | 4    | 8    |

在现代操作系统中，int 一般占用 4 个字节（Byte）的内存，共计 32 位（Bit）。如果不考虑正负数，当所有的位
都为 1 时它的值最大，为 $2^{32}$ - 1 = 4294,967,295 ≈ 43亿，但实际上如果去掉符号位，只有21.5亿左右，因为计算机是在补码的形式下计算了，最后再转为原码方便我们阅读。

short能接收的最大整数≈3万2【10的5次方】

int能接收的最大整数≈21.5亿【10的10次方】

long能接收的最大整数≈21.5（wind）  或  ≈ $10^{20}$(linux,Mac)





这几种不同的整形也有不同的输出类型，称之为**格式控制符**，分别是：

`hd`用来输入short int类型，hd是short decimal的简写。

`%d`用来输出Int类型，d是decimal的简写。

`%ld`用来输入long int类型，ld是long decimal的简写。

这些不同的输出类型的作用相当一个盒子的尺寸，虽然一般情况下我们用到的数都不会超过21.5亿，用的都是%d%尺寸的盒子接收，但对于过小或过大的数值来说会存在剩余字节空间或超出能存储的空间，这样显然对内容的使用率不高，因此对于数值不同的整形数值，使用不同的格式控制符。

注意：数据类型和格式控制符类型需要一致，否则编译器会发出警告，提示程序员可能会存在风险。





在计算机内存中，整数一律采用补码的形式来存储，这意味着，当读取整数时还要采用逆向的转换，也就是将补码转换为原码，方便人们记忆。













