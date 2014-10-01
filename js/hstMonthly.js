$(document).ready(function(){
    $('.magazinesViews').hide();
    $('.monthMagazines li:first-child').find('.magazinesViews').show();
    $('.accoHeading').click(function(){
        $(this).addClass('active');
        $(this).parent().find('.magazinesViews').slideUp();
        $(this).next('.magazinesViews ').slideDown();
        $(this).parents('li').siblings().find('a').removeClass('active');
        $(this).parents('li').siblings().find('.magazinesViews').slideUp();
        return false;
    });
});


