$(document).ready(function () {
    // відступ зліва - 1 екран (головна)
    let windowWidtn = $(window).width(),
        containerWidth = $('.container').width(),
        spaceSide = (windowWidtn - containerWidth) / 2;

    $('.mainslider__left').css('padding-left', spaceSide + 'px');
    $('.mainslidersect__social, .vertical-title').css('width', spaceSide + 'px');
    $(window).resize(function () {
        let windowWidtn = $(window).width(),
            containerWidth = $('.container').width(),
            spaceSide = (windowWidtn - containerWidth) / 2;

        $('.mainslider__left').css('padding-left', spaceSide + 'px');
        $('.mainslidersect__social, .vertical-title').css('width', spaceSide + 'px');
    });



    // головний слайдер

    $('.mainslider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: true,
                    nextArrow: '<button type="button" class="slick-next"></button>',
                    prevArrow: '<button type="button" class="slick-prev"></button>'
                }
            },
        ]
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.mainslider',
        dots: true,
        arrows: true,
        focusOnSelect: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>'
    });


    //   form styler
    $('select').styler();

    // калькулятор туда
    $('.calcbox__step1 .nextbtn').click(function (e) {
        e.preventDefault();
        $('.calcbox__step').removeClass('show');
        $('.calcbox__step.calcbox__step2').addClass('show');
        $('.calcnav__point').removeClass('active');
        $('.point2').addClass('active');
    });
    $('.calcbox__step2 .nextbtn').click(function (e) {
        e.preventDefault();
        $('.calcbox__step').removeClass('show');
        $('.calcbox__step.calcbox__step3').addClass('show');
        $('.calcnav__point').removeClass('active');
        $('.point3').addClass('active');
    });
    // сюда
    $('.calcbox__step3 .prevbtn').click(function (e) {
        e.preventDefault();
        $('.calcbox__step').removeClass('show');
        $('.calcbox__step.calcbox__step2').addClass('show');
        $('.calcnav__point').removeClass('active');
        $('.point2').addClass('active');
    });
    $('.calcbox__step2 .prevbtn').click(function (e) {
        e.preventDefault();
        $('.calcbox__step').removeClass('show');
        $('.calcbox__step.calcbox__step1').addClass('show');
        $('.calcnav__point').removeClass('active');
        $('.point1').addClass('active');
    });


    // Проекти - слайдер
    // project-sliderbig
    $('.project-sliderbig.one').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.project-sliderlitt.one',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true,
                    nextArrow: '<button type="button" class="slick-next"></button>',
                    prevArrow: '<button type="button" class="slick-prev"></button>',
                }
            },
        ]
    });
    $('.project-sliderlitt.one').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.project-sliderbig.one',
        dots: true,
        arrows: true,
        focusOnSelect: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    // $('.project-sliderlitt.product').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   // asNavFor: '.project-sliderbig.one',
    //   dots: true,
    //   arrows: true,
    //   focusOnSelect: true,
    //   nextArrow: '<button type="button" class="slick-next"></button>',
    //   prevArrow: '<button type="button" class="slick-prev"></button>',
    //   responsive: [
    //     {
    //       breakpoint: 992,
    //       settings: {
    //         slidesToShow: 3,
    //       }
    //     },
    //   ]
    // });



    $('.project-sliderbig.two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.project-sliderlitt.two',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true,
                    nextArrow: '<button type="button" class="slick-next"></button>',
                    prevArrow: '<button type="button" class="slick-prev"></button>',
                }
            },
        ]
    });
    $('.project-sliderlitt.two').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.project-sliderbig.two',
        dots: true,
        arrows: true,
        focusOnSelect: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    // побудовано нами - сдайдер

    $('.builtbyus__slider').slick({
        // slidesPerRow: 4,
        // rows: 1,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    // TO TOP
    $(function () {
        $('#totop').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        })

    });

    // до якоря скролл
    $("#anchorlink").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $("header.header").addClass("scrolled");
    } else {
        $("header.header").removeClass("scrolled");
    }

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $("header.header").addClass("scrolled");
        } else {
            $("header.header").removeClass("scrolled");
        }
    });

    // burger menu
    $('.burgerbtn').click(function () {
        $('.header__nav').addClass('show');
    });
    $('.closeheadmenu').click(function () {
        $('.header__nav').removeClass('show');
    });


    // seo text
    $('.seosect .greenbtn').click(function () {
        $('.seotextsect').toggleClass('showall');
        $(this).find('text').toggleClass('hide');
    });

    // product accordeon

    $('.accordeonsect__box.widthcont .accordeonsect__header').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('closerotate');
    });


    $(".scrollanchor a").on("click", function (event) {
        var headerHeight = 77;
        // if ($(window).width() < 1651 && $(window).width() > 1024) {
        //     var headerHeight = 80;
        // } 
        // else if ($(window).width() < 992 && $(window).width() > 575) {
        //     var headerHeight = 60;
        // } else if ($(window).width() < 576) {
        //     var headerHeight = 55;
        // }
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - headerHeight
        }, 1500);
    });


    // mask
    $('.tel').inputmask({
        "mask": "+ 99 /999/ 999-9999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });





});















// var scroll = $(window).scrollTop();

// if (scroll >= 50) {
//   $("header.header").addClass("fixed ");
// } else {
//   $("header.header").removeClass("fixed");
// }

// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();

//   if (scroll >= 50) {
//     $("header.header").addClass("fixed ");
//   } else {
//     $("header.header").removeClass("fixed");
//   }
// });