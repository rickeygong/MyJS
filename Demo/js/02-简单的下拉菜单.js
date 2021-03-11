// 获取元素
var nav = document.querySelector(".nav");
var list = nav.children; 

// 
for(var i = 0; i < list.length ; i++){
    list[i].onmouseover = function(){
        this.children[1].style.display = "block";
    }
    list[i].onmouseout = function () {
        this.children[1].style.display = "none";
      };
}