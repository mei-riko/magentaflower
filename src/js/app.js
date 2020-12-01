import $ from 'jquery';
import '../component/navbar/nav';
import '../component/sertificate/sertificate';
import '../component/slider/slider';
import '../component/timetable/timetable';
import '../component/map/map';

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
    // Fancybox
    $('[data-fancybox]').fancybox({
        touch: false,
        autoFocus: false
      });
    // Input mask
    if( $('.phone').length > 0 ) {
        $(".phone").inputmask({
            mask: "+7 999 999 99 99",
            placeholder: " ",
            showMaskOnHover: true,

            onincomplete: function(){ 
                $(this).closest("form").addClass('error-phone'); 
                $(this).addClass('error'); 
                $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
            }, 
            oncomplete: function(){ 
                $(this).closest("form").removeClass('error-phone'); 
                $(this).removeClass('error'); 
                $(this).siblings(".error_phone").removeClass('error').html(''); 
            },
        })
    }
    $('input.phone').on('keydown', function(event) {
        if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
            event.preventDefault();
            $(this).blur();
            return false;
        }
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
    // Corporate Page
    $(".preview-link .preview-link__link").on("click", function(e){
        e.preventDefault();
        let title = $(this).data("title");
        // заполнение скрытого поля формы
        $(".form#corporateForm .form__input_title").val( title );
        // прокрутка к форме
        $("html, body").animate({scrollTop: $("#corporateForm").offset().top - 100 + "px"}, {duration: 500,easing: "swing"});
    });

});