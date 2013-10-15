"use strict";

var Sprite = Class.extend({
    draw: function () {
        var image = gameImages[this.getCurrentImage()];

        if ((typeof this.spriteSheetX !== "undefined") && (typeof this.spriteSheetY !== "undefined")) {
            gameContext.drawImage(image, this.spriteSheetX, this.spriteSheetY, TILE_SIZE, TILE_SIZE, this.position.xPixels(), this.position.yPixels(), TILE_SIZE, TILE_SIZE);
        }
        else {
            gameContext.drawImage(image, this.position.xPixels(), this.position.yPixels());
        }
    },

    height: function () {
        return gameImages[this.getCurrentImage()].height;
    },

    width: function () {
        return gameImages[this.getCurrentImage()].width;
    },

    getCurrentImage: function () {
        return this.currentImage;
    },

    update: function () {

    },

    isNextToAny: function (sprites) {
        return _.find(sprites, function (sprite) {
				    return this.position.isNextTo(sprite.position);
        }, this);
    }
});
