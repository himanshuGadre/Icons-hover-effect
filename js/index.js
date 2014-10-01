
$(document).ready(function(){
// Hover effect for Custom Icons
    $(function() {
        $('.iconLink .hi-icon-wrap a').mouseover(function() {
            $(this).children("i.hi-icon").addClass("hover");
        }).mouseout(function() {
                $(this).children("i.hi-icon").removeClass("hover");
            });
    });
// Side Nav -  Fixed position on scrolling
});

/*document ready end*/

// for (network section)
$( '.networkTabs' ).cycle();
