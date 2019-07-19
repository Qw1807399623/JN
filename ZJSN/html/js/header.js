$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("#header");
            $(`<link rel="stylesheet" href="css/index.css">`)
        }
    })
    $.ajax({
        url:"footer.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("#footer");
        }
    })
})
