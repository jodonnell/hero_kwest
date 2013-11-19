"use strict";

var WalkAnimation = Class.extend({
    init: function (unit, path) {
        this.unit = unit;
        this.path = path;
        this.startingFrame = 0;
        this.numFrames = 6;
    },

    update: function () {
        var toPosition = _.first(this.path);
			  if (toPosition.x() > this.unit.position.x()) {
            this.unit.moveRight();
        }
        else if (toPosition.x() < this.unit.position.x()) {
            this.unit.moveLeft();
        }
        else if (toPosition.y() < this.unit.position.y()) {
            this.unit.moveUp();
        }
        else if (toPosition.y() > this.unit.position.y()) {
            this.unit.moveDown();
        }
        else {
            this.path.shift();
        }
    },

    finished: function () {
        return this.unit.position.isEqual(_.last(this.path));
    }
});
