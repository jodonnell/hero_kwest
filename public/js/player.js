"use strict";

var Player = Sprite.extend({
    init: function (x, y) {
        this.x = x;
        this.y = y;
    },

    update: function (args) {
        var collisionDetector = args.collisionDetector;
        var onscreenSprites = args.onscreenSprites;
    },

    getCurrentImage: function () {
        return 'player';
    },

    draw: function () {
        var image = gameImages[this.getCurrentImage()];
        gameContext.drawImage(image, this.x * 30 - 20, this.y * 30 - 24);
    },
});
