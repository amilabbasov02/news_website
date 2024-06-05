$(".head_end form img").click(function(){
    $(this).parent().toggleClass("active")
})
$(".menu").click(function(){
    $(".category_head").toggleClass("active")
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    dots: false,
    navText: ["<img src='./img/arrow_left.png'>", "<img src='./img/arrow_right.png'>"]
})
$(".select_list a").click(function () {
    $(".select_list a").removeClass("active")
    $(this).addClass("active")
    if ($('.news_lent').hasClass('active')) {
        $('.lent_news_block').css('display', 'block');
        $('.top_news_block').css('display', 'none');
    }
    if ($('.top_news').hasClass('active')) {
        $('.lent_news_block').css('display', 'none');
        $('.top_news_block').css('display', 'block');
    }
})
$(".article_head").css("font-size", "38px");
$(".article_text").css("font-size", "18px");
$(".text_plus").click(function() {
    var article = $(".article_text");
    var title = $(".article_head");
    var articleFontSize = parseFloat(article.css("font-size"));
    var titleFontSize = parseFloat(title.css("font-size"));
    if (articleFontSize < 26) {
        article.css("font-size", (articleFontSize + 2) + "px");
        title.css("font-size", (titleFontSize + 1) + "px");
    }
});
$(".text_minus").click(function() {
    var article = $(".article_text");
    var title = $(".article_head");
    var articleFontSize = parseFloat(article.css("font-size"));
    var titleFontSize = parseFloat(title.css("font-size"));
    if (articleFontSize > 14) {
        article.css("font-size", (articleFontSize - 2) + "px");
        title.css("font-size", (titleFontSize - 1) + "px");
    }
});
$(".text_reset").click(function() {
    var article = $(".article_text");
    var title = $(".article_head");
    article.css("font-size", "18px");
    title.css("font-size", "38px");
});