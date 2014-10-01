$(document).ready(function(){
    $("#advSearchWrap").hide();

    //Advances search
    $(".advancedSearch").click(function(e){
        $("#advSearchWrap").slideToggle(200);
        e.stopPropagation();
        return false;
    });
    $(document).click(function(e) {
        if (!$(e.target).is('#advSearchWrap, #advSearchWrap *')) {
            $("#advSearchWrap").slideUp(200);
        }
    });

    $('.cancel').click(function(e) {
        $("#advSearchWrap").slideUp(200);
    });

});

