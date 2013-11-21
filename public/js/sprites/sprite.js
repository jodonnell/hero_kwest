"use strict";

var Sprite = Class.extend({
    draw: function () {
        var image = this.getCurrentImage();
        if (!image)
            throw 'Image not found: ' + this.currentImage;

        if ((typeof this.spriteSheetX !== "undefined") && (typeof this.spriteSheetY !== "undefined")) {
            gameContext.drawImage(image, this.spriteSheetX, this.spriteSheetY, this.tileSize(), this.tileSize(), this.xPixels(), this.yPixels(), this.tileSize(), this.tileSize());
        }
        else {
            gameContext.drawImage(image, this.xPixels(), this.yPixels());
        }
    },

    offsetX: function () {
				return this._offsetX || 0;
    },

    offsetY: function () {
				return this._offsetY || 0;
    },

    tileSize: function () {
				return TILE_SIZE;
    },

    xPixels: function () {
				return this.position.xPixels() + this.offsetX();
    },

    yPixels: function () {
				return this.position.yPixels() + this.offsetY();
    },

    height: function () {
        return gameImages[this.currentImage].height;
    },

    width: function () {
        return gameImages[this.currentImage].width;
    },

    getCurrentImage: function () {
        return gameImages[this.currentImage];
    },

    update: function () {

    },

    isNextToAny: function (sprites) {
        return _.find(sprites, function (sprite) {
				    return this.position.isNextTo(sprite.position);
        }, this);
    },

    unitStoppedOn: function () {
				
    }
});
