$(document).ready(function(){
 /*start participation data search tabs*/
    $(".stateAssoData").hide();
    $(".stateAssoData:first").show();
    $('.tabs li:first-child').addClass("active");
    $(".tabs li a").click(function () {
        var tablink = $(this).attr('href');
        $(".stateAssoData").hide();
        $(tablink).stop().show();
        $(this).parents(".tabs").find('li').removeClass("active");
        $(this).parents(".tabs li").addClass("active");
        return false;
    });
    /*end participation data search tabs*/

});

