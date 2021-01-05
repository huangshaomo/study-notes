1. typora-copy-images-to: svn-assets

   # svn学习笔记

   ## 安装说明

   我们使用gitee + svn的形式完成这个demo

   **Gitee**

   首先在gitee上新建一个仓库，如下。

   ![chrome_21kvfd5kWb](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_21kvfd5kWb.png)

   然后找到`管理`

   ![chrome_08oYz2nidL](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_08oYz2nidL.png)

   

   在下面找到`启用SVN访问`，打钩

   ![chrome_ndGKXj9c2t](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_ndGKXj9c2t.png)

   然后返回`代码`，点击`克隆/下载`，选择`svn`地址，记住下面的地址，到时候会用到。

   ![chrome_F4LHO83c2U](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_F4LHO83c2U.png)

   

   **SVN**

   首先下载[乌龟客户端](https://tortoisesvn.net/downloads.html)：根据系统位数选择相应客户端进行安装。

   <img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_PmOVFGa0Ee.png" alt="chrome_PmOVFGa0Ee"  />

   如果需要用命令行操作，请务必勾选`command line client tool`为`will be install on local hard driver`,不用命令行的跳过这一步。

   <img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_RKSMPE6RTL.png" alt="chrome_RKSMPE6RTL" style="zoom:80%;" />

   然后一路next即可安装。安装完毕后，在任意地方右键查看快捷菜单。发现`TortoiseSVN`即表示安装成功。

   ![ObKw5s28CG](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/ObKw5s28CG.png)

   如果勾选了安装命令行工具，那么输入命令SVN，有如下提示也表示安装成功

   ![chrome_xN2L2xBjbI](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_xN2L2xBjbI.png)

   但是此时菜单全是英文的，如果你不习惯英文，可以去下载语言包，记得下对系统位数

   ![chrome_AB6knobzuy](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_AB6knobzuy.png)

   安装完语言包之后，可以右键进入`setting`设置。

   ![chrome_DwQmOQJ6MY](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_DwQmOQJ6MY.png)

   选中之后，点确定，不出意外，现在的语言已经切换到中文了。

   

   ## 使用说明

   ### 检出项目

   假设项目已经存在远程服务器的仓库里，那么现在第一步就是把他检出（克隆）到本地。

   1. 首先在你想要的位置创建一个空文件夹，然后在文件夹内右键选中svn检出（SVN checkout）

   ![yhc82QpSlt](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/yhc82QpSlt.png)

   2. 填入我们在gitee部分克隆的地址，填入版本库URL，然后点击确定。

      ![TortoiseProc_UJgLUTe2om](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_UJgLUTe2om.png)

   此时会弹出一个对话框让你输入账号密码，输入你的账号密码即可。记得勾选保存认证，不然每次操作都会让你输入。

   ![TortoiseProc_SM786bomf7](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_SM786bomf7.png)

   

   等待一下就可以检出完毕。

   ![TortoiseProc_fI01BBdGI7](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_fI01BBdGI7.png)

   此时在你的目录下就能看到你的项目，现在可以开始愉快的工作了。

   ![explorer_4Cny5weNfL](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/explorer_4Cny5weNfL.png)

   （用下面的方式也可以看到，克隆的文件和远程服务器的一致）

   ![lT0ZrCqKhe](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/lT0ZrCqKhe.png)

   **Repo-browser(版本库浏览器)**：连接的就是你远程服务器中的项目。

   **checkout(检出/克隆)**：把远程服务器中的项目克隆到你本地。

   

   ### 导入项目

   有时候你已经在本地建立好了项目或者项目已经写完了，需要把你项目推到SVN上，此时应怎么做呢？

   比如我现在有个项目叫SVNProject，我想把它传到SVN上。

   1. 右键选择版本库浏览器。

      ![lT0ZrCqKhe](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/lT0ZrCqKhe.png)

   2. 在版本库浏览器中`右键`，选择`添加文件夹(add folder)`，选中你想要上传的文件夹

      <img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/FrFgOBDsia-1609229072998.png" alt="TortoiseProc_5SmEm18S6n" style="zoom:80%;" />

   回车之后，会弹出一个Message弹窗，务必要输入提交信息。这样别人才能知道你干了什么。

   <img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_oBnqQBiRRH.png" alt="TortoiseProc_oBnqQBiRRH" style="zoom:80%;" />

   导入成功后就能看到目录已经加进来了

   <img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_my0g4vhdg9.png" alt="TortoiseProc_my0g4vhdg9" style="zoom:80%;" />

   此时打开gitee仓库，你一样可以看到文件被加进来了

   ![chrome_LPQmXuhBfa](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_LPQmXuhBfa.png)

   但是，不要以为上传成功就可以了。你还得重新检出（克隆）到本地，因为此刻远程服务器中的项目已经发生了变化，但本地的还没发生改变，必须重新检出（克隆）到本地，这时的项目才是受SVN控制的，务必记得！

   重新检出(克隆)前：

   ![explorer_4Cny5weNfL](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/explorer_4Cny5weNfL.png)

   重新检出(克隆)后

   在版本库浏览器右键`svnProject`检出

   <img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_y6P8nEDQDG.png" alt="TortoiseProc_y6P8nEDQDG" style="zoom:80%;" />

   检出后你会发现本地项目也发生了改变

   ![explorer_jXWs2Jf9IT](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/explorer_jXWs2Jf9IT.png)

   并且在项目里，右键菜单也发生了改变

   ![uNJGSAVfAC](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/uNJGSAVfAC.png)

   

   ### 提交

   #### 蓝色

   > 蓝色代表文件已加入提交列表，但还未正式提交。

   

   首先在本地创建一个文件`我是新文件.txt`，然后右键Add，把文件加入上传提交列表中

   ![FrFgOBDsia](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_Z2VLm0eN8W.png)

   加入完成后

   <img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/explorer_SQmVHUOmj8.png" alt="TortoiseProc_Z2VLm0eN8W" style="zoom:80%;" />

   你会发现文件多了个 蓝色加号

   ![explorer_SQmVHUOmj8](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_YQ9KIMfhSy.png)

   

   但文件此时还未提交，打开版本库浏览器（Repo-browser）就可以发现文件并未存在于远端服务器中，这样说明

   ![TortoiseProc_YQ9KIMfhSy](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_2b4kZdcdg9.png)

   **蓝色+号代表文件已加入提交列表，但还未正式提交。**

   

   #### 绿色

   >  绿色代表文件已经同步到远端服务器项目。

   在项目内右键`SVN commit`(提交)，进入提交页面，如下（svn会自动找出Add后的文件）

   <img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_T1BbIcnYXW.png" alt="TortoiseProc_2b4kZdcdg9" style="zoom:80%;" />

   确认提交后，就会将文件提交到远端服务器项目中。

   此时在gitee中可以看到提交后的文件，也可以在版本库浏览器中看到（Repo-browser）

   ![chrome_T1BbIcnYXW](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/explorer_WfPaOjvjTs.png)

   并且蓝色+号变成了绿色的勾勾。说明

   ![explorer_WfPaOjvjTs](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/notepad_wyfG6PckbA.png)

   **绿色代表文件已经同步到远端服务器项目中。**

   

   #### 红色

   > 红色代表文件已修改

   假如我现在在`我是新项目.txt`中加了一行字，然后保存。

   ![notepad_wyfG6PckbA](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/explorer_zFo1tokevI.png)

   ![explorer_zFo1tokevI](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/Qbd1fYYmLy.png)

   发现现在变成了红色，**红色表示已修改**，文件修改只需再次（svn commit）提交即可。

   

   记得随时检查你的文件状态，如果没有添加到版本控制里要及时添加进去，不然你的文件提交不上去。

   ### 删除

   删除很简单，本地删除了文件，如果要同步到远程服务器项目中的话，也需要提交。

   ![Qbd1fYYmLy](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/bFv0ugiMdt.png)

   

   ### 更新

   假如你和B同学在协作。B同学写完代码提交到了SVN上，如果你想获取最新修改，就需要选择更新（如果服务器上已经有别人提交过的新的，你是提交不上去的，必须先更新再提交），如

   A

   ```javascript
   让开，我要开始装逼了A！
   左青龙，右白虎，老牛在胸间，刀口在胸前
   ```

   BB

   ```
   让开，我要开始装逼了B！
   看我的左鞭腿，右刺拳！
   ```

   此时A提交后，就会报错，提示必须先提交更新。

   ![TortoiseProc_8UkwxmlEVG](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/IgVBwnutQP.png)

   但怎么知道服务器有没有更新？可以在提交之前右键`更新`一下

   ![bFv0ugiMdt](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_kSBIP0nsV1.png)

   或者右键检查修改，然后检查版本库，就能看到服务器上改了哪些文件。

   ![IgVBwnutQP](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseMerge_biCRFjjmNZ.png)

   

   绿色的表示修改过的。双击文件查看详情

   <img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/explorer_0TtBnrzcBc.png" alt="TortoiseProc_kSBIP0nsV1" style="zoom:80%;" />

   左边代表服务器上的代码，右边表示本地的代码

   ![TortoiseMerge_biCRFjjmNZ](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/notepad_m7TdVWIrq8.png)

   

   有冲突的话我们就需要Svn update(更新)下来解决冲突

   ![TortoiseProc_8UkwxmlEVG](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/IgVBwnutQP.png)

   

   更新后，会产生多个文件，你只需打开那个冲突文件，按照需求解决冲突即可

   ![explorer_0TtBnrzcBc](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/notepad_9gl2nPOgp8.png)

   ![notepad_m7TdVWIrq8](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/ArlPAeuJEq.png)

   - mine（我的）：表示我当前本地的代码，范围在 <<<< .mine 到||||||
   - r4：代表的是版本号，是最新版本的上一个版本，也就是B未提交之前的代码，范围在||||| 到 ===
   - r5：代表的是版本号：表示的是最新版本号，最新的一次提交也就是B提交的代码，范围在==== 到 >>>>>

   比如我这样解决冲突

   ![notepad_9gl2nPOgp8](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_VnytnO679m.png)

   冲突解决后，还需要告诉SVN冲突已解决

   ![ArlPAeuJEq](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/explorer_XHxsXGhOpm.png)

   这样代表冲突已解决。

   <img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/chrome_MUQS1HPHJx.png" alt="TortoiseProc_VnytnO679m" style="zoom:80%;" />

   

   此时A中的代码就是解决冲突后的代码

   ![explorer_XHxsXGhOpm](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_5SmEm18S6n.png)

   此时再提交，就不会出现与B提交的代码冲突了，会把解决冲突后的A代码直接覆盖到文件中。

   在gitee可以看到，确实是把解决冲突后的A代码覆盖上去了。

   ![chrome_MUQS1HPHJx](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/adj7lWsaOM.png)

   

   ### 查看日志

   选择显示日志，可以看出团队里面的人干了什么。

   ![adj7lWsaOM](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/notepad_rStbfo59gG.png)

   可以看出谁谁谁，什么时间，干了什么事。最后那一列信息是自己提交的时候写的。建议大家提交时务必要填写提交信息，这样别人一看就知道你干了什么。提交信息对于自己也是有好处的，时间长了也能看到当初做了什么。

   ![TortoiseProc_X4Ps6LKIBo](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_X4Ps6LKIBo.png)

   

   ### 版本回滚

   **情况一**：代码已改，但还未提交，可以使用（revert）还原功能。

   比如我在`我是新文件.txt`，加入下面的代码

   ```
   一giao窝里giao giao
   ```

   ![notepad_rStbfo59gG](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/MeL2T0MzlE.png)

   但我觉得这句话太Low了，不符合我的气质，可我已经保存了，就可以使用（revert）还原回未修改的阶段

   <img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_lXXckAS4gu.png" alt="MeL2T0MzlE" style="zoom:80%;" />

   还原成功后

   ![TortoiseProc_Oei6pfrDUk](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_Oei6pfrDUk.png)

   

   **情况二**：代码已改，且已提交（commit），可以使用版本回滚功能。

   比如我写了如下代码，且不小心提交了。

   ![notepad_rStbfo59gG](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/MeL2T0MzlE.png)

   右键文件（update to revision）更新至版本，通过查看日志来选择版本，然后回滚即可

   ![FkvXSswdxm](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/notepad_617jQLOEYw.png)

   比如我想回到上一个版本。就是6

   ![TortoiseProc_lXXckAS4gu](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_qyUOgNCU0x.png)

   

   确认后，文件就回退到了上一个版本

   ![notepad_617jQLOEYw](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_kzPS6TftFo.png)

   

   不过有时我们不止是想回退这个文件的版本，而是想回退到整个项目的上一个版本，此时我们可以新建个文件夹检出（克隆）指定版本。

   ![TortoiseProc_kzPS6TftFo](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/zGSJNVJNfF-1609235994899.png)

   

   ### 版本控制

   一般开发的项目都不会只有一个版本，通过不断的迭代我们会逐渐拥有多个版本的项目代码，一般是如何进行版本的控制的呢。

   版本控制有好几种方法，如下。

   

   1. 在提交发布一个版本时添加版本信息，这是最简单的一种方法。

   ![TortoiseProc_qyUOgNCU0x](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/5Lchky4Z9J.png)

   2. 每次发布一个版本时应该打标签。右键选择分支/标记。在至路径以版本号打上标签即可

      ![zGSJNVJNfF](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/FkvXSswdxm.png)

   **锁定和解锁**

   当项目在本地时不想被他人修改，可以选择锁定文件

   ![8UZeXqgEOH](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/8UZeXqgEOH.png)

   <img src="https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_0LKX3geOM4.png" alt="TortoiseProc_0LKX3geOM4" style="zoom:80%;" />

   

   锁定后别人边无法编辑你的文件，如果需要解锁，使用Release lock

   ![IxTboc0AYY](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/IxTboc0AYY.png)

   

   **文件对比**

   ![5Lchky4Z9J](https://hsm-typora-img.oss-cn-beijing.aliyuncs.com/img/TortoiseProc_8UkwxmlEVG.png)

   - Diff later表示

   - Diff with '文件'：表示对比该远程文件与本地文件
   - Diff with previous version :表示对比同一用户远程文件上一版本与当前本地文件。
