$(document).ready(function(){
    'use strict';
    $(window).scroll(function(){
        'use strict';
        if($(window).scrollTop() < 80 ){
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
            });
        }else {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });
        }
    });
});

// Smooth scrolling
$(document).ready(function(){
    'use strict';
    $('.nav-link, #scroll-top').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
})
/* Auto padding to header*/
$(document).ready(function() {
    
    'use strict';
    setInterval( function() {

        'use strict';
        
        var windowHeight = $(window).height();
        var containerHeight = $(".header-container").height();
        var padTop = windowHeight - containerHeight;
        
        $(".header-container").css({
            'padding-top': Math.round( padTop / 2) + 'px',
            'padding-bottom': Math.round( padTop / 2) + 'px'
            
        });        
    }, 10)    
});

// bx slider to screens

$(function(){
    $('.bxslider').bxSlider({
        slideWidth: 292.5,
        auto: true,
        minSlides: 1, 
        maxSlides: 3, 
        slideMargin: 50
    });
  });
// Counter
$(document).ready(function() {
    
    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });
});
// Animation / initialize wow

$(document).ready(function() {
    'use strict';
    new WOW().init();
});


