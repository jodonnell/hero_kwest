"use strict";

var AttackAnimation = Class.extend({
    init: function (unit) {
        this.unit = unit;
        this.startingFrame = 7;
        this.numFrames = 1;
    },

    update: function () {
    },

    finished: function (tick) {
        return tick == 20;
    }
});
