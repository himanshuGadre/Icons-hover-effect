$(document).ready(function(){

    //For My Groups Details page
    $('.docsWrap').hide();
    $('.folder > a').click(function(){
        $(this).toggleClass('active');
        $(this).parent('.folder').siblings('.docsWrap').stop().slideToggle();
        return false;
    });

    $('.subDocs').hide();
    $('.subFolderWrap > a').click(function(){
        $(this).toggleClass('active');
        $(this).parent('.subFolderWrap').siblings('.subDocs').stop().slideToggle();
        return false;
    });

    $('a.cancel').click(function(){
      $.fancybox.close();
    });

    $('.folderWrap .docsWrap li').hover(
        function()
        {
            $(this).children('.folderLink').css("display","block");
            $(this).children('.folderLink').children('a').css("display","block");
        },
        function()
        {
            $(this).children('.folderLink').css("display","none");
        }
    );
    $('.tooltip').hide();
    $('.folderLink .uploadIco').hover(
        function()
        {
            $(this).siblings('.tooltip').css("display","block");
        },
        function()
        {
            $(this).siblings('.tooltip').css("display","none");
        }
    );

});