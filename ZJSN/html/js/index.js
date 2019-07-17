$("div.grallery_title").click(function(e){
    var $div=$(e.target);
    if($div.is('[data-target="#photo"]')==true){
      $div
      .addClass("active")
      .siblings().removeClass("active")
    }
  })