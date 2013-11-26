"use strict";

var Torch = Sprite.extend({
    init: function (position, color) {
        this.position = position;
        this.currentImage = 'torch';
        this._offsetY = -10;
    }
});
