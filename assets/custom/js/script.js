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
