import 'owl.carousel';

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        770:{
            items:2
        },

        1000: {
            items: 3
        }
    }
})
