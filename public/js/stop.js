"use strict";

var Stop = Sprite.extend({
    init: function (position) {
        this.position = position;
    },

    update: function (args) {
    },

    getCurrentImage: function () {
        return 'stop';
    }
});
