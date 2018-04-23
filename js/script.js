$(function () {
    if (typeof ($.fn.slider) !== 'undefined') {
        /*   Слайдер на главной   */
        $("#calculator__slider").slider({
            orientation: "horizontal",
            range: "min",
            max: 15000,
            min: 50,
            step: 50,
            value: 3000,
            slide: function (event, ui) {
                $('#calculator__slider-value').html(ui.value);
            }
        });

        /*   Боковой слайдер денег   */
        $("#side-slider__money").slider({
            orientation: "horizontal",
            range: "min",
            max: 15000,
            min: 50,
            step: 50,
            value: 3000,
            slide: function (event, ui) {
                $('#side-slider__money-value').html(ui.value);
            }
        });

        /*   Боковой слайдер срока   */
        $("#side-slider__term").slider({
            orientation: "horizontal",
            range: "min",
            max: 30,
            min: 1,
            step: 1,
            value: 15,
            slide: function (event, ui) {
                $('#side-slider__term-value').html(ui.value);
            }
        });
    }

    $('.question__title').click(function () {

        //
        // $('.switch').toggleClass('switch--active');
        // $('.switch').parent().parent().siblings().children('.question__title').children('.switch').removeClass('switch--active');

        $(this).toggleClass('question__title--active');
        $(this).parent().siblings().children('.question__title').removeClass('question__title--active');

        $(this).parent().children('.question__title').children('.switch').toggleClass('switch--active');
        $(this).parent().siblings().children('.question__title').children('.switch').removeClass('switch--active');

    });
});
