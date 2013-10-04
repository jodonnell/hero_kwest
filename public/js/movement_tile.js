"use strict";

var MovementTile = Sprite.extend({
    init: function (position) {
        this.position = position;
    },

    draw: function () {
        gameContext.beginPath();
        gameContext.rect(this.position.xPixels() , this.position.yPixels(), TILE_SIZE, TILE_SIZE);
        gameContext.fillStyle = 'rgba(51, 102, 255, 0.7)';
        gameContext.fill();
    }
});
