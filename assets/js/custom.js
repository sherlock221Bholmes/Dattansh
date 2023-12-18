// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function openNav() {
    var myNav = document.getElementById("myNav");
    myNav.classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");

    // Close the overlay after clicking on a menu item
    var overlayLinks = myNav.getElementsByClassName("overlay-content")[0].getElementsByTagName("a");
    for (var i = 0; i < overlayLinks.length; i++) {
        overlayLinks[i].addEventListener("click", function () {
            myNav.classList.remove("menu_width");
            document.querySelector(".custom_menu-btn").classList.remove("menu_btn-style");
        });
    }
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});