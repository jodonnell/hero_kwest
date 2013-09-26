"use strict";

var Wall = Sprite.extend({
    init: function (x, y, wallSide) {
        this.x = x;
        this.y = y;
        this.currentImage = 'tiles';

        if (wallSide === 'left') {
            this.spriteSheetX = TILE_SIZE * 0;
            this.spriteSheetY = TILE_SIZE * 2;
        }
        else if (wallSide === 'top') {
            this.spriteSheetX = TILE_SIZE * 1;
            this.spriteSheetY = TILE_SIZE * 0;
        }
        else if (wallSide === 'top2') {
            this.spriteSheetX = TILE_SIZE * 2;
            this.spriteSheetY = TILE_SIZE * 0;
        }

    }
});
