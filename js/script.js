$(document).ready(function() {

    $('.question__title').click(function(){

        //
        // $('.switch').toggleClass('switch--active');
        // $('.switch').parent().parent().siblings().children('.question__title').children('.switch').removeClass('switch--active');

        $(this).toggleClass('question__title--active');
        $(this).parent().siblings().children('.question__title').removeClass('question__title--active');

        $(this).parent().children('.question__title').children('.switch').toggleClass('switch--active');
        $(this).parent().siblings().children('.question__title').children('.switch').removeClass('switch--active');

    });

    })