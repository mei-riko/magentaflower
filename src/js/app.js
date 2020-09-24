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
    // Slide Info
    $(".item-slide").on("click", function(){
        $(this).toggleClass("item-slide--active");
        $(this).find(".item-slide__content").slideToggle();
    });
    // Show more theme
    $(".show-theme").on("click", function(e){
        e.preventDefault();
        if( $(this).hasClass("show-theme--active") ){
            $(this).text("Скрыть темы");
            $(this).removeClass("show-theme--active");
            $(this).addClass("show-theme--hidden");
            $(".hidden-theme").slideDown().removeClass("hidden-theme--hidden").addClass("hidden-theme--active");
        }else if( $(this).hasClass("show-theme--hidden") ){
            $(this).text("Показать все темы");
            $(this).removeClass("show-theme--hidden");
            $(this).addClass("show-theme--active");
            $(".hidden-theme").slideUp().removeClass("hidden-theme--active").addClass("hidden-theme--hidden");
        }
    });
    // Timetable
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
    // Timer
    if( $(".timer").length > 0 ){

        var end = new Date( $(".timer").data("time"));

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        // var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById('countdown').innerHTML = 'Время вышло :-(';

                return;
            }
            // var days = Math.floor(distance / _day);
            var hours = Math.floor(distance / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            hours = (hours < 10) ? '0' + hours : hours;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            seconds = (seconds < 10) ? '0' + seconds : seconds;

            // document.getElementById('countdown').innerHTML = days + ' ';
            document.getElementById('countdown').innerHTML = hours + ':';
            document.getElementById('countdown').innerHTML += minutes + ':';
            document.getElementById('countdown').innerHTML += seconds;
        }

        timer = setInterval(showRemaining, 1000);

    }
    // Sertificate Page
    $(".info__link.info__link_show").on("click", function(e){
        e.preventDefault();
        let info = $(this).closest(".info");
        info.addClass("info--active");
        info.find(".info__inside[data-info='intro']").addClass("info__inside--hidden-left");
        info.find(".info__inside[data-info='details']").removeClass("info__inside--hidden-right");
    });
    $(".info__link.info__link_hide").on("click", function(e){
        e.preventDefault();
        let info = $(this).closest(".info");
        info.removeClass("info--active");
        info.find(".info__inside[data-info='intro']").removeClass("info__inside--hidden-left");
        info.find(".info__inside[data-info='details']").addClass("info__inside--hidden-right");
    });
    $(".info .info__content .btn.btn_order").on("click", function(e){
        e.preventDefault();
        let title = $(this).data("title");
        // дополнение описания CTA блока
        $("#sertificateInfo").html( title );
        // заполнение скрытого поля формы
        $(".cta-block#getSertificate .cta-block__form .form__input_title").val( title );
        // прокрутка к форме
        $("html, body").animate({scrollTop: $("#getSertificate").offset().top + "px"}, {duration: 500,easing: "swing"});
    });
    $(".info .btn.amount").on("click", function(e){
        e.preventDefault();
        let title = $(this).data("title");
        let amount = $(".info .info__form .form-input").val() ;

        if( amount != ''){
            // заполнение скрытого поля формы
            $(".cta-block#getSertificate .cta-block__form .form__input_title").val( title + " на сумму " + amount);
            // дополнение описания CTA блока
            $("#sertificateInfo").html( title + " на сумму " + amount);
        }else{
            // заполнение скрытого поля формы
            $(".cta-block#getSertificate .cta-block__form .form__input_title").val( title );
            // дополнение описания CTA блока
            $("#sertificateInfo").html( title );
        }
        // прокрутка к форме
        $("html, body").animate({scrollTop: $("#getSertificate").offset().top + "px"}, {duration: 500,easing: "swing"});
    });
    // Corporate Page
    $(".preview-link .preview-link__link").on("click", function(e){
        e.preventDefault();
        let title = $(this).data("title");
        // заполнение скрытого поля формы
        $(".form#corporateForm .form__input_title").val( title );
        // прокрутка к форме
        $("html, body").animate({scrollTop: $("#corporateForm").offset().top - 100 + "px"}, {duration: 500,easing: "swing"});
    });
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
    };
    // Yandex Map
    if( $(".map.map_yandex").length  > 0){
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                center: [59.873338, 30.334284],
                zoom: 14,
                controls: ['fullscreenControl']
            });
            // Добавим панель маршрутизации.
            myMap.controls.add('routePanelControl');
            myMap.controls.add('zoomControl', {position: { top: 108, left: 'auto', right: 10},});
            var control = myMap.controls.get('routePanelControl');
            // Свойства самой панели
            control.options.set({
                maxWidth: '240',
                autofocus: false,
                showHeader: true,
                title: 'Как добраться?',
            });
            // Состояние панели в начале
            control.routePanel.state.set({
                // Тип маршрутизации.
                type: 'auto',
                fromEnabled: true,
                from: '',
                toEnabled: false,
                to: 'Санкт-Петербург, пр. Юрия Гагарина, 7'
            });
            // Опции панели для построения машрутов.
            control.routePanel.options.set({
                reverseGeocoding: true,
                allowSwitch: false,
                // Виды маршрутизации
                types: { auto: true, masstransit: true, pedestrian: true, bicycle: false, taxi: false }
            });
            // Получение объекта, описывающего построенные маршруты.
            var multiRoutePromise = control.routePanel.getRouteAsync();
            multiRoutePromise.then(function(multiRoute) {
                multiRoute.options.set({
                    // Цвет метки начальной точки.
                    wayPointStartIconFillColor: "#dd5287",
                    // Внешний вид линий (для всех маршрутов).
                    routeStrokeColor: "726d72",
                    routeStrokeStyle: "shortdot",
                    routeActiveStrokeColor: "dd5287",
                    routeActiveStrokeStyle: "solid",

                    // wayPointFinishIconLayout: "default#image",
                    // wayPointFinishIconImageHref: "icon/icon-map-marker.png",
                    // wayPointFinishIconImageSize: [30, 43],
                    // wayPointFinishIconImageOffset: [-15, -15],

                    boundsAutoApply: true
                }); 
                
                multiRoute.model.events.once("requestsuccess", function () {
                    var yandexWayPoint = multiRoute.getWayPoints().get(1);
                    // Создаем балун у метки второй точки.
                    ymaps.geoObject.addon.balloon.get(yandexWayPoint);
                    yandexWayPoint.options.set({
                        preset: "islands#grayStretchyIcon",
                        iconContentLayout: ymaps.templateLayoutFactory.createClass(
                            '<b><span style="color:#dd5287;">М</span>аджент<span style="color:#dd5287;">А</span></b>'
                        ),
                        balloonContentLayout: ymaps.templateLayoutFactory.createClass(
                            '<div style="width:180px;max-width:100%;margin:20px 0 20px 20px;text-align:center"><img src="../img/logo.svg"/> <hr style="margin: 10px 0;" /> {{ properties.address|raw }}</div>'
                        )
                    });
                });
            }, function (err) {
                console.log(err); 
            });
            
            // Центрование
            if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 991px)').matches ){
                myMap.setCenter([59.874304, 30.331867], 14, {
                    checkZoomRange: true,
                    duration: 500
                });
            } else{
                myMap.setCenter([59.875338, 30.331867], 14, {
                    checkZoomRange: true,
                    duration: 500
                });
            }
        });
    }
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
      if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 991px)').matches ){
        $(".navbar-mobile.navbar-mobile--active").removeClass("navbar-mobile--active");
        $("body").attr("style", "");
      }
    });
});