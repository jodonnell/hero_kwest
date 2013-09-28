"use strict";

var Wall = Sprite.extend({
    init: function (x, y, wallSide) {
        this.x = x;
        this.y = y;
        this.currentImage = 'tiles';

        if (wallSide === 'left1') {
            this.spriteSheetX = TILE_SIZE * 0;
            this.spriteSheetY = TILE_SIZE * 2;
        }
        else if (wallSide === 'top1') {
            this.spriteSheetX = TILE_SIZE * 1;
            this.spriteSheetY = TILE_SIZE * 0;
        }
        else if (wallSide === 'top2') {
            this.spriteSheetX = TILE_SIZE * 2;
            this.spriteSheetY = TILE_SIZE * 0;
        }
        else if (wallSide === 'front1') {
            this.spriteSheetX = TILE_SIZE * 1;
            this.spriteSheetY = TILE_SIZE * 1;
        }
        else if (wallSide === 'front2') {
            this.spriteSheetX = TILE_SIZE * 2;
            this.spriteSheetY = TILE_SIZE * 1;
        }

    }
});
