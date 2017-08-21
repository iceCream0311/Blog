 $(function() {
     $(".header li").click(function(event) {
         event.preventDefault();
         switch ($(this).index()) {
             case 0:
                 $('html,body').animate({
                     scrollTop: '0px'
                 }, 500, "swing", function() {
                     $(".header li").removeClass("active");
                     $(".header li").eq(0).addClass("active")
                 });
                 break;
             case 1:
                 $('html,body').animate({
                     scrollTop: $(".introduce").height() + 'px'
                 }, 500, "swing", function() {
                     $(".header li").removeClass("active");
                     $(".header li").eq(1).addClass("active")
                 });

                 break;
             case 2:
                 $('html,body').animate({
                     scrollTop: $(".introduce").height() + $(".items").height() + 'px'
                 }, 500, "swing", function() {
                     $(".header li").removeClass("active");
                     $(".header li").eq(2).addClass("active")
                 });
                 break;
         }
     });
     window.onscroll = function() {
         var height = $(".introduce").height()
         var heightmax = $(".introduce").height() + $(".items").height()
         if ($(window).scrollTop() < height) {
             $(".header li").removeClass("active");
             $(".header li").eq(0).addClass("active")
         } else if ($(window).scrollTop() > heightmax) {
             $(".header li").removeClass("active");
             $(".header li").eq(2).addClass("active")
         } else {
             $(".header li").removeClass("active");
             $(".header li").eq(1).addClass("active")
         }
     }
     canvasBg("canvas_bg");
 })
