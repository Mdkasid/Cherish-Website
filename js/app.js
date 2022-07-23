$('#projects-carousel').owlCarousel({
    loop:true,
    margin:24,
    dots:false,
    nav:false,
    smartspeed: 1000,
    autoplay: true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// REVIEWS
$('#reviews-carousel').owlCarousel({
    loop:true,
    margin:24,
    dots:true,
    nav:false,
    smartspeed: 1000,
    autoplay: true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});