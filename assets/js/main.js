;
(function($) {
    'use strict'
    jQuery(document).ready(function() {
        tiltImage();
        textImg();
        stickyHeader();
    })

    function tiltImage() {
        let tiltAnimation = $('.programming-img')

        if (tiltAnimation.length) {
            tiltAnimation.tilt({
                maxTilt: 12,
                easing:         "cubic-bezier(.03,.98,.52,.99)",
                speed:          200,
                transition:     true,
                scale:          1,
                perspective:    1000
            })
        }
    }

    function textImg() {
        $('.shape-3').each(function() {
            let t = 0;
            let i = 1;
            let _this = $(this);
            setInterval(function() {
                t += 1;
                _this.css('background-position-x', -t + 'px')
            }, 6);
        });
    }

    function stickyHeader() {
        $(window).on('scroll', function(){
            const scrollTop = $(window).scrollTop(),
                siteHeader = $('.header');
                if (scrollTop < 200) {
                    siteHeader.removeClass('sticky')
                } else {
                    siteHeader.addClass('sticky')
                }
        })
    }

})(jQuery)