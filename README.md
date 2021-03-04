# MyJS

learn js code

## WebAPIs 总结

### 1.获取元素

#### 1.1 getElementById()

```js
document.getElementById("time");
```

作用：根据ID获取元素对象
参数：id值，区分大小写的字符串
返回值：元素对象 或 null

#### 1.2 getElementsByTagName()

```js
// 根据标签名获取，
document.getElementsByTagName('标签名') 
// 或者 
element.getElementsByTagName('标签名')
```

作用：根据标签名获取元素对象
参数：标签名
返回值：元素对象集合（伪数组，数组元素是元素对象）

#### 1.3 querySelector()

```js
 var first = document.querySelector(".box");
```

返回指定选择器的第一个元素对象 切记 里面的选择器需要加符号 .box #nav



#### 1.4 querySelectorAll()

```js
var allBox = document.querySelectorAll(".box");
```

返回指定选择器的所有元素对象集合



#### 1.5 获取特殊元素

```js
    // 1.获取body元素
    var bodyEle = document.body;
    console.log(bodyEle);
    console.dir(bodyEle);

    // 2.获取html元素
    // var htmlEle = document.html;
    var htmlEle = document.documentElement;
    console.log(htmlEle);
    console.dir(htmlEle);
```

### 2.事件三要素

```js
    // 点击一个按钮，弹出对话框
    // 1. 事件是有三部分组成  事件源  事件类型  事件处理程序   我们也称为事件三要素
    //(1) 事件源 事件被触发的对象   谁  按钮
    var btn = document.getElementById("btn");
    //(2) 事件类型  如何触发 什么事件 比如鼠标点击(onclick) 还是鼠标经过 还是键盘按下
    //(3) 事件处理程序  通过一个函数赋值的方式 完成
    btn.onclick = function () {
      alert("我来了，然而你居然不是唐伯虎！哼~");
    };
```

#### 2.1 常见的鼠标事件

| 鼠标事件    | 触发条件                 |
| ----------- | ------------------------ |
| onclick     | 鼠标点击左键触发         |
| onmouseover | 鼠标经过触发             |
| onmouseout  | 鼠标离开触发             |
| onfocus     | onfocus 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发         |
| onmousemove | 鼠标移动触发             |
| onmouseup   | 鼠标弹起触发             |
| onmousedown | 鼠标按下触发             |







### 3.执行事件步骤

```js
    // 执行事件步骤
    // 点击div 控制台输出 我被选中了
    // 1.事件源
    var div = document.querySelector("div");
    // 2.绑定事件
    // div.onclick
    // 3.添加事件处理程序
    div.onclick = function () {
      console.log("我被选中了");
    };
```





### 4.操作元素

#### 4.1 innerText和innerHTML的区别

- 获取内容时的区别：

​	innerText会去除空格和换行，而innerHTML会保留空格和换行	

- 设置内容时的区别：

​	innerText不会识别html，而innerHTML会识别

```js
	// innerText 和 innerHTML的区别
    // 1. innerText 不识别html标签 非标准  去除空格和换行
    var div = document.querySelector("div");
    // div.innerText = "<strong>今天是：</strong>2021年3月3日";

    // 2. innerHTML 识别html标签 W3C标准 保留空格和换行的
    div.innerHTML = "<strong>今天是：</strong>2021年3月3日";

    // 这两个属性是可读写的  可以获取元素里面的内容
    var p = document.querySelector("p");
    console.log(p.innerText);
    console.log(p.innerHTML);
```

#### 4.2 修改元素属性

```js
    // 修改元素属性  src
    // 1. 获取元素
    var ldh = document.querySelector("#ldh");
    var zxy = document.querySelector("#zxy");
    var img = document.querySelector("img");
    // 2. 注册事件  处理程序
    zxy.onclick = function () {
      // 点击后发生变化
      img.src = "images/zxy.jpg";
      img.title = "张学友";
    };

    ldh.onclick = function () {
      // 点击后发生变化
      img.src = "images/ldh.jpg";// 修改元素属性
      img.title = "刘德华";
    };
```



#### 4.3 样式属性操作

通过 JS 修改元素的大小、颜色、位置等样式。

常用：

```js
1. element.style 行内样式操作
2. element.className 类名样式操作
```

方式1

元素对象的style属性也是一个对象！

元素对象.style.样式属性 = 值;

```js
<body>
    <div></div>
    <script>
        // 1. 获取元素
        var div = document.querySelector('div');
        // 2. 注册事件 处理程序
        div.onclick = function() {
            // div.style里面的属性 采取驼峰命名法 
            this.style.backgroundColor = 'purple';
            this.style.width = '250px';
        }
    </script>
</body>
```

方式2

元素对象.className = 值;

因为class是关键字，所有使用className。

```js
<body>
    <div class="first">文本</div>
    <script>
        // 1. 使用 element.style 获得修改元素样式  如果样式比较少 或者 功能简单的情况下使用
        var test = document.querySelector('div');
        test.onclick = function() {
            // this.style.backgroundColor = 'purple';
            // this.style.color = '#fff';
            // this.style.fontSize = '25px';
            // this.style.marginTop = '100px';

            // 2. 我们可以通过 修改元素的className更改元素的样式 适合于样式较多或者功能复杂的情况
            // 3. 如果想要保留原先的类名，我们可以这么做 多类名选择器
            // this.className = 'change';
            this.className = 'first change';
        }
    </script>
</body>
```

