(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no");
        };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();
    }
})(document);
