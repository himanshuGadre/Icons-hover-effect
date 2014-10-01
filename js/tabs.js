$(document).ready(function(){
    $(".tabsData").hide();
    $(".tabsData:first").show();
    $('.tabs li:first-child').addClass("active");
    $(".tabs li a").click(function () {
        var tablink = $(this).attr('href');
        $(".tabsData").hide();
        $(tablink).stop().show();
        $(this).parents(".tabs").find('li').removeClass("active");
        $(this).parents(".tabs li").addClass("active");
        return false;
    });
});

