"use strict";

var Player = Sprite.extend({
    init: function (position) {
        this.position = position;
        this.movement = 5;
    },

    update: function (args) {
    },

    getCurrentImage: function () {
        return 'player';
    },

    draw: function () {
        var image = gameImages[this.getCurrentImage()];
        gameContext.drawImage(image, this.position.xPixels() - 16, this.position.yPixels() - 24);
    },
});
