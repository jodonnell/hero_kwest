"use strict";

var Floor = Sprite.extend({
    init: function (position, color) {
        this.position = position;
        this.currentImage = 'room_tiles';

        if (color === 'square floor') {
            this.spriteSheetX = TILE_SIZE * 5;
            this.spriteSheetY = TILE_SIZE * 0;
        }
        else if (color === 'shiny floor') {
            this.spriteSheetX = TILE_SIZE * 6;
            this.spriteSheetY = TILE_SIZE * 0;
        }
        else if (color === 'normal floor') {
            this.spriteSheetX = TILE_SIZE * 4;
            this.spriteSheetY = TILE_SIZE * 0;
        }
        else if (color === 'rocks') {
            this.spriteSheetX = TILE_SIZE * 3;
            this.spriteSheetY = TILE_SIZE * 5;
        }
        else if (color === 'cracked floor') {
            this.spriteSheetX = TILE_SIZE * 7;
            this.spriteSheetY = TILE_SIZE * 0;
        }
        else if (color === 'slime top left') {
            this.spriteSheetX = TILE_SIZE * 6;
            this.spriteSheetY = TILE_SIZE * 4;
        }
        else if (color === 'slime bottom left') {
            this.spriteSheetX = TILE_SIZE * 6;
            this.spriteSheetY = TILE_SIZE * 5;
        }
        else if (color === 'slime top right') {
            this.spriteSheetX = TILE_SIZE * 7;
            this.spriteSheetY = TILE_SIZE * 4;
        }
        else if (color === 'slime bottom right') {
            this.spriteSheetX = TILE_SIZE * 7;
            this.spriteSheetY = TILE_SIZE * 5;
        }
        else if (color === 'hanging1') {
            this.spriteSheetX = TILE_SIZE * 4;
            this.spriteSheetY = TILE_SIZE * 1;
        }
        else if (color === 'hanging2') {
            this.spriteSheetX = TILE_SIZE * 5;
            this.spriteSheetY = TILE_SIZE * 1;
        }
        else if (color === 'hanging3') {
            this.spriteSheetX = TILE_SIZE * 6;
            this.spriteSheetY = TILE_SIZE * 1;
        }
        else if (color === 'hanging slime1') {
            this.spriteSheetX = TILE_SIZE * 7;
            this.spriteSheetY = TILE_SIZE * 2;
        }
        else if (color === 'hanging slime2') {
            this.spriteSheetX = TILE_SIZE * 8;
            this.spriteSheetY = TILE_SIZE * 2;
        }
        else if (color === 'slime') {
            this.spriteSheetX = TILE_SIZE * 7;
            this.spriteSheetY = TILE_SIZE * 8;
        }
        else if (color === 'shadow') {
            this.spriteSheetX = TILE_SIZE * 0;
            this.spriteSheetY = TILE_SIZE * 6;
        }
        else if (color === 'shadow wall left1') {
            this.spriteSheetX = TILE_SIZE * 1;
            this.spriteSheetY = TILE_SIZE * 6;
        }
        else if (color === 'shadow wall left2') {
            this.spriteSheetX = TILE_SIZE * 1;
            this.spriteSheetY = TILE_SIZE * 7;
        }

        else if (color === 'slime emb1') {
            this.spriteSheetX = TILE_SIZE * 5;
            this.spriteSheetY = TILE_SIZE * 3;
        }
        else if (color === 'slime emb2') {
            this.spriteSheetX = TILE_SIZE * 6;
            this.spriteSheetY = TILE_SIZE * 3;
        }
        else if (color === 'slime emb3') {
            this.spriteSheetX = TILE_SIZE * 7;
            this.spriteSheetY = TILE_SIZE * 3;
        }
        else if (color === 'slime emb4') {
            this.spriteSheetX = TILE_SIZE * 5;
            this.spriteSheetY = TILE_SIZE * 4;
        }
        else if (color === 'slime emb5') {
            this.spriteSheetX = TILE_SIZE * 5;
            this.spriteSheetY = TILE_SIZE * 5;
        }
        else if (color === 'slime emb6') {
            this.spriteSheetX = TILE_SIZE * 8;
            this.spriteSheetY = TILE_SIZE * 4;
        }
        else if (color === 'slime emb7') {
            this.spriteSheetX = TILE_SIZE * 8;
            this.spriteSheetY = TILE_SIZE * 5;
        }
        else if (color === 'slime emb8') {
            this.spriteSheetX = TILE_SIZE * 8;
            this.spriteSheetY = TILE_SIZE * 3;
        }

        else if (color === 'slime emb9') {
            this.spriteSheetX = TILE_SIZE * 6;
            this.spriteSheetY = TILE_SIZE * 8;
        }
        else if (color === 'slime emb10') {
            this.spriteSheetX = TILE_SIZE * 8;
            this.spriteSheetY = TILE_SIZE * 8;
        }
        else if (color === 'slime emb11') {
            this.spriteSheetX = TILE_SIZE * 7;
            this.spriteSheetY = TILE_SIZE * 7;
        }
        else if (color === 'slime emb12') {
            this.spriteSheetX = TILE_SIZE * 7;
            this.spriteSheetY = TILE_SIZE * 9;
        }

    },
});
