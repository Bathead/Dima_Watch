jQuery(function($){
    var area = $('.dima-alarm-class');
    var alarmButton;
    var alarmTime = getCookie('alarmTime');
    var setAlarmButton = '<button class="dwatch-set-alarm">Завести будильник</button>';
    var cancelAlarmButton = '<button class="dwatch-cancel-alarm">' + alarmTime + '</button>';
    var alarmInterval;
    if(alarmTime) {
        alarmInterval = setInterval(checkAlarm, 1000);
        alarmButton = cancelAlarmButton;
    }
    else
    {
        alarmButton = setAlarmButton;
    }
    area.html('<div class="dwatch-alarm-area">' +
    '<div class="dwatch-alarm-button">' + alarmButton + '</div>' +
    '<div class="dwatch-alarm-handler">' +
    '<input type="text" class="dwatch-alarm-input" style="width: 50%" autocomplete="off">&nbsp;<button class="dwatch-alarm-apply">OK</button>' +
    '</div></div><div class="dwatch-alarm-sound"></div>');
    function checkAlarm() {
        var date = new Date();
        var second = date.getSeconds();
        var minute = date.getMinutes();
        var hour = date.getHours();
        var checkTime = alarmTime.split(':');

        if(hour == checkTime[0] && minute == checkTime[1] && second == checkTime[2]) {
            var audio = new Audio('/wp-content/plugins/dima_watch/wav/alarm1.wav');
            audio.play();

            $('body').prepend('<div class="dwatch-notification">Будильник задзвенів о ' + alarmTime + '. Наступний раз буде завтра о ' + alarmTime + '.</div>');
        }
    }
    $(document).on('click', '.dwatch-set-alarm', function () {
        $('.dwatch-alarm-handler').show();
        $('.dwatch-alarm-input').timepicker({
            'timeFormat': 'H:i:s',
            'showDuration': true,
            'step': 10
        });
        $('.dwatch-alarm-input').timepicker('show');
    });
    $(document).on('click', '.dwatch-alarm-apply', function () {
        if($('.dwatch-alarm-input').val() !== '') {
            $('.dwatch-alarm-handler').hide();
            $('.dwatch-alarm-button').html('<button class="dwatch-cancel-alarm">' + $('.dwatch-alarm-input').val() + '</button>');
            setCookie('alarmTime', $('.dwatch-alarm-input').val());
            alarmTime =  $('.dwatch-alarm-input').val();
            alarmInterval = setInterval(checkAlarm, 1000);
        }
        else
        {
            $('.dwatch-alarm-handler').hide();
        }

    });
    $(document).on('click', '.dwatch-notification', function () {
        $(this).fadeOut();
    });

    $(document).on('click', '.dwatch-cancel-alarm', function () {
        deleteCookie('alarmTime');
        $('.dwatch-alarm-button').html(setAlarmButton);
        clearInterval(alarmInterval);
    });
});




