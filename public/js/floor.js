"use strict";

var Floor = Sprite.extend({
    init: function (x, y) {
        this.x = x;
        this.y = y;
        this.currentImage = 'tiles';

        // x - 4, 5 and y - 0, 4
        // x - 1, 2 and y - 2

        var xRand = Math.floor(Math.random() * 2) + 4;
        var yRand = Math.floor(Math.random() * 5);

        this.spriteSheetX = TILE_SIZE * xRand;
        this.spriteSheetY = TILE_SIZE * yRand;
    },
});
