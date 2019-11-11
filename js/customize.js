// 自行加入的JS請寫在這裡
$(function() {
    $('.dropdown-content').hide();
    $('.select_zone').find('.item').each(function(index, el) {
        $(this).find('.dropdown-button .info').off().click(function(e) {
            $('.dropdown-content').hide();
            $(this).next('.dropdown-content').stop().fadeToggle();
            e.preventDefault();
        });
        $(this).find('.dropdown-content ul li a').off().click(function(e) {
            var _chooseOption = $(this).html();
            $(this).parents('.dropdown-content').siblings('.info').html(_chooseOption);
            $('.dropdown-content').hide();
            e.preventDefault();
        });
    });
    // 如果點在外面
    $(document).on('touchend click', function(e) {
        var target = e.target;
        if (!$(target).is('.info')) {
            $('.dropdown-content').hide();
        }
    });
});
