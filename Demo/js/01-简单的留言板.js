// 获取元素
var btn = document.querySelector("button");
var text = document.querySelector("textarea");
var ul = document.querySelector("ul");

var time = new Date();
// 注册事件
// (1)点击发布按钮的时候
btn.onclick = function(){
    // 文本框判空
    if(text.value == ""){
        alert("您没有输入内容")
        return false;
    }else{
        // 获取文本框的内容
        console.log(text.value);
        // 1创建节点
        var li = document.createElement("li");
        li.style.listStyle = "none";
        // 2向节点添加文本框的内容
        li.innerHTML = time.toLocaleString() + "留言：" + text.value;
        // 2添加节点
        ul.insertBefore(li,ul.children[0]);
        text.value = "";
    }
}