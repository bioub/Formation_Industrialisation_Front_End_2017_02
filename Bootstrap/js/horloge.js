'use strict';

function start(element) {

    function showHeure() {
        var now = new Date();
        element.innerHTML = now.getHours() + ':' +
            now.getMinutes() + ':' +
            now.getSeconds();
    }

    showHeure();
    setInterval(showHeure, 1000);
}

module.exports = start;