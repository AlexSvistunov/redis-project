$(function(){

    $('.header__top-btn').on('click', function(){
        $('.header__top-btn,.header__top-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

});