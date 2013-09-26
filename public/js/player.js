"use strict";

var Player = Sprite.extend({
    init: function (x, y) {
        this.x = x;
        this.y = y;
    },

    update: function (args) {
    },

    getCurrentImage: function () {
        return 'player';
    },

    draw: function () {
        var image = gameImages[this.getCurrentImage()];
        gameContext.drawImage(image, this.x * TILE_SIZE - 16, this.y * TILE_SIZE - 24);
    },
});
