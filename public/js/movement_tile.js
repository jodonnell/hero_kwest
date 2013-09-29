"use strict";

var MovementTile = Sprite.extend({
    init: function (position) {
        this.position = position;
    },

    draw: function () {
        gameContext.beginPath();
        gameContext.rect(this.position.xPixels() , this.position.yPixels(), TILE_SIZE, TILE_SIZE);
        gameContext.fillStyle = 'rgba(200, 200, 200, 0.5)';
        gameContext.fill();
    }
});
