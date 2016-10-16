/**
 * Created by 国外噩梦 on 2016/10/15.
 */
$(function(){
    var mySwiper1 = new Swiper('#banner', {
        direction: 'horizontal',
        loop: true,
        //是否需要分页器
        pagination: '.swiper-pagination',
        autoplay: 3000,
        speed: 300,
        grabCursor : true
    })
    var mySwiper2 = new Swiper('#right', {
        direction: 'vertical',
        loop: true,
        autoplay: 3000,
        speed: 300,
        grabCursor : true
    })

    var myswiper3 = new Swiper('#scroll', {
        slidesPerView: 2,
        spaceBetween: 0
    });

})