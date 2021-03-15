$(function () {

    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        /* прибираю дотси менше 1200px */
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false
                }
            },
        ]
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [    /* зменшуєм к-ть відг. при 1140px */
            {
                breakpoint: 1141,
                settings: {
                    slidesToShow: 3,
                }
            },

            {             /* зменшуєм к-ть відг. при 845px */
                breakpoint: 846,
                settings: {
                    slidesToShow: 2,
                }
            },

            {             /* зменшуєм к-ть відг. при 585px */
                breakpoint: 586,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

});