# learn js

learn js code

# WebAPIs 总结

## day1

学习目标

- 能够通过 ID 来获取元素

```js
语法：document.getElementById(id)
作用：根据ID获取元素对象
参数：id值，区分大小写的字符串
返回值：元素对象 或 null
```

- 能够通过标签名来获取元素

```js
语法：document.getElementsByTagName('标签名') 或者 element.getElementsByTagName('标签名')
作用：根据标签名获取元素对象
参数：标签名
返回值：元素对象集合（伪数组，数组元素是元素对象）
```

注意：getElementsByTagName()获取到是动态集合，即：当页面增加了标签，这个集合中也就增加了元素。

- 能够通过 class 来获取元素

```js
document.getElementsByClassName("类名");
```

- 能够通过选择器来获取元素

```js
document.querySelector("选择器");
document.querySelectorAll("选择器");
```

- 能够获取 body 和 html 元素

```js
document.body; //返回body元素对象
document.documentElement; // 返回HTML元素对象
```

- 能够给元素注册事件
  事件三要素：
  1. 事件源（谁）：触发事件的元素
  2. 事件类型（什么事件）：例如 onclick 点击事件
  3. 事件处理程序（做啥）：事件触发后要执行的代码(函数形式)，事件处理函数

```js
<body>
    <button id="btn">唐伯虎</button>
    <script>
        // 点击一个按钮，弹出对话框
        // 1. 事件是有三部分组成  事件源  事件类型  事件处理程序   我们也称为事件三要素
        //(1) 事件源 事件被触发的对象   谁  按钮
        var btn = document.getElementById('btn');
        //(2) 事件类型  如何触发 什么事件 比如鼠标点击(onclick) 还是鼠标经过 还是键盘按下
        //(3) 事件处理程序  通过一个函数赋值的方式 完成
        btn.onclick = function() {
            alert('点秋香');
        }
    </script>
</body>
```

执行事件的步骤：

1. 获取事件源
2. 注册事件（绑定事件）
3. 添加事件处理程序（采取函数赋值形式）

常见的鼠标事件
|鼠标事件|触发条件|
|--|--|
|onclick | 鼠标点击左键触发|
|onmouseover | 鼠标经过触发 |
| onmouseout|鼠标离开触发 |
|onfocus |获得鼠标焦点触发 |
| onblur|失去鼠标焦点触发 |
|onmousemove |鼠标移动触发 |
| onmouseup| 鼠标弹起触发|
| onmousedown| 鼠标按下触发|

- 能够修改元素的内容

```js
    <body>
        <button>显示当前系统时间</button>
        <div>某个时间</div>
        <p>1123</p>

    </body>
    <script>
        // 当我们点击了按钮，  div里面的文字会发生变化
        // 1. 获取元素
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        // 2.注册事件
        btn.onclick = function() {
            // div.innerText = '2019-6-6';
            div.innerHTML = getDate();
        }
        function getDate() {
            var date = new Date();
            // 我们写一个 2019年 5月 1日 星期三
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var dates = date.getDate();
            var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            var day = date.getDay();
            return '今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day];
        }
    </script>
```

- 能够区分 innerText 和 innerHTML 的区别

```js
element.innerText; // 从起始位置到终止位置的内容，但它去除HTML标签，同时空格和换行也会去掉
element.innerHTML; // 从起始位置到终止位置的全部内容，包括HTML标签，同时保留空格和换行

/*
获取内容时的区别：
    innerText会去除空格和换行，而innerHTML会保留空格和换行;
设置内容时的区别：
innerText 不会识别 html，而 innerHTML 会识别
*/
```

- 能够修改像 div 这类普通元素的属性

```
// 常用元素属性操作
1.innerText,innerHTML 改变元素内容
2.src,href
3.id,alt,title

// 获取属性的值
元素对象.属性名

// 设置属性的值
元素对象.属性名 = 值
```

```js
<body>
    <button id="ldh">刘德华</button>
    <button id="zxy">张学友</button> <br>
    <img src="images/ldh.jpg" alt="" title="刘德华">
    <script>
        // 修改元素属性  src
        // 1. 获取元素
        var ldh = document.getElementById('ldh');
        var zxy = document.getElementById('zxy');
        var img = document.querySelector('img');
        // 2. 注册事件  处理程序
        zxy.onclick = function() {
            img.src = 'images/zxy.jpg';
            img.title = '张学友思密达';
        }
        ldh.onclick = function() {
            img.src = 'images/ldh.jpg';
            img.title = '刘德华';
        }
    </script>
</body>
```

- 能够修改表单元素的属性
  利用 DOM 可以操作如下表单元素的属性：
  `type , value , checked , selected , disabled`

```js
// 获取属性的值
元素对象.属性名

// 设置属性的值
元素对象.属性名 = 值
表单元素中有一些属性如：disabled , checked , selected , 元素对象的这些属性的值是布尔型
```

```js
<body>
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        // 1. 获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        // 2. 注册事件 处理程序
        btn.onclick = function() {
            // 表单里面的值 文字内容是通过 value 来修改的
            input.value = '被点击了';
            // 如果想要某个表单被禁用 不能再点击 disabled  我们想要这个按钮 button禁用
            // btn.disabled = true;
            this.disabled = true;
            // this 指向的是事件函数的调用者 btn
        }
    </script>
</body>
```

- 能够修改元素的样式属性
  可以通过 JS 修改元素的大小、颜色、位置等样式。
  常用方式：
  `1.element.style 行内样式操作`
  `2.element.className 类名样式操作`

  **方式 1：通过操作 style 属性**

  ```js
  元素对象的style属性也是一个对象！
  元素对象.style.样式属性 = 值;
  ```

  Tips:

  1. JS 里面的样式采取驼峰命名法，比如 fontSize、backgroundColor
  2. JS 修改 style 样式操作，产生的是行内样式，CSS 权重比较高

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

**方式 2：通过操作 className 属性**

```js
元素对象.className = 值；
因为class是关键字，所使用className；
```

Tips：

1. 如果样式修改较多，可以采取操作类名方式更改元素样式
2. class 因为是个保留字，因此使用 className 来操作元素类名属性
3. className 会直接更改元素的类名，会覆盖原先的类名

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

## day2

学习目标

- 能够说出排他操作的一般实现步骤

- 能够使用 html5 中的 dataset 方式操作自定义属性

- 能够根据提示完成百度换肤的案例

- 能够根据提示完成全选案例

- 能够根据提示完成 tab 栏切换案例

- 能够区分元素节点、文本节点、属性节点

- 能够获取指定元素的父元素

- 能够获取指定元素的所有子元素

- 能够说出 childNodes 和 children 的区别

- 能够使用 createElement 创建页面元素
