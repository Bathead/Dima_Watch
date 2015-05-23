jQuery(function($){
    var area = $('.dima-watch-class');

    function runClock(){
        var date = new Date();
        var second = date.getSeconds();
        var minute = date.getMinutes();
        var hour = date.getHours();

        if (hour < 10) hour = "0" + hour;
        if (minute < 10) minute = "0" + minute;
        if (second < 10) second = "0" + second;

        $('.dwatch-digital-clock').html(hour + ':' + minute + ':' + second);
        setTimeout(runClock, 1000);

    }

    area.html('<div class="dwatch-digital-clock"></div>');
    runClock();
});




