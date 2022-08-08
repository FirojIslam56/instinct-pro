/*-----------Banner Slider-------------*/
var sliderImg = document.getElementById("sliderImg");
var sliderImages = new Array("./img/banner-slider-image-1.jpg", "./img/banner-slider-image-2.jpg", "./img/banner-slider-image-3.jpg", "./img/banner-slider-image-4.jpg", "./img/banner-slider-image-5.jpg");

var i = 0;
var sliderImagesLength = sliderImages.length;

function bannerImageSliding() {
    if (i > sliderImagesLength - 1) {
        i = 0;
    }
    sliderImg.src = sliderImages[i];
    i++;
    setTimeout('bannerImageSliding()', 20000);
}


//-------------Our Products-------Owl Carousel---------------//
$('#our-products-owl-demo').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        350: {
            items: 2
        },
        730: {
            items: 3
        },
        830: {
            items: 4
        },
        992: {
            items: 5
        },
        1200: {
            items: 6
        }
    }

})



/*-------------Counter Up------------*/
$('.counter').counterUp({
    delay: 100,
    time: 5000
});



/*----------Popular------isotop------*/
$(window).on("load", function () {
    var products_all_items = $(".products-all-items").isotope({});
    $(".nav-items li").on("click", function () {
        $(".nav-items li").removeClass("product-filter-active");
        $(this).addClass("product-filter-active");

        products_all_items.isotope({
            filter: $(this).data("filter"),
        });
    });

});
AOS.init();



/*---------toggler icon----------*/
var nav_menu_id = document.getElementById("nav-menu-id");
var menuid = document.getElementById("menuId");
var crossid = document.getElementById("crossId");

function togglerMenu() {
    nav_menu_id.style.height = "auto";
    menuid.style.display = "none";
    crossid.style.display = "block";

    nav_menu_id.style.transition = ".3s";
}
function togglerCross() {
    nav_menu_id.style.height = "0px";
    menuid.style.display = "block";
    crossid.style.display = "none";

    nav_menu_id.style.transition = ".3s";
}


/*---------------Sliding Book--------------*/
$('#mySlidingBookId').turn({gradients: true, acceleration: true});


