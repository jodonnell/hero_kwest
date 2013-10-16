"use strict";

var Skeleton = Unit.extend({
    init: function (position, stats) {
        this.newUnit(position, stats)
    },

    update: function (args) {
    },

    getCurrentImage: function () {
        return 'skeleton';
    },

    draw: function () {
        var image = gameImages[this.getCurrentImage()];
        gameContext.drawImage(image, this.position.xPixels() - 2, this.position.yPixels() - 20);
    }
});
