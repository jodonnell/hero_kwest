"use strict";

var Floor = Sprite.extend({
    init: function (position, color) {
        this.position = position;
        this.currentImage = 'tiles';

        if (color === 'light brown') {
            this.spriteSheetX = TILE_SIZE * 4;
            this.spriteSheetY = TILE_SIZE * 0;
        }
        else if (color === 'navy') {
            this.spriteSheetX = TILE_SIZE * 4;
            this.spriteSheetY = TILE_SIZE * 4;
        }
        else if (color === 'light grey') {
            this.spriteSheetX = TILE_SIZE * 5;
            this.spriteSheetY = TILE_SIZE * 4;
        }
        else if (color === 'yellow') {
            this.spriteSheetX = TILE_SIZE * 1;
            this.spriteSheetY = TILE_SIZE * 2;
        }
        else if (color === 'dark brown') {
            this.spriteSheetX = TILE_SIZE * 2;
            this.spriteSheetY = TILE_SIZE * 2;
        }
        else if (color === 'olive') {
            this.spriteSheetX = TILE_SIZE * 4;
            this.spriteSheetY = TILE_SIZE * 1;
        }
        else if (color === 'light green') {
            this.spriteSheetX = TILE_SIZE * 5;
            this.spriteSheetY = TILE_SIZE * 1;
        }
        else if (color === 'purple') {
            this.spriteSheetX = TILE_SIZE * 4;
            this.spriteSheetY = TILE_SIZE * 2;
        }
        else if (color === 'purple brown') {
            this.spriteSheetX = TILE_SIZE * 5;
            this.spriteSheetY = TILE_SIZE * 2;
        }
        else if (color === 'dark blue') {
            this.spriteSheetX = TILE_SIZE * 4;
            this.spriteSheetY = TILE_SIZE * 3;
        }
        else if (color === 'light blue') {
            this.spriteSheetX = TILE_SIZE * 5;
            this.spriteSheetY = TILE_SIZE * 3;
        }

    },
});
