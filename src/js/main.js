if ($(window).width() > 991) {
    $( ".form-block-img img" ).attr("src","img/form/girl-clear.png");
};
// if ($(window).width() < 768) {
//     $('.slider-block').slick({
//         slidesToShow: 2
//       });
// }
// $('.slider-item').slick();
$('#headerNavbar a[href^="#"]').click(function (){
    let elementClick = $(this).attr("href");
    let destination = $(elementClick).offset().top;
    jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
});