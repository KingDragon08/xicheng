    //只修改指定ul下的li列表
   var list = document.getElementsByTagName("#sidebar>nav>ul>li");
   for(var i = 0;i<list.length;i++){
     list[i].onclick = function(){
      //将节点的颜色变成红色
      this.style.border-bottom = "3px solid blue";
	}
	}
