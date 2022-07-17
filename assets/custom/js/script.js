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
    // Portfolio Generator
    var portfolioConfig = {
        bedroom: 3,
        drawingroom: 4,
        office: 5,
        shop: 6,
        tvunit: 3,
        wallpaper: 8
    };
    var portfolioContainer = $('.portfolio-container');
    var counter = 0;
    Object.keys(portfolioConfig).forEach(function (key) {
        for (var i = 1; i <= portfolioConfig[key]; i++) {
            portfolioContainer.append(`<div class="col-12 col-md-6 col-lg-4 portfolio-item filter-${key}">
                    <div class="item-wrapper" data-toggle="modal" data-bs-toggle="modal" data-target="#sVewBEMBmo-modal" data-bs-target="#sVewBEMBmo-modal">
                        <img class="w-100" src="assets/custom/img/portfolio/${key}/img${i}.jpeg" alt="${key} design" data-slide-to="${counter}" data-bs-slide-to="${counter++}" data-target="#lb-sVewBEMBmo" data-bs-target="#lb-sVewBEMBmo">
                        <div class="icon-wrapper">
                            <span class="mobi-mbri mobi-mbri-search mbr-iconfont mbr-iconfont-btn"></span>
                        </div>
                    </div>
                </div>`);
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
