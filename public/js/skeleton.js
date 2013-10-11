"use strict";

var Skeleton = Sprite.extend({
    init: function (position) {
        this.position = position;
        this.movement = 5;
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
