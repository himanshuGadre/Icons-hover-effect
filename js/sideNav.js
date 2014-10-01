$(function() {
	//  About page ScrollTo
    // Cache selectors
    var lastId,
        topMenu = $(".sideNav"),
    //   topMenuHeight = topMenu.outerHeight()+15,
        topMenuHeight = 0,
    // All list items
        menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });
	topOpen = false;
	timerSet = false;

    // Bind click handler to menu itemsgi
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 400);
        e.preventDefault();
    });

    $(".sideNav li:first-child").addClass("active");
    //Last Section minimum Height
    var lastSection = $('.sideNavWrapper > section:last-child');
    var sectionHeight = lastSection.outerHeight();
    var footerHeight = $('.footer').height();
    var windowHeight = $(window).height();
    if(windowHeight> sectionHeight+footerHeight){
        var heightDifference = windowHeight - (sectionHeight+footerHeight);
        var sectionHeightInner = lastSection.height()+1;
        lastSection.css({
            minHeight: sectionHeightInner+heightDifference
        })
    }

    // Bind to scroll

    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
		
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
		
		if (lastId !== null) {
            lastId = id;
			menuItems.parent().removeClass("active").end().filter("[href=#" + id + "]").parent().addClass("active");
            
			if (id == $('.sideNav li:first-child a').attr("href").replace("#", "")) {
				if (!topOpen && !timerSet) {
					topOpen = true;
					$('.sideNav a').each(function(index){$(this).stop().delay(index*50).animate({width: 19, marginLeft:0}, {duration: 300});});
					setTimeout(function() {
						$('.sideNav a').each(function(index){$(this).stop().delay(index*50).animate({width: 6, marginLeft:0}, {duration: 300});});
					}, 1000);
				}
			}
        }

        var currentScroll = $(window).scrollTop();
        var sideNavHeight = $('ul.sideNav').height();
        var leftBarPosition = ($(".mainSliderWrap").height()) + 233;
        var footerHeight = $('.footer').height();
        var advtHeight = $('.advtWrapper').height();
        windowHeight = $(window).height();
        var menuHeight = $('.sideNav').outerHeight();
        pageHeight = $('body').height();
        var lastFixed = (currentScroll) + sideNavHeight;
        var subMenuLastPos = pageHeight - footerHeight;

        if(currentScroll<=233){
            jQuery(".sideNav li:first-child").addClass("active");
        }

        $(".fixedDiv h2").html(currentScroll);
        $(".fixedDiv h3").html(subMenuLastPos);
        if((currentScroll >= leftBarPosition)&&(!(lastFixed >= subMenuLastPos)))
        {
            $(".sideNav").css({
                "position": "fixed",
                "left":"0",
                "top": "22px",
                "bottom":"auto"
            });
        }
        else if (lastFixed >= subMenuLastPos)
        {
            $(".sideNav").css({
                "position": "absolute",
                "left":"-6px",
                "top": "auto",
                "bottom": "0"
            });
        }
        else
        {
            $(".sideNav").css({
                "position": "absolute",
                "left":"-6px",
                "bottom": "0"
            });
        }
    });

	$(".sideNav a").mouseover(function(){
		$(this).stop().animate({width: 235, marginLeft: 0}, {duration: 500});
	});
	
	$(".sideNav a").mouseout(function(){
		$(this).stop().animate({width: 6, marginLeft: 0}, {duration: 300});
	});
	
});