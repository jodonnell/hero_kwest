"use strict";

var Floor = Sprite.extend({
    init: function (x, y) {
        this.x = x;
        this.y = y;
        this.currentImage = 'floor';
    }
});
