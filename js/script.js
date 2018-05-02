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
            },
            change: function (event, ui) {
                amountReturnedCalc();
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
            create: function (event, ui) {
                amountReturnedCalc();
            },
            slide: function (event, ui) {
                $('#side-slider__term-value').html(ui.value);
            },
            change: function (event, ui) {
                amountReturnedCalc();
            }
        });
    }

    $('.question__title').click(function () {

        $(this).toggleClass('question__title--active');
        $(this).parent().siblings().children('.question__title').removeClass('question__title--active');
        $(this).parent().children('.question__title').children('.switch').toggleClass('switch--active');
        $(this).parent().siblings().children('.question__title').children('.switch').removeClass('switch--active');

    });

    function amountReturnedCalc() {
        var getSum = $('#side-slider__money').slider("value");
        var getDays = $('#side-slider__term').slider("value");
        var interest = 1.9;
        var percentDay = parseFloat(interest) / 100;
        var returnSum = getSum + (getSum * percentDay * getDays);
        var returnDate = moment().add(getDays, 'days').format('DD.MM.YYYY');
        $('#side-slider__sum').html(returnSum + ' грн');
        $('#side-slider__return-date').html(returnDate);
    }
});
