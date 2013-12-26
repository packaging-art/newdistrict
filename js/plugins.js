// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

function viewport() {
    var height = $(window).height();
    var menu_height = $(".mainnav").outerHeight();
    var view_adjust = height - menu_height;
    view_adjust = parseInt(view_adjust) + 'px';
    $(".hero_slider").css('height',view_adjust);
}

$(document).ready(function() {
    viewport();

    $(window).resize(function() {
        viewport();
    }); 
});



