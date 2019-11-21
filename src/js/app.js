import $ from 'jquery'
$(document).ready(() =>{
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