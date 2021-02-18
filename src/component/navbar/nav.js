import $ from 'jquery'
$(document).ready(() =>{
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
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // Hide Navigation on Mobile
    $(window).resize(function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 991px)').matches ){
        $(".navbar-mobile.navbar-mobile--active").removeClass("navbar-mobile--active");
        $("body").attr("style", "");
    }
    });

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
});