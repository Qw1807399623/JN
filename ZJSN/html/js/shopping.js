// 购物车
var car=document.getElementsByClassName("shoppingcar")[0];
var buy=document.getElementsByClassName("buy_shop")[0].children[2].children[2];
console.log(buy);
car.onclick=function(e){
    var btn=e.target;
    if(btn.className=="btnn"){
        var div=btn.parentNode.children[1];
        var n=parseInt(div.innerHTML);
        if(btn.innerHTML=="+"){
            n++;
        }else if(btn.innerHTML=="-"&&n>0){
            n--;
        }
        div.innerHTML=n;
        var menu=btn.parentNode.parentNode.parentNode;
        var price=parseFloat(menu.children[3].innerHTML.slice(1));
        var subtotal=price*n;
        var total=menu.children[5];
        total.innerHTML=`￥${subtotal.toFixed(2)}`
        var prices=car.querySelectorAll(".shop_menu .row .total");
        var sum=0
        for(var item of prices){
            sum+=parseFloat(item.innerHTML.slice(1));
        }
        buy.innerHTML=`￥${sum.toFixed(2)}`
    }
}
// 全选
var chbAll=document.getElementById("all");
var chbs=document.querySelectorAll("div.shop_menu>div input")
console.log(chbAll);
chbAll.onclick=function(){
    var chbAll=this;
    for(var chb of chbs){
        chb.checked=chbAll.checked
    }
}
for(var chb of chbs){
    chb.onclick=function(){
        var chb=this;
        if(chb.checked==false){
            chbAll.checked=false;
        }else{
            var unchecked=document.querySelector("div.shop_menu>div input:not(:checked)")
            if(unchecked===null){
                chbAll.checked=true;
            }
        }
    }
}










