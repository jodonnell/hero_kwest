"use strict";

var WalkAnimation = Class.extend({
    init: function (unit, toPosition) {
        this.unit = unit;
        this.toPosition = toPosition;
        this.startingFrame = 0;
        this.numFrames = 6;
    },

    update: function () {
			  if (this.toPosition.x() > this.unit.position.x()) {
            this.unit.moveRight();
        }
        else if (this.toPosition.x() < this.unit.position.x()) {
            this.unit.moveLeft();
        }
        else if (this.toPosition.y() < this.unit.position.y()) {
            this.unit.moveUp();
        }
        else if (this.toPosition.y() > this.unit.position.y()) {
            this.unit.moveDown();
        }
    },

    finished: function () {
        return this.unit.position.isEqual(this.toPosition);
    }
});
