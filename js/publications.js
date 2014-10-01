$(document).ready(function(){
    $("#bottom_fade").mousemove(function(event){
        $(".tooltip").css("top", event.pageY-285).css("left", event.pageX-85);

    });
    //For HST publication-reg-users view page
    $('.content').hide();
    $('.sportsList li a').click(function(){
        $(this).toggleClass('active')
        $(this).next('.content').stop().slideToggle();
        return false;
    });
    $('.content').hide();
    $('a.heading').click(function(){
        $(this).toggleClass('active');
        $(this).next('.content').stop().slideToggle();
        $(this).next('.contentDisplay').stop().slideToggle();
        return false;
    });
});

