$(document).ready(function() {
    $("#tab1").show();
    $(".tabMenu li a").click(function (e) {
        e.preventDefault();
        var tablink = $(this).attr('href');
        if ( ($(""+tablink+"").css("display")) == "none") {
          $(".tabs2").fadeOut(300);
          $(tablink).fadeIn(500);
          $(this).parents(".tabMenu").find('li').removeClass("active");
          $(this).parents(".tabMenu li").addClass("active");
        };
    });

});