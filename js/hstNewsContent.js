$(document).ready(function(){

    //HST-news-content
    $(".sliderButton  .monthYrText").hide();

    $(".prevButton").mouseover(function(){
        $(this).stop().animate({width: 120, marginLeft: 0}, {duration: 200});
    //  $(this).children().show();
        $(".prevButton .monthYrText").show();
    });

    $(".prevButton").mouseout(function(){
        $(this).children().hide();
        $(this).stop().animate({width: 45, marginLeft: 0}, {duration: 200});
    //    $(this).('.hstBtnSlider').show();
        $(".prevButton .hstBtnSlider").show();
    });

    $(".nextButton").mouseover(function () {
        $(this).stop().animate({ width: 120, marginRight: 0 }, { duration: 200 });
        //  $(this).children().show();
        $(".nextButton .monthYrText").show();
    });

    $(".nextButton").mouseout(function(){
        $(this).children().hide();
        $(this).stop().animate({width: 45, marginRight: 0}, {duration: 300});
    //    $(this).('.hstBtnSlider').show();
        $(".nextButton .hstBtnSlider").show();
    });
});


