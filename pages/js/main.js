(function ($) {
    $(".navbar-burger").on("click", function (event) {
        toggleMenu();
        console.log("menu");
        event.preventDefault();
    });
    function toggleMenu() {
        $(".navbar-burger").toggleClass("is-active");
        $('.bgTopNav').toggleClass('is-active')
        $('.topNavUl').toggleClass('is-active');
        if (window.innerWidth <= 768) {
            $('header').toggleClass('px-4');
            $('.header__hambcont').toggleClass('mobile-active');
        }

        // setTimeout(function () {
        //     console.log("exibir menu");
        // }, 100);
    }

    $("header ul.topNavUl li a").on(
        "click",
        function (event) {
            event.preventDefault();
            toggleMenu();
            var url = $(this).attr("href");
            setTimeout(function () {
                $("html, body")
                    .stop()
                    .animate({ scrollTop: $(url).offset().top, }, 800, "easeInOutExpo" );
            }, 200);

        }
    );

    $("a.btnStart, .ulSummary li a").on( "click", function (event) {
            event.preventDefault();
            var url = $(this).attr("href");
            var duration = ($(this).data("duration")) ? $(this).data("duration") : 800;
            $("html, body")
                .stop()
                .animate({ scrollTop: $(url).offset().top, }, duration, "easeInOutExpo" );

        }
    );

    $("#showModal, .closeModal").on( "click", function (event) {
        event.preventDefault();
        $("#modalSlider").toggleClass("is-active");
    });

    $(".header__hambcont").hover(
        function(){
            console.log('mouseover');
            $('.bgTopNav').toggleClass('is-hovered')
        },
        function(){
            console.log('mouseleave');
            $('.bgTopNav').toggleClass('is-hovered')
        }
    );


    const swiper = new Swiper('.swiperHoc', {
        direction: 'horizontal',
        effect: 'fade',
        simulateTouch: false,
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.btnSwiperNext',
            prevEl: '.btnSwiperPrev',
        }
    });

    

    const swiperUnidades = new Swiper('.swiperUnidades', {
        direction: 'horizontal',
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        navigation: {
            nextEl: '.btnSwiperUnidNext',
            prevEl: '.btnSwiperUnidPrev',
        }
    });

    const swiper19 = new Swiper(".swiperCovid19", {
        slidesPerView: "auto",
        direction: 'horizontal',
        spaceBetween: 30,
        grabCursor: true,
        rewind: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swCovidNext',
            prevEl: '.swCovidPrev',
        }
    });

    tippy('[data-tippy-content]', {
        arrow: false,
        trigger: "click",
        hideOnClick: true,
        theme: 'hoac',
        allowHTML: true
    });

    gsap.to('#textureTop', {
        keyframes: {
          "0%": {scale:1, },
          "50%": { scale:0.7, delay: 6 },
          "75%": { scale:0.7},
          "100%": { scale:1, delay: 5 },
        },
        ease: 'none', // ease the entire keyframe block
        duration: 12,
        repeat: -1,
        delay: 0.5
    });

    gsap.to('#textureBottom', {
        keyframes: {
          "0%": {scale:0.7, },
          "50%": { scale:0.95, delay: 8},
          "75%": { scale:0.95},
          "100%": { scale:0.7, delay: 5 },
        },
        ease: 'none', // ease the entire keyframe block
        duration: 14,
        repeat: -1
    });

    setTimeout(function () {
        var maxHeight = -1;
        $('.swiperBox').each(function() {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });
        $('.swiperBox').each(function() {
            $(this).height(maxHeight);
        });
    },500)
    
})(jQuery);

// function init() {
//     window.addEventListener("scroll", function (e) {
//         var distanceY =
//                 window.pageYOffset ||
//                 document.documentElement.scrollTop,
//             shrinkOn = 500,
//             hamb = document.querySelector("header__hambcont");

//         if (distanceY > shrinkOn) {
//             $(".header__hambcont").addClass("is-spying");
//             $(".topNav").addClass("is-active");
//         } else {
//             $(".header__hambcont").removeClass("is-spying");
//             $(".topNav").removeClass("is-active");
//         }
//     });
// }
// window.onload = init();