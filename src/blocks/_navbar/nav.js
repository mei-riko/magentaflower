import $ from 'jquery';

// Desktop Navbar   
function navbarHover( itemNav ){
    // let item = itemNav.find(".navbar__link");
    let nav = itemNav.data("nav");

    if( $(".navbar__link.navbar__link--active").length > 0 && !itemNav.hasClass("navbar__link--active") ){
        let navActive = $(".navbar__link.navbar__link--active");
        navActive.removeClass("navbar__link--active");
        $(".navbar .navbar__children" + navActive.data("nav")).removeClass("navbar__children--active");
    }

    itemNav.addClass("navbar__link--active");
    $(".navbar .navbar__children" + nav).addClass("navbar__children--active");
}
function navbarUnHover(){
    let item = $(".navbar").find(".navbar__link.navbar__link--active");
    let nav = item.data("nav");

    item.removeClass("navbar__link--active");
    $(".navbar .navbar__children" + nav).removeClass("navbar__children--active");
}

$(document).ready(() =>{
    // Mobile Navbar
    $(".nav-btn#nav").on("click", function(){
        if( !$(this).hasClass("nav-btn--active")){
            $(this).addClass("nav-btn--active");
            $(".navbar-mobile").addClass("navbar-mobile--active");
            
            $(".overlay").removeClass("overlay--disable");
            $(".overlay").addClass("overlay--active");

            $("body").attr("style", "position: fixed; overflow: hidden;");
        }else{
            $(this).removeClass("nav-btn--active");
            $(".navbar-mobile").removeClass("navbar-mobile--active");

            $(".overlay").removeClass("overlay--active");
            $(".overlay").addClass("overlay--disable");

            $("body").attr("style", "");
        }
    });
    
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    
    // Check Windows Size
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        $(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop");
    }else{
        $(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");
    }

    // Desktop Hover Nav
    var timeout = null;
    $('.navbar.navbar--desktop .navbar__link.navbar__link_has-child')
        .mouseenter(function(event){
            clearTimeout(timeout);
            let nav = $(this);
            timeout = setTimeout( function(){
                navbarHover( nav );
            }, 100);
        })
        .mouseleave(function(event){
            clearTimeout(timeout);
            timeout = setTimeout( navbarUnHover , 300);
        });
});

// Cобытие клика по веб-документу
$(document).mouseup(function (e){ // событие клика по веб-документу
    let dropdownActive = $(".navbar-mobile.navbar-mobile--active"); // элемент
    
    if (!dropdownActive.is(e.target) // клик был не по блоку
        && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
        && !$(".nav-btn#nav").is(e.target) ) { 
            dropdownActive.removeClass("navbar-mobile--active");

            $(".overlay").removeClass("overlay--active");
            $(".overlay").addClass("overlay--disable");

            $("body").attr("style", "");
    }
});

// Resize
$(window).on("resize", function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        // Remove Class
        $(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop");
        
        // Desktop Hover Nav
        var timeout = null;
        $('.navbar.navbar--desktop .navbar__link.navbar__link_has-child')
            .mouseenter(function(event){
                clearTimeout(timeout);
                let nav = $(this);
                timeout = setTimeout( function(){
                    navbarHover( nav );
                }, 100);
            })
            .mouseleave(function(event){
                clearTimeout(timeout);
                timeout = setTimeout( navbarUnHover , 300);
            });

        // Hide Mobile Navigation 
        $(".navbar-mobile.navbar-mobile--active").removeClass("navbar-mobile--active");

        $(".overlay").removeClass("overlay--active");
        $(".overlay").addClass("overlay--disable");

        $("body").attr("style", "");
    }else{
        // Remove Class
        $(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");
    }
});