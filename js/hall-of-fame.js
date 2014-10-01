$(document).ready(function(){
    var active = 0;
    $(".inducteesListing").each(function(){
        for(i=0;i<$(this).find("li").length;i+=4){
            $(this).find("li").eq(i).css("clear","both");

        }
    });
    $(".inducteesListing").find("li").click(function(){
        $(".inducteesListing").find("li").removeClass('selectInductee');
        $(this).addClass('selectInductee');
        setTimeout(function(){
            $("html, body").animate({ scrollTop: $('.selectInductee').offset().top }, 'slow');
        },100);
        if($(this).hasClass("active")){
            _close();
        }else{
            var current = $(this).index();
            if(!(Math.floor(current / 4) == Math.floor(active/4))){
                $(".inducteeDataWrap").hide();
                $(".inducteesListing").find("li").css("height",260);
            }
            active=current;
            $('.inducteesListing li').removeClass('active');
            var current = $(this);

            setTimeout(function(){
                current.addClass('active');
            },200);
            $('.inducteeInfo').addClass('activeDiv');
            $(this).animate({"height":705},600);
            $(".inducteeVideo img").hide();
            $(".inducteeDataWrap").slideDown(500).css("top",$(this).offset().top+218);
            setTimeout(function(){
                $(".inducteeVideo img").fadeIn();
            },200)
        }
    });
    var _close = function(){
        $(".inducteeDataWrap").slideUp(500);
        $(".inducteesListing").find("li").animate({"height":260},500);
        $('.inducteesListing li').removeClass('active');
        $('.inducteesListing li').removeClass('selectInductee');
        $('.inducteeInfo').removeClass('activeDiv');
    };
    $(".gridClose").click(function(){
        _close();
    });
    $('#carousel li').click(function(){
        _close();
    });
});



