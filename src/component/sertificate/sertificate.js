import $ from 'jquery';

$(document).ready(() =>{
    // Sertificate Poll
    $(".sertificate.sertificate_poll .sertificate__item").on("click", function(){
        let row = $(this).closest(".sertificate__row");
        if( !$(this).hasClass(".sertificate__item--active")){
            row.find(".sertificate__item--active").removeClass("sertificate__item--active");
            $(this).addClass("sertificate__item--active");
        }
    });
    $(".sertificate.sertificate_poll .sertificate__step .btn[data-href='next']").on("click", function(e){
        e.preventDefault();
        let step = $(this).closest(".sertificate__step");
        let active = step.find(".sertificate__item--active").attr("data-action");

        if( active != undefined){
            step.removeClass("sertificate__step--active");

            let nextStep = $(".sertificate .sertificate__step[data-count="+ active + "]");
            nextStep.addClass("sertificate__step--active");
            // Смена индикатора
            $(".sertificate .sertificate__fill-active").attr( "style", "width: " + nextStep.attr("data-width") + ";");
        }
    });
    $(".sertificate.sertificate_poll .sertificate__step .btn[data-href='prev']").on("click", function(e){
        e.preventDefault();
        let step = $(this).closest(".sertificate__step");
        let active = $(this).attr("data-action");

        if( active != undefined){
            step.removeClass("sertificate__step--active");

            let prevStep = $(".sertificate .sertificate__step[data-count="+ active + "]");
            prevStep.addClass("sertificate__step--active");
            // Смена индикатора
            $(".sertificate .sertificate__fill-active").attr( "style", "width: " + prevStep.attr("data-width") + ";");
        }
    });
    // Sertificate Modal
    $(".sertificate-action-input").on("click", function(){
        $.fancybox.open({ 
            src: "#sertificateModal",
            touch: false,
            autoFocus: false
         });
    });
    $(".sertificate.sertificate_modal .sertificate__item.sertificate__item_modal").on("click", function(){
        $.fancybox.close();
        let title = $(this).find(".sertificate_modal__title").text();
        let link = $(this).find(".sertificate_modal__title").attr("data-link");
        $(".sertificate-action-input").val( title );
        $(".sertificate-action-input").closest("form").attr("data-link", link );
    });
    // Sertificate Money
    $("#getMoneySertificate").on("click", function(e){
        e.preventDefault();
        $.fancybox.open({ 
            src: "#sertificateMoney",
            touch: false,
            autoFocus: false
        });

        let value = $(this).closest(".form").find("#getSertificateValue").val();
        $("#sertificateValue").val( value );
    });
});