"use strict";

var Animation = Class.extend({
    init: function (unit, animation, callback) {
        this.unit = unit;
        this.tick = 0;
        this.callback = callback;
        this.animation = animation;
        this.setStartingFrame();
    },

    advance: function () {
				this.tick++;

        if (this.tick % 10 == 0) {
            this.frameNum++;
            this.unit.spriteSheetX = TILE_SIZE * 2 * this.frameNum;
            if (this.frameNum === this.animation.numFrames)
                this.setStartingFrame();
        }

        this.animation.update();

        if (this.animation.finished(this.tick)) {
            this.unit.spriteSheetX = 0;
            this.unit.animation = null;
            this.callback();
        }
    },

    setStartingFrame: function () {
				this.frameNum = this.animation.startingFrame;
    }
});
