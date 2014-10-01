$(document).ready(function(){
    $('.shareIcons').hide();
    $('.shareIcon').hover(function(e){
        $('.shareIcons').stop().slideToggle(500);
        e.stopPropagation();
        return false;
    });

    $(document).click(function(e) {
        if (!$(e.target).is('.shareIcons, .shareIcons *')) {
            $(".shareIcons").slideUp(200);
        }
    });

});



