"use strict";

var Skeleton = Unit.extend({
    init: function (position, image, stats) {
        this.newUnit(position, stats);
        this.restingOffsetX = -18;
        this.restingOffsetY = -30;
        this._offsetX = this.restingOffsetX;
        this._offsetY = this.restingOffsetY;
        this.currentImage = image;
    }
});
