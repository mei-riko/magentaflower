import $ from 'jquery';

$(document).ready(() =>{
    // Timetable
    let $mediaElementsAll = $(".timetable__col");
    let $mediaElements = $(".timetable__col:not(.archive):not(.empty)");

    $('.timetable_nav .timetable_nav__link').on("click", function(e){
        e.preventDefault();
        let filterVal = $(this).data('filter');

        if( !$(this).hasClass("timetable_nav__link--active")){
            $('.timetable_nav .timetable_nav__link.timetable_nav__link--active').removeClass("timetable_nav__link--active");
            $(this).addClass("timetable_nav__link--active");
            if(filterVal === 'all'){
                $mediaElementsAll.hide();
                $mediaElements.show();
            }else{
                // hide all then filter the ones to show
                console.log( $mediaElementsAll.filter('.' + filterVal).length );
                if( $mediaElementsAll.filter('.' + filterVal).length > 0 ){
                    $mediaElementsAll.hide().filter('.' + filterVal).show();
                }else{
                    $mediaElementsAll.hide().filter('.empty').show();
                }
            }
        }
    });
    // Timetable Page
    $(".timetable__btn").on("click", function(){
        $('.cta-block .cta-block__form .input[data-action="title"]').val( $(this).data("title") );
    });
});