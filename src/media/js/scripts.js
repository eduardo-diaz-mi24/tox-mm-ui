window.jQuery = window.$ = require('jquery');
var bootstrap = require('bootstrap');

console.log('scripts loaded ...');

$(document).ready(function () {
    $('.banner .fa-bars').click(function () {
        $(this).add('.navigation-wrapper').toggleClass('open');
    });
});


