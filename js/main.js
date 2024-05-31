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
})