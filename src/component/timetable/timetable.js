import $ from 'jquery';

$(document).ready(() =>{
    // Timetable
    let $mediaElementsAll = $(".timetable__col");
    let $mediaElements = $(".timetable__col:not(.archive)");
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
    $(".timetable__btn").on("click", function(){
        $('.cta-block .cta-block__form .form__input_title').val( $(this).data("title") );
    });
});