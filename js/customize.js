// 自行加入的JS請寫在這裡
$(function() {
    //
    $('.language_choose ul li').each(function(index, el) {
        $(this).find('a').click(function(e) {
            $(this).parent().siblings().find('a').removeClass('active');
            $(this).addClass('active');
           e.preventDefault();
        });
    });
    //
    $('.colorbox_search').css('top', '100%').hide();
    $('.colorbox_showlist').css('top', '100%').hide();
    $('.colorbox_sort').css('top', '100%').hide();
    $('.open_search').off().click(function(e) {
        $('.colorbox_showlist').css('top', '100%').hide();
        $('.colorbox_sort').css('top', '100%').hide();
        $('.colorbox_search').show().stop(true, true).animate({ 'top': '3.6em' }, 600, 'easeOutQuint');
        e.preventDefault();
    });
    $('.open_sort').off().click(function(e) {
        $('.colorbox_search').css('top', '100%').hide();
        $('.colorbox_showlist').css('top', '100%').hide();
        $('.colorbox_sort').show().stop(true, true).animate({ 'top': '3.6em' }, 600, 'easeOutQuint');
        e.preventDefault();
    });
    $('.open_showlist').off().click(function(e) {
        $('.colorbox_search').css('top', '100%').hide();
        $('.colorbox_sort').css('top', '100%').hide();
        $('.colorbox_showlist').show().stop(true, true).animate({ 'top': '3.6em' }, 600, 'easeOutQuint');
        e.preventDefault();
    });
    $('[class^="colorbox"]').find('.i_close').off().click(function(e) {
        $('[class^="colorbox"]').stop(true, true).animate({ 'top': '100%' }, 400, 'easeOutQuint').hide(500);
        e.preventDefault();
    });
    // news_more_content
    $('.more_content').hide();
    $('.list ul li').each(function(index, el) {
        $(this).find('.btn-more').off().click(function(e) {
            $(this).parents('li').siblings().find('.more_content').hide();
            $(this).siblings('.more_content').slideToggle();
            e.preventDefault();
        });
    });
    $('.album ul li').each(function(index, el) {
        $(this).find('.btn-more').off().click(function(e) {
            $(this).parents('li').siblings().find('.more_content').hide();
            $(this).siblings('.more_content').slideToggle();
            e.preventDefault();
        });
    });
    // language
    if ($('.language_choose').length > 0) {
        var scrollDuration = 20;
        var leftPaddle = document.getElementsByClassName('left-paddle');
        var rightPaddle = document.getElementsByClassName('right-paddle');
        var itemsLength = $('.language_choose ul li').length;
        var itemSize = $('.language_choose ul li').outerWidth(true);
        var paddleMargin = 30;
        var getMenuWrapperSize = function() {
            return $('.language_choose').outerWidth();
        }
        var menuWrapperSize = getMenuWrapperSize();
        $(window).on('resize', function() {
            menuWrapperSize = getMenuWrapperSize();
        });
        var menuVisibleSize = menuWrapperSize;
        var getMenuSize = function() {
            return itemsLength * itemSize;
        };
        var menuSize = getMenuSize();
        var menuInvisibleSize = menuSize - menuWrapperSize;
        var getMenuPosition = function() {
            return $('.language_choose ul').scrollLeft();
        };
        $('.language_choose ul').on('scroll', function() {
            menuInvisibleSize = menuSize - menuWrapperSize;
            var menuPosition = getMenuPosition();
            var menuEndOffset = menuInvisibleSize - paddleMargin;
            if (menuPosition <= paddleMargin) {
                $(leftPaddle).addClass('hidden');
                $(rightPaddle).removeClass('hidden');
            } else if (menuPosition < menuEndOffset) {
                $(leftPaddle).removeClass('hidden');
                $(rightPaddle).removeClass('hidden');
            } else if (menuPosition >= menuEndOffset) {
                $(leftPaddle).removeClass('hidden');
                $(rightPaddle).addClass('hidden');
            }
        });
        $(rightPaddle).on('click', function() {
            $('.language_choose ul').animate({ scrollLeft: menuInvisibleSize }, scrollDuration);
        });
        $(leftPaddle).on('click', function() {
            $('.language_choose ul').animate({ scrollLeft: '0' }, scrollDuration);
        });
    }
    // 下拉選取帶資料
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
    $('.dropdown-button').each(function(index, el) {
        $(this).find('.info').off().click(function(e) {
            $(this).next('.dropdown-content').stop().fadeToggle();
            e.preventDefault();
        });
    });
    // 如果點在外面
    // $(document).on('click', function(e) {
    //     var target = e.target;
    //     if (!$(target).is('.dropdown-content')) {
    //         $('.dropdown-content').hide();
    //     }
    // });
    // fix選單
    if ($('.bottom_navbar').length>0) {
        $('.scrollToTop').addClass('padding-bottom');
        var bottom_li = $('.bottom_navbar ul li').length;
        if (bottom_li == 2) {
            $('.bottom_navbar').addClass('has_2');
        }
        if (bottom_li == 4) {
            $('.bottom_navbar').addClass('has_4');
        }
        $(window).on("load resize", function(e) {
            _ww = $(window).width();
            if (_ww >= 768) {
                $('.bottom_navbar').appendTo('.wrapper');
            } else {
                $('.bottom_navbar').appendTo('.wrapper');
            }
        });
    }
    // menu按鈕
    if ($('.afterlogin').length > 0) {
        $('.navbar').append('<div class="menu_btn"><span></span><span></span><span></span></div>');
        $('.m_menu').append('<div class="overlay"></div>');
        _mWidth = $('.m_menu').width();
        $('.m_menu').css('margin-left', -1.5 * _mWidth).hide();
        var m_status = false;
        $('.menu_btn').off().click(function(e) {
            $(this).blur();
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
    // 報名狀態
    if ($('body').has('.info_box')) {
        $('.info_box').find('.btn').off().click(function(e) {
            $('.scan_result').hide();
            e.preventDefault();
        });
    }
    // fixed th
    $(window).on("load resize", function(e) {
        var WindowWidth = $(window).width();
        if (WindowWidth <= 768) {
            $(".fix_th_table tr").each(function() {
                var firstTh = $(this).children(),
                    highestBox = 0;
                $(firstTh).each(function() {
                    if ($(this).height() > highestBox) {
                        highestBox = Math.ceil($(this).height());
                    }
                });
                $(firstTh, this).height(highestBox);
            });
        }
    });
});
