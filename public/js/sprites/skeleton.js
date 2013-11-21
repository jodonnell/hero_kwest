"use strict";

var Skeleton = Unit.extend({
    init: function (position, stats) {
        this.newUnit(position, stats);
        this.restingOffsetX = -2;
        this.restingOffsetY = -20;
        this._offsetX = this.restingOffsetX;
        this._offsetY = this.restingOffsetY;
        this.currentImage = 'skeleton';
    }
});
