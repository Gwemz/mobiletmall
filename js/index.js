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

    //顶部随滚轮变化而发生的变化
    var hd_con=$('.header-content');
    $(window).scroll(function(e){
        //获取滚轮距离顶部的距离
        // console.log($(this).scrollTop());
        var ex=$(this).scrollTop();
        // console.log(ex);
        if(ex>400){
            hd_con.addClass('hd-con-red');
        }
        else if(ex<400){
            hd_con.removeClass('hd-con-red');
        }
    })

    /*var date=['','一','二','三','四','五','六','日'];
    console.log(date[1]);*/
    var back=$('.back');
    back.on('click',function(){
        $('.page1').css({'display':'none'});
    })
    //点击目录菜单显示状态栏
    var category_menu=$('.category-menu');
    category_menu.on('click',function(){
        $('.page1').css({'display':'block'});
        $('.page1 .content').addClass('move');
    })

    //选项卡效果
    var tab_nav=$('.tab-nav');
    tab_nav.on('click','li',function(){
        var index=$(this).index();
        $(this).closest('ul').find('li').removeClass('active');
        $(this).addClass('active');
        $('.tab-menu .tab-li').removeClass('active');
        $('.tab-menu .tab-li').eq(index).addClass('active');
    })

})