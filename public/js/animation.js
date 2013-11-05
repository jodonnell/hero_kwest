"use strict";

var Animation = Class.extend({
    init: function (unit, toPosition, callback) {
        this.unit = unit;
        this.tick = 0;
        this.frameNum = 1;
        this.toPosition = toPosition;
        this.callback = callback;
    },

    advance: function () {
				this.tick++;

        if (this.tick % 10 == 0) {
            this.frameNum++;
            this.unit.spriteSheetX = TILE_SIZE * 2 * this.frameNum;
            if (this.frameNum === 6)
                this.frameNum = 0;
        }

        this.unit.moveRight();

        if (this.unit.position.isEqual(this.toPosition)) {
            this.unit.spriteSheetX = 0;
            this.unit.animation = null;
            this.callback();
        }
    }
});
