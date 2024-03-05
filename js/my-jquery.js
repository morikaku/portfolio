$(function () {

    // Topへ戻るボタン表示切替
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#go-to-top').fadeIn();
        } else {
            $('#go-to-top').fadeOut();
        }
    });

    // スムーススクロール
    $('a[href^="#"]').click(function () {
        let speed = 500;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

});