jQuery(function($){
    var area = $('.dima-watch-class');
    function runClock(){
        var date = new Date();
        var second = date.getSeconds();
        var minute = date.getMinutes();
        var hour = date.getHours();

        var s = second * 6;
        var m = minute * 6;
        var Hm = minute * 0.5;
        var h;

        if (hour > 12) {
            h = (hour - 12 ) * 30;
        }
        else {
            h = hour * 30;
        }

        $('.dwatch-analog-second').css({ '-webkit-transform' : 'rotate(' + s + 'deg)',
            '-moz-transform' : 'rotate(' + s + 'deg)',
            '-ms-transform' : 'rotate(' + s + 'deg)',
            '-o-transform' : 'rotate(' + s + 'deg)',
            'transform' : 'rotate(' + s + 'deg)',
            'zoom' : 1
        });

        $('.dwatch-analog-minute').css({ '-webkit-transform' : 'rotate(' + m + 'deg)',
            '-moz-transform' : 'rotate(' + m + 'deg)',
            '-ms-transform' : 'rotate(' + m + 'deg)',
            '-o-transform' : 'rotate(' + m + 'deg)',
            'transform' : 'rotate(' + m + 'deg)',
            'zoom' : 1
        });

        $('.dwatch-analog-hour').css({ '-webkit-transform' : 'rotate(' + (h+Hm) + 'deg)',
            '-moz-transform' : 'rotate(' + (h+Hm) + 'deg)',
            '-ms-transform' : 'rotate(' + (h+Hm) + 'deg)',
            '-o-transform' : 'rotate(' + (h+Hm) + 'deg)',
            'transform' : 'rotate(' + (h+Hm) + 'deg)',
            'zoom' : 1
        });
        setTimeout(runClock, 1000);

    }

    area.html('<div class="dwatch-analog-сlock">' +
    '<div class="dwatch-analog-minute"><img src="/wp-content/plugins/dima_watch/img/minute.png" width="200" height="200"></div>' +
    '<div class="dwatch-analog-hour"><img src="/wp-content/plugins/dima_watch/img/hour.png" width="200" height="200"></div>' +
    '<div class="dwatch-analog-second"><img src="/wp-content/plugins/dima_watch/img/second.png" width="200" height="200"></div>' +
    '<div class="dwatch-analog-dial"><img src="/wp-content/plugins/dima_watch/img/dial.png" width="200" height="200">' +
    '</div>');

    runClock();
});




