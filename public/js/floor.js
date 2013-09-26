"use strict";

var Floor = Sprite.extend({
    init: function (x, y, color) {
        this.x = x;
        this.y = y;
        this.currentImage = 'tiles';

        // x - 4, 5 and y - 0, 4
        // x - 1, 2 and y - 2

        if (color === 'light brown') {
            this.spriteSheetX = TILE_SIZE * 4;
            this.spriteSheetY = TILE_SIZE * 0;
        }
        else if (color === 'green') {
            this.spriteSheetX = TILE_SIZE * 4;
            this.spriteSheetY = TILE_SIZE * 1;
        }
        else if (color === 'purple') {
            this.spriteSheetX = TILE_SIZE * 4;
            this.spriteSheetY = TILE_SIZE * 2;
        }
        else if (color === 'blue') {
            this.spriteSheetX = TILE_SIZE * 4;
            this.spriteSheetY = TILE_SIZE * 3;
        }
        else if (color === 'navy') {
            this.spriteSheetX = TILE_SIZE * 4;
            this.spriteSheetY = TILE_SIZE * 4;
        }
        else if (color === 'light grey') {
            this.spriteSheetX = TILE_SIZE * 5;
            this.spriteSheetY = TILE_SIZE * 4;
        }

    },
});
