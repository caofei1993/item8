/**
 * Created by Administrator on 2017/8/1.
 */


var mySwiper = new Swiper(".swiper-container",{
    loop:true,
    effect:"effect",
    pagination:".swiper-pagination",
    nextButton : '.swiper-button-next',
    prevButton : '.swiper-button-prev',
    onInit:function(swiper){

    },
    onSlideChangeEnd:function(swiper){

    }

});


$('.weui-tabbar__item').on('click',function(){
    $(this).addClass('weui-bar__item_on').siblings('.weui-tabbar__item').removeClass('weui-bar__item_on');
    var index = $(this).index();
    $('.weui-tab__content').eq(index).show().siblings().hide();
});





    var $androidActionSheet = $('#androidActionsheet');
    var $androidMask = $androidActionSheet.find('.weui-mask');

    $("#showAndroidActionSheet").on('click', function(){
        $androidActionSheet.fadeIn(200);
        $androidMask.on('click',function () {
            $androidActionSheet.fadeOut(200);
        });
    });


   $("#box2").on("click",function(){
       $("#log").removeClass("hid");

       $("#log").addClass("active")
   });
  var log = document.getElementById("log");
  var bo =document.getElementById("androidActionsheet");
  var box2=document.getElementById("box2");
  box2.onclick =function(){
    bo.style.display="none";
    var timer =setTimeout(function(){
          log.style.display ="none";
    },1000);

};

  var box3=document.getElementById("box3");
  var log1 = document.getElementById("log1");
  box3.onclick =function(){
    bo.style.display="none";
    log1.style.display ="block";
      var timer =setTimeout(function(){
          log1.style.display ="none";
      },1000);

  };






