# bootstrap框架
这个项目用来是练手，主要掌握Bootstrap框架，学习到很多新东西，可以直接去官方里面有说明。

重点的代码说明：

# 1.重点的css:

    /*弹性盒子*/
    
    display: flex;
    
    /*灵活的项目将垂直显示，正如一个列一样。*/
    
    flex-direction: column;
    
    /*主轴（横轴）方向上的对齐方式*/
    
    justify-content: center;
    
    /*居中对齐弹性盒*/
    
    align-items: flex-start;
    
 # 2.bootstrap框架中有哪些重要的知识点？
 
 2.0声明viewport视口
 
 <meta name="viewport" content="width=device-width">;

1.width=device-width;表示宽度是设备屏幕的宽度；

2.initial-scale=1.0;表示初始化缩放比例，与最小缩放比例值一致；

3.minimum-scale=1.0;表示最小缩放比较；

4.maxiumum-scale=1.0;表示最大缩放比较；

5.user-scalable=no;表示用户是否可以调整缩放比例；

# 2.1 栅格选项

Bootstrap 网格系统如何跨多个设备工作：

1.clo-xs-* (超小设备手机 <768px) 
    
2.col-sm-* (小型设备平板和电脑>=768px)

3.clo-md-* (中型设备台式电脑>=992px)

4.col-sm-* (大型设备台式电脑>=1200px)
      
# 2.2栅格系统

 Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。它包含了易于使用的预定义类，还有强大的mixin 用于生成更具语义的布局。

　　栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。Bootstrap 栅格系统的工作原理:

　　1. 行（row）必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。

　　2. 通过行（row）在水平方向创建一组列（column）。

　　3. 内容应当放置于列（column）内，并且，只有列（column）可以作为行（row）的直接子元素。

　　4. 类似 .row 和 .col-xs-4 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。

　　5. 通过为列（column）设置 padding 属性，从而创建列与列之间的间隔（gutter）。通过为 .row元素设置负值 margin 从而抵消掉为 .container 元素设置的 padding，也就间接为行（row）所包含的列（column）抵消掉了padding。

　　6. 如果一行（row）中包含了的列（column）大于 12，多余的列（column）所在的元素将被作为一个整体另起一行排列。
  
  
  Bootstrap框架官方里面有很多详细的，可以去看看！
