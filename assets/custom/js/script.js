/* global $, document, window */

$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        
        if (top > 200) {
            $('.cid-sFGMsvHDIa .navbar').addClass('solid');
        } else {
            $('.cid-sFGMsvHDIa .navbar').removeClass('solid');
        }
    });
});

$(window).on('load', function() {
    'use strict';
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
});
