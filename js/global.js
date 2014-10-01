// Hover effect for Custom Icons
$(function() {
    $('.iconLink .hi-icon-wrap a').mouseover(function() {
        $(this).children("i.hi-icon").addClass("hover");
    }).mouseout(function() {
        $(this).children("i.hi-icon").removeClass("hover");
    });
});
$(document).ready(function(){
    // Main Nav search button
    $(".search").click(function(e){
        $(this).parent().addClass('active');
        $(".searchWrapper").slideToggle(200);
        e.stopPropagation();
    });
    $(document).click(function(e) {
        if (!$(e.target).is('.searchWrapper, .searchWrapper *')) {
            $(".searchWrapper").slideUp(200);
            $('.mainNav li .searchWrapper').parent().removeClass('active');
        }
    });

//drop down menu ends
    var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
        // advance the other slideshow
        slideshows.not(this).cycle('goto', opts.currSlide);
    });

    $('#cycle-2 .cycle-slide').click(function(){
        var index = $('#cycle-2').data('cycle.API').getSlideIndex(this);
        slideshows.cycle('goto', index);
    });
    /*cycle carousel*/
    var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
        // advance the other slideshow
        slideshows.not(this).cycle('goto', opts.currSlide);
    });

    $('#cycle-2 .cycle-slide').click(function(){
        var index = $('#cycle-2').data('cycle.API').getSlideIndex(this);
        slideshows.cycle('goto', index);
    });
    /*table striped*/
    $(".table-striped > tbody > tr:odd").addClass("odd");
    $(".table-striped > tbody > tr:not(.odd)").addClass("even");
    /*end table striped*/
});
/*document ready end*/



