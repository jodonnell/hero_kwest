"use strict";

var EndTurn = Sprite.extend({
    init: function (position) {
        this.position = position;
    },

    update: function (args) {
    },

    getCurrentImage: function () {
        return 'endTurn';
    }
});
