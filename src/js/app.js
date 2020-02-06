import $ from 'jquery'
$(document).ready(() =>{
    $("a.scroll").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
    });

    $(".item-slide").on("click", function(){
        $(this).toggleClass("item-slide--active");
        $(this).find(".item-slide__content").slideToggle();
    });

    let $mediaElementsAll = $(".timetable-col");
    let $mediaElements = $(".timetable-col:not(.archive)");
    $('.timetable-nav .timetable-nav__link').click(function(e){
        e.preventDefault();
        let filterVal = $(this).data('filter');

        if( !$(this).hasClass("timetable-nav__link--active")){
            $('.timetable-nav .timetable-nav__link.timetable-nav__link--active').removeClass("timetable-nav__link--active");
            $(this).addClass("timetable-nav__link--active");
            if(filterVal === 'all'){
                $mediaElementsAll.hide();
                $mediaElements.show();
            }else{
                // hide all then filter the ones to show
                $mediaElementsAll.hide().filter('.' + filterVal).show();
            }
        }
    });

    // Timetable Page
    $(".timetable-btn").on("click", function(){
        $('.cta-block .cta-block__form .form__input_title').val( $(this).data("title") );
    });

    // Sertificate Page
    $(".info__link.info__link_show").on("click", function(e){
        e.preventDefault();
        let info = $(this).closest(".info");
        info.addClass("info--active");
        info.find(".info__content__inside[data-info='intro']").addClass("info__content__inside--hidden-left");
        info.find(".info__content__inside[data-info='details']").removeClass("info__content__inside--hidden-right");
    });
    $(".info__link.info__link_hide").on("click", function(e){
        e.preventDefault();
        let info = $(this).closest(".info");
        info.removeClass("info--active");
        info.find(".info__content__inside[data-info='intro']").removeClass("info__content__inside--hidden-left");
        info.find(".info__content__inside[data-info='details']").addClass("info__content__inside--hidden-right");
    });
    $(".info .info__content .btn").on("click", function(e){
        e.preventDefault();
        let title = $(this).data("title");
        let amount = $(".info .info__form .form-input").val() ;

        if( $(this).hasClass("amount") && amount != ''){
            // заполнение скрытого поля формы
            $(".cta-block#getSertificate .cta-block__form .form__input_title").val( title + " на сумму " + amount);
            // дополнение описания CTA блока
            $("#sertificateInfo").html( title + " на сумму " + amount);
        }else{
            // дополнение описания CTA блока
            $("#sertificateInfo").html( title );
            // заполнение скрытого поля формы
            $(".cta-block#getSertificate .cta-block__form .form__input_title").val( title );
        }
        // прокрутка к форме
        $("html, body").animate({scrollTop: $("#corporateForm").offset().top - 90 + "px"}, {duration: 500,easing: "swing"});
    });
    // Corporate Page
    $(".preview-link .preview-link__link").on("click", function(e){
        e.preventDefault();
        let title = $(this).data("title");
        // заполнение скрытого поля формы
        $(".form#corporateForm .form__input_title").val( title );
        // прокрутка к форме
        $("html, body").animate({scrollTop: $("#corporateForm").offset().top + "px"}, {duration: 500,easing: "swing"});
    });
    // Slider
    if( $(".slider").length ){
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
    };
    // Mobile Navbar
    $(".nav-btn#nav").on("click", function(){
        if( !$(this).hasClass("nav-btn--active")){
            $(this).addClass("nav-btn--active");
            $(".navbar-mobile").addClass("navbar-mobile--active");
            $("body").attr("style", "position: fixed; overflow: hidden;");
        }else{
            $(this).removeClass("nav-btn--active");
            $(".navbar-mobile").removeClass("navbar-mobile--active");
            $("body").attr("style", "");
        }
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
		let dropdownActive = $(".navbar-mobile.navbar-mobile--active"); // элемент
        
		if (!dropdownActive.is(e.target) // клик был не по блоку
            && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
            && !$(".nav-btn#nav").is(e.target) ) { 
                dropdownActive.removeClass("navbar-mobile--active");
                $("body").attr("style", "");
            }
        
    });
    // Hide Navigation on Mobile
    $(window).resize(function(){
      if ( $(window).width() > 991 ){
        $(".navbar-mobile.navbar-mobile--active").removeClass("navbar-mobile--active");
        $("body").attr("style", "");
      }
    });
});