"use strict";

var MovementTile = Sprite.extend({
    init: function (x, y) {
        this.x = x;
        this.y = y;
    },

    draw: function () {
        gameContext.beginPath();
        gameContext.rect(this.x * TILE_SIZE , this.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        gameContext.fillStyle = 'rgba(200, 200, 200, 0.5)';
        gameContext.fill();
    }
});
