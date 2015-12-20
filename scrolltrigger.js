// Depends on jQuery

// Runs trigger code once per direction 
// Handles effects depending what direction
;var ScrollTrigger = (function (window, $) {
    'require strict';

    return function (options) {
        var $window = $(window);

        var triggerDownCallback = options ? options.triggerDownCallback : function () {};
        var triggerUpCallback = options ? options.triggerUpCallback : function () {};
        var triggerPos = options ? options.triggerPosition : 0;

        var lastTriggerDirection = 'up'; 
        var lastPos = $window.scrollTop();

        function getDir() {
            return $window.scrollTop() >= lastPos ? 'down' : 'up';
        }

        function isTriggered() {
            if (getDir() === 'down') {
                return $window.scrollTop() > triggerPos;
            } else if (getDir() === 'up') {
                return $window.scrollTop() < triggerPos;
            }
        }

        $window.scroll(function () {
            if (isTriggered()) {
                // only run the code once per trigger direction

                switch (getDir()) {
                    case 'down': 
                        if (lastTriggerDirection === 'up') {
                        triggerDownCallback();
                        lastTriggerDirection = 'down';
                    }
                    break;

                    case 'up':
                        if (lastTriggerDirection === 'down') {
                        triggerUpCallback();
                        lastTriggerDirection = 'up';
                    }
                    break;
                }

            }

            lastPos = $window.scrollTop();
        });
    }; 
})(window, jQuery);
