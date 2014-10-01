// Hover effect for Custom Icons
$(function() {
    $('.iconLink .hi-icon-wrap a').mouseover(function() {
        $(this).children("i.hi-icon").addClass("hover");
    }).mouseout(function() {
        $(this).children("i.hi-icon").removeClass("hover");
    });
});
// Side Nav -  Fixed position on scrolling
$(document).ready(function(){
    $("#bottom_fade").mousemove(function(event){
        $(".tooltip").css("top", event.pageY-285).css("left", event.pageX-85);
    });

    // Main Nav search button
    $(".search").click(function(e){
        //$('.mainNav li').removeClass('active');
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

    /*article page*/
    $('.shareIcons').hide();
    $('.shareIcon').hover(function(e){
        $('.shareIcons').stop().slideToggle(500);
        e.stopPropagation();
        return false;
    });

    /*end article page*/

    $(".chosen-select").on('change', function(evt, params) {
        var selectedVal = $( ".chosen-select option:selected" ).val();
        if(selectedVal == ""){
            $('.chosen-container-active').removeClass('upArrow');
        }else{
            $('.chosen-container-active').addClass('upArrow');
        }
    });
    /*end custom select box*/

 /*start participation data search tabs*/
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
    /*end participation data search tabs*/

    /*table striped*/
    $(".table-striped > tbody > tr:odd").addClass("odd");
    $(".table-striped > tbody > tr:not(.odd)").addClass("even");
    /*end table striped*/
    $("#advSearchContainer").hide();

    //For HST publication-reg-users view page
    $('.content').hide();
    $('.sportsList li a').click(function(){
        $(this).toggleClass('active')
        $(this).next('.content').stop().slideToggle();
        return false;
    });

    //For HST-Monthly-view page
    $('.content').hide();
    $('a.heading').click(function(){
        $(this).toggleClass('active');
        $(this).next('.content').stop().slideToggle();
        $(this).next('.contentDisplay').stop().slideToggle();
        return false;
    });

    //Sanctioning page

    $('a.heading').click(function(){
        $(this).toggleClass('active');
        $(this).next('.addEventsInfoForm').stop().slideToggle();
        return false;
    });

    /*custom select box*/
    $(".chosen-select").chosen({
        "disable_search": true
    });
    $(".chosen-select").on('change', function(evt, params) {
        var selectedVal = $(this).val();
        if(selectedVal == ""){
            $(this).siblings().removeClass('upArrow');
        }else{
            $(this).siblings().addClass('upArrow');
        }
    });

    /*select dropdown scroll down script*/
    $('.scrollDropDown .chosen-drop').append('<div class="scrollBtn">&nbsp;</div>')
    $('.scrollDropDown .chosen-drop').prepend('<div class="scrollBtnTop disabled">&nbsp;</div>')

    $('.scrollDropDown').on('mouseover', '.scrollBtn' , function(){
        var liCount = $(this).parents('.scrollDropDown').find('.chosen-results li').size();
        var scrollLenght = liCount * 25;
        $('.scrollDropDown .chosen-results').animate({
            scrollTop: scrollLenght
        }, 150*liCount);

        $(".scrollDropDown .chosen-results").scroll(function(){
//            $("#scrollCount").text(x+=1);
            if($(".scrollDropDown .chosen-results").scrollTop()>0){
                $(".scrollBtnTop").show();
            }else{
                $(".scrollBtnTop").hide();
            }
        });

    });
    $('.scrollDropDown').on('mouseover', '.scrollBtnTop' , function(){
        var liCount = $(this).parents('.scrollDropDown').find('.chosen-results li').size();
        var scrollLenght = liCount * 25;
        $('.scrollDropDown .chosen-results').animate({
            scrollTop: - scrollLenght
        }, 150*liCount);
    });

    $('.scrollDropDown').on('mouseout', '.scrollBtn, .scrollBtnTop' , function(){
        $('.scrollDropDown .chosen-results').animate().stop();
    });


      /*placeholder*/
    $(function(){
        $.placeholder.shim();
    });

    //Advances search
    $(".advancedSearch").click(function(e){
        $("#advSearchContainer").slideToggle(200);
        e.stopPropagation();
        return false;
    });
    $(document).click(function(e) {
        if (!$(e.target).is('#advSearchContainer, #advSearchContainer *')) {
            $("#advSearchContainer").slideUp(200);
        }
        if (!$(e.target).is('.shareIcons, .shareIcons *')) {
            $(".shareIcons").slideUp(200);
        }
    });


    /*select dropdown scroll down script*/

    //tooltip
    $(".unRegUser").bind("mousemove", function(event) {
        $(this).find("div.tooltip").css({
            top: event.pageY + 5 + "px",
            left: event.pageX + 5 + "px"
        }).show(100);
    }).bind("mouseout", function() {
            $("div.tooltip").hide();
    });


});

/*document ready end*/

$('.fameInducteesListing ul li:nth-child(4n)').next().addClass('firstInductee');

$(window).load(function(){

    $(".chosen-single").click(function(){
        $(".chosen-results").each(function(){
           if($(this).children().length>14){
               $(this).next().show();
           }
        });
//        alert($(".chosen-results").children().length);
    });
    for(i=0;i<$(".chosen-select").length;i++){
//        console.log($(".chosen-select").eq(i).children().length);
        if($(".chosen-select").eq(i).children().length>14){
            $(".scrollBtn").eq(i).show();
            $(".scrollBtnTop").eq(i).hide();
        }else{
            $(".scrollBtn").eq(i).hide();
            $(".scrollBtnTop").eq(i).hide();
        }
    }
});

// for homepage (network section)
$( '.networkTabs' ).cycle();

// For Football page (tempelate)
$( '.articleWrap' ).cycle();
var clickCount =0;


/*fullscreen slider*/
$(".mainSlide").fullScreenImageInner({
    imageHeight:369,
    imageWidth:1200,
    windowHeight:369
});
/*fullscreen slider*/

