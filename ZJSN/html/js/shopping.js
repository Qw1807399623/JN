// 购物车
var car=document.getElementsByClassName("shoppingcar")[0];
var buy=document.getElementsByClassName("buy_shop")[0].children[2].children[2];
var mytotal=document.getElementsByClassName("total")
function calc(){
    var truechb=car.querySelectorAll(".shop_menu input");
    console.log(truechb)
    buy.innerHTML = `￥0.00`;
    for(var i=0,sum=0;i<truechb.length;i++){
        if(truechb[i].checked==true){
            var total=mytotal[i].innerHTML.slice(1);
            sum+=parseFloat(total);
            buy.innerHTML=`￥${sum.toFixed(2)}`
        }
    }
}
calc();
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
        var totals=menu.children[5];
        totals.innerHTML=`￥${subtotal.toFixed(2)}`
        calc();
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
    calc()
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
        calc()
    }
}










