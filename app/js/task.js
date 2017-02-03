"use strict";

// scroll shadows script
{
    (function () {
        // vars
        var shadowTop = document.getElementById("shadowTop"),
            shadowBottom = document.getElementById("shadowBottom"),
            scrollArea = document.getElementById("scrollArea");
        //  functions
        var whereShadow = function whereShadow(scrollPos, maxScroll) {
            if (scrollPos === maxScroll) {
                shadowBottom.style.opacity = 1;
                shadowTop.style.opacity = 0;
            } else if (scrollPos === 0) {
                shadowTop.style.opacity = 1;
                shadowBottom.style.opacity = 0;
            } else {
                shadowBottom.style.opacity = 0;
                shadowTop.style.opacity = 0;
            }
        };
        // event listeners
        scrollArea.addEventListener("scroll", function (e) {
            var scrollPos = e.target.scrollTop;
            var maxScroll = e.target.scrollHeight - e.target.offsetHeight;
            whereShadow(scrollPos, maxScroll);
        });
    })();
}