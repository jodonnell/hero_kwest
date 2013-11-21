"use strict";

var MovementTile = Sprite.extend({
    init: function (position, color) {
        this.position = position;
        if (color === BLUE_TILES)
            this.color = 'rgba(51, 102, 255, 0.7)';
        else
            this.color = 'rgba(255, 102, 51, 0.7)';
    },

    draw: function () {
        gameContext.beginPath();
        gameContext.rect(this.position.xPixels() , this.position.yPixels(), TILE_SIZE, TILE_SIZE);
        gameContext.fillStyle = this.color;
        gameContext.fill();
    }
});
