
$(document).ready(function(){
    $(".particiData").hide();
    $(".particiData:first").show();
    $('.tabs li:first-child').addClass("active");
    $(".tabs li a").click(function () {
        var tablink = $(this).attr('href');
        $(".particiData").hide();
        $(tablink).stop().show();
        $(this).parents(".tabs").find('li').removeClass("active");
        $(this).parents(".tabs li").addClass("active");
        return false;
    });
    $(window).scroll(function(){
        var scrollAmt =$(this).scrollTop();
        var offset=$(".participationsResult").offset().top;
         if(scrollAmt >= offset){
             $(".scrollTable").css("position","fixed");
         }
        else
         {
             $(".scrollTable").css("position","static");
         }

    })
});


