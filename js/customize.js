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
    $(document).on('click', function(e) {
        var target = e.target;
        if (!$(target).is('.info')) {
            $('.dropdown-content').hide();
        }
    });
    if ($('body').has('.bottom_navbar')) {
        $(window).on("load resize", function(e) {
            _ww = $(window).width();
            if (_ww >= 768) {
                $('.bottom_navbar').appendTo('.wrapper');
            } else {
                $('.bottom_navbar').appendTo('body');
            }
        });
    }
    if ($('.afterlogin').length > 0) {
        $('.navbar').append('<div class="menu_btn"><span></span><span></span><span></span></div>');
        $('.m_menu').append('<div class="overlay"></div>');
        _mWidth = $('.m_menu').width();
        $('.m_menu').css('margin-left', -1.5 * _mWidth).hide();
        var m_status = false;
        $('.menu_btn').off().click(function(e) {
            _mWidth = $('.m_menu').width();
            if (!m_status) {
                $('.m_menu').css('margin-left', -1.5 * _mWidth);
                $('.m_menu').show().stop(true, true).animate({ 'margin-left': 0 }, 600, 'easeOutQuint');
                m_status = true;
            } else {
                $('.m_menu').stop(true, true).animate({ 'margin-left': -1.5 * _mWidth }, 400, 'easeOutQuint').hide(500);
                m_status = false;
            }
            e.preventDefault();
        });
        $('.m_menu').find('.overlay').off().click(function(e) {
            $('.m_menu').stop(true, true).animate({ 'margin-left': -1.5 * _mWidth }, 400, 'easeOutQuint').hide(500)
            m_status = false;
            e.preventDefault();
        });
    }
    if($('body').has('.info_box')){
        $('.info_box').find('.btn').off().click(function(e) {
            $('.scan_result').hide();
            e.preventDefault();
        });
    }
});
