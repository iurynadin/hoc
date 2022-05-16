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