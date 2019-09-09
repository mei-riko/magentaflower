import $ from 'jquery'
$(document).ready(() =>{
    $(".item-slide").on("click", function(){
        $(this).toggleClass("item-slide--active");
        $(this).find(".item-slide__content").slideToggle();
    });
});