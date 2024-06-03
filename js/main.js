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