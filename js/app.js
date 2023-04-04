document.addEventListener('DOMContentLoaded', () => {
    let headerMenu = document.querySelector('.header__nav');
    document.addEventListener('click', ({ target }) => {
        // burger
        if (target.classList.contains('burger')) {
            target.classList.toggle('active');
            headerMenu.classList.toggle('active');
        }
    });
    let header = document.querySelector('.header')
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > header.offsetHeight) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });

    let aboutSection = document.querySelector('.about');
    if (aboutSection) {
        document.addEventListener('scroll', headZoom)
            // aboutSection.addEventListener('wheel', headZoom)
        let delta = 1;

        if (window.innerWidth > 1240) {
            aboutSection.style.height = `calc(100vh + ${aboutSection.offsetHeight}px + 50px)`;
        }

        function headZoom(e) {
            if (window.innerWidth > 1240) {
                let aboutInfoBlock = document.querySelector('.about__info').offsetHeight;
                var scroll_val = Math.round($(window).scrollTop() - document.querySelector('.hero').offsetHeight);
                switch (scroll_val >= -200) {
                    case (scroll_val < 40):
                        {
                            $('.mission').css({ "transform": "rotate(-45deg)" });
                            $('.mission').css({ "top": "260px" });
                            $('.mission').css({ "border": "1px solid #FF3400" });
                            $('.mission').css({ "left": "60%" });
                            $('.mission').css({ "width": "400px" });
                            $('.mission').css({ "height": "400px" });
                            $('.mission').css({ "padding": "20px" });
                            $('.mission__img-bg').css({ "opacity": "0" });
                            $('.mission__container').css({ "opacity": "0" });
                            $('.mission .container').css({ "transform": "translateY(-40%)" });
                            break;
                        }
                    case (scroll_val < 100):
                        {
                            $('.mission').css({ "transform": "rotate(-30deg)" });
                            $('.mission').css({ "top": "460px" });
                            $('.mission').css({ "left": "55%" });
                            $('.mission').css({ "padding": "20px" });
                            $('.mission').css({ "border": "1px solid #FF3400" });
                            $('.mission__img-bg').css({ "opacity": "0" });
                            $('.mission').css({ "width": "600px" });
                            $('.mission__container').css({ "opacity": "0" });
                            $('.mission .container').css({ "transform": "translateY(-40%)" });
                            $('.mission').css({ "height": "600px" });
                            break;
                        }
                    case (scroll_val < 200):
                        {
                            $('.mission').css({ "transform": "rotate(-20deg)" });
                            $('.mission').css({ "top": "860px" });
                            $('.mission').css({ "border": "1px solid #FF3400" });
                            $('.mission').css({ "left": "45%" });
                            $('.mission__img-bg').css({ "opacity": "0" });
                            $('.mission').css({ "padding": "20px" });
                            $('.mission').css({ "width": "800px" });
                            $('.mission__container').css({ "opacity": "0" });
                            $('.mission .container').css({ "transform": "translateY(-40%)" });
                            $('.mission').css({ "height": "800px" });
                            break;
                        }
                    case (scroll_val < 400):
                        {
                            $('.mission').css({ "transform": "rotate(0deg)" });
                            $('.mission').css({ "top": aboutInfoBlock + 50 + 110 + 30 + 'px' });
                            $('.mission').css({ "left": "0" });
                            $('.mission__img-bg').css({ "opacity": "0.4" });
                            $('.mission').css({ "border": "0px solid #FF3400" });
                            $('.mission').css({ "padding": "0" });
                            $('.mission').css({ "width": "100vw" });
                            $('.mission__container').css({ "opacity": "0" });
                            $('.mission .container').css({ "transform": "translateY(-40%)" });
                            $('.mission').css({ "height": "100vh" });
                            break;
                        }
                    case (scroll_val < 450):
                        {
                            $('.mission__container').css({ "opacity": ".5" });
                            $('.mission .container').css({ "transform": "translateY(-45%)" });
                            $('.mission__img-bg').css({ "opacity": "0.7" });
                            break;
                        }
                    case (scroll_val < 500):
                        {
                            $('.mission__container').css({ "opacity": "1" });
                            $('.mission .container').css({ "transform": "translateY(-50%)" });
                            $('.mission__img-bg').css({ "opacity": "0.9" });
                            break;
                        }
                    default:
                        {
                            break;
                        }
                }
            }
        };
        headZoom();
    }

    // indicators section
    // let indiBlock = document.querySelector('.indicators__block');
    // if (indiBlock) {
    //     window.addEventListener('scroll', ({ target }) => {

    //     });
    // }
    const setAnimateSvg = (arrayPath) => {
        anime({
            targets: arrayPath,
            duration: 1000,
            easing: 'easeInOutQuad',
            strokeDashoffset: [anime.setDashoffset, 0]
        });
    }
    let sections = $('.indicators__item'),
        nav = $('.indicators__img'),
        nav_height = nav.outerHeight();
    $(window).on('scroll', function() {
        if (window.innerWidth > 768) {
            console.log('1');
            let cur_pos = $('.indicators__img').offset().top;
            sections.each(function() {
                let top = $(this).offset().top - nav_height / 2,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    // удаление класса у свг элементов
                    if (!$(this).hasClass('active')) {
                        nav.find('.indicators__img-item').removeClass('active');
                        // удаление класса у инфо. блока
                        sections.removeClass('active');
                        // текущий свг элемент
                        let currentItem = nav.find('.indicators__img-item[data-id="' + $(this).attr('data-id') + '"]');
                        // текущий инфо. блок
                        $(this).addClass('active');
                        // текущий свг путь
                        let currentSvg = currentItem[0].querySelectorAll('svg path');
                        // запуск анимации свг путей
                        setAnimateSvg(currentSvg);
                        // текущий свг элемент
                        currentItem.addClass('active');
                    }

                }
            });
        }
    });

});


window.onload = () => {
    // $.fn.setCursorPosition = function(pos) {
    //     if ($(this).get(0).setSelectionRange) {
    //         $(this).get(0).setSelectionRange(pos, pos)
    //     } else if ($(this).get(0).createTextRange) {
    //         var range = $(this).get(0).createTextRange()
    //         range.collapse(true)
    //         range.moveEnd('character', pos)
    //         range.moveStart('character', pos)
    //         range.select()
    //     }
    // }
    // $('input[type="tel"]').on('click', function() {
    //     $(this).setCursorPosition(3)
    // }).mask('+7 (999) 999 99 99')

    // $('.way').waypoint({
    //     handler: function() {
    //         $(this.element).addClass("way--active");

    //     },
    //     offset: '88%'
    // });
    // slider case
    let heroSlider = document.querySelector('.hero');
    if (heroSlider) {
        let init = false;

        function slickModeHero() {
            let mobile = window.matchMedia('(min-width: 0px) and (max-width: 576px)')
            let desktop = window.matchMedia('(min-width: 576px)');
            // Enable (for mobile)
            if (mobile.matches) {
                if (!init) {
                    init = true;
                    $('.hero__slider').slick({
                        autoplay: false,
                        slidesToShow: 2,
                        pauseOnFocus: true,
                        pauseOnHover: true,
                        arrows: false,
                        dots: false,
                        responsive: [{
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                autoplay: true,
                                fade: true,
                                autoplaySpeed: 3000,
                            }
                        }]
                    });
                }

            }

            // Disable (for desktop)
            else if (desktop.matches && init) {
                $('.hero__slider').slick('unslick');
                init = false;
            }
        }
        slickModeHero();
        window.addEventListener('resize', function() {
            slickModeHero();
        });
    }
    let indiSliders = document.querySelector('.indicators');
    if (indiSliders) {
        let init = false;

        function slickModeIndi() {
            let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)')
            let desktop = window.matchMedia('(min-width: 768px)');
            // Enable (for mobile)
            if (mobile.matches) {
                if (!init) {
                    init = true;
                    $('.indicators__items').slick({
                        autoplay: false,
                        slidesToShow: 1,
                        arrows: false,
                        dots: false,
                        fade: true,
                        asNavFor: '.indicators__img',
                        adaptiveHeight: true,
                    });
                    $('.indicators__img').slick({
                        autoplay: false,
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                        fade: true,
                        asNavFor: '.indicators__items',
                    });
                }

            }

            // Disable (for desktop)
            else if (desktop.matches && init) {
                $('.indicators__items').slick('unslick');
                $('.indicators__img').slick('unslick');
                init = false;
            }
        }
        slickModeIndi();
        window.addEventListener('resize', function() {
            slickModeIndi();
        });
    }
};

// loader func
function submitForm() {
    $('#form_loader').show();
}
//Alert form
let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
for (let item of alertClose) {
    item.addEventListener('click', function(event) {
        alertt.classList.remove("alert--active")
        alertt.classList.remove("alert--warning")
        alertt.classList.remove("alert--error")
    })
}