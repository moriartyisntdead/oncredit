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

    $('.navbar-toggler').click(function () {
        $('.navbar').toggleClass('opened');
        $('body').toggleClass('opened');
    })


    jQuery('#inn').mask('0000000000');
    $('#calculator').validate({
        rules: {
            tel: {
                required: true,
                minlength: 12,
                maxlength: 12,
                digits: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },

            inn: {
                required: true,
                minlength: 10,
                maxlength: 10,
                digits: true
            },
            terms: "required"
        },
        messages: {
            tel: "Введите номер телефона",
            email: "Введите правильный email адрес",

        },
        errorElement: 'div',
        errorLabelContainer: '.errorTxt',
        errorPlacement: function (error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
            $.ajax({
                url: "/test.php",
                type: "POST",
                data: {
                    fName: $('#fName').val(),
                    email: $('#email').val(),
                    tel: $('#tel').val(),
                    submit: 1
                },
                success: function (data) {
                    swal({
                        text: 'Спасибо! Мы уже обрабатываем Вашу заявку и в ближайшее время свяжемся с Вами.',
                        type: 'success',
                        confirmButtonText: 'Отлично'
                    });
                    $('#fName').val('');
                    $('#email').val('');
                    $('#tel').val('');
                },
                error: function (data) {
                    swal({
                        text: 'Произошла ошибка!',
                        type: 'error',
                        confirmButtonText: 'Повторить'
                    })
                }
            });
        }
    });


});
