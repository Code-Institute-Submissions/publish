//SPINNER
$(window).on('load', function() {
  $('#spinner').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});




//TEAM CAROUSEL
$(function() {
  $("#snow-team-members").owlCarousel({
    items:2,
    autoplay:true,
    smartSpeed:500,
    loop:true,
    autoplayHoverPause: true,
    nav:true,
    dots:true,
    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
});

//TALENT_BARS_JQUERY_ANIMATION_LOOP_OBJECT

/* =========================================
                Progress Bars
============================================ */
$(function () {

  $("#progress-area").waypoint(function () {

      $(".progress-bar").each(function () {

          $(this).animate({
              width: $(this).attr("aria-valuenow") + "%"
          }, 2000);

      });

      this.destroy();
  }, {
      offset: 'bottom-in-view'
  });

});

/* =========================================
               Responsive Tabs
============================================ */
$(function () {

  $("#services-tabs").responsiveTabs({
      animation: 'slide'
  });

});
/* =========================================
               Portfolio
============================================ */
$(window).on('load', function () {

  // Initialize Isotope
  $("#isotope-container").isotope({});

  // filter items on button click
  $("#isotope-filters").on('click', 'button', function () {

      // get filter value
      var filterValue = $(this).attr('data-filter');

      // filter portfolio
      $("#isotope-container").isotope({
          filter: filterValue
      });

      // active button
      $("#isotope-filters").find('.active').removeClass('active');
      $(this).addClass('active');
  });
});

/* =========================================
               Magnifier
============================================ */
$(function () {

  $("#portfolio-wrapper").magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
          enabled: true
      }
  });

});

/* =========================================
               Testimonials
============================================ */
$(function () {
  $("#testimonial-slider").owlCarousel({
      items: 1,
      autoplay: false,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
});

/* =========================================
              Stats
============================================ */
$(function () {

  $(".counter").counterUp({
      delay: 10,
      time: 2000
  });

});
/* =========================================
              Clients
============================================ */
$(function () {
  $("#clients-list").owlCarousel({
      items: 6,
      autoplay: false,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
          // breakpoint from 0 up
          0: {
              items: 2
          },
          // breakpoint from 480 up
          480: {
              items: 3
          },
          // breakpoint from 768 up
          768: {
              items: 6
          }
      }
  });
});


/* =========================================
            Google Map
============================================ */
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {lat: -33.865427, lng: 151.196123},
          mapTypeId: 'terrain'
        });

        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');

        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(script);

      }

      function eqfeed_callback(results) {
        var heatmapData = [];
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1], coords[0]);
          heatmapData.push(latLng);
        }
        var heatmap = new google.maps.visualization.HeatmapLayer({
          data: heatmapData,
          dissipating: false,
          map: map
        });
      }

      $(window).on('load', function () {
           // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });
});

/* =========================================
            Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {

  // show/hide nav on page load
  showHideNav();

  $(window).scroll(function () {
      //alert("you just scrolled");test

      // show/hide nav on window's scroll
      showHideNav();
  });

  function showHideNav() {

      if ($(window).scrollTop() > 50) {

          // Show white nav
          $("nav").addClass("white-nav-top");

          // Show dark logo
          $(".navbar-brand img").attr("src", "images/logo/2.png");

          // Show back to top button
          $("#back-to-top").fadeIn();

      } else {

          // Hide white nav
          $("nav").removeClass("white-nav-top");

          // Show logo
          $(".navbar-brand img").attr("src", "images/logo/2.png");

          // Hide back to top button
          $("#back-to-top").fadeOut();
      }
  }
});

// Smooth Scrolling
$(function () {

  $("a.smooth-scroll").click(function (event) {

      event.preventDefault();

      // get section id like #about, #servcies, #work, #team and etc.
      var section_id = $(this).attr("href");

      $("html, body").animate({
          scrollTop: $(section_id).offset().top - 64
      }, 1250, "easeInOutExpo");

  });

});

/* =========================================
            Mobile Menu
============================================ */
$(function () {

  // Show mobile nav
  $("#mobile-nav-open-btn").click(function () {
      $("#mobile-nav").css("height", "100%");
  });

  // Hide mobile nav
  $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
      $("#mobile-nav").css("height", "0%");
  });

});

/* =========================================
              Animation
============================================ */
// animate on scroll
$(function () {
  new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

  $("#splash-heading-one").addClass("animated fadeInDown");
  $("#splash-heading-two").addClass("animated fadeInLeft");
  $("#splash-text").addClass("animated zoomIn");
  $("#splash-btn").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");

});



