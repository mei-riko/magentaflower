
import $ from 'jquery';

$(document).ready(() =>{
    // Slider
    if( $(".slider").length > 0){
        // Index Page
        $('.slider.slider_index').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            asNavFor: '.slider_nav'
        });
        $('.slider_nav').slick({
            slidesToShow: 8,
            slidesToScroll: 1,
            asNavFor: '.slider.slider_index',
            dots: false,
            centerMode: true,
            focusOnSelect: true
        });
        // Slider Link
        $('.slider.slider_link').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true, 
            infinite: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        });
        // Slider Reviews
        $('.slider.slider_reviews').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            dots: false, 
            infinite: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 860,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        });
        // Slider Page After First Screen
        $('.slider.page__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            dots: false, 
            infinite: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };
});