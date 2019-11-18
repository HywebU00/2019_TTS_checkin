// 自行加入的JS請寫在這裡
$(function() {
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
    // 如果點在外面
    $(document).on('click', function(e) {
        var target = e.target;
        if (!$(target).is('.info')) {
            $('.dropdown-content').hide();
        }
    });
    // fix選單
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
    /*-----------------------------------*/
    /////////////modal設定/////////////
    /*-----------------------------------*/
    $('.modal').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal').prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
    //按鈕動作
    $('#openModal').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('body').addClass('noscroll');
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal() {
        $('.modal').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal .close').click(closeModal);
});
