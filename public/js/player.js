"use strict";

var Player = Unit.extend({
    init: function (position, image, stats) {
        this.newUnit(position, stats)
        this.currentImage = image;

        if (image === 'radish') {
            this.spriteSheetX = TILE_SIZE * 0;
            this.spriteSheetY = TILE_SIZE * 0;
        }

        this.restingOffsetX = -16;
        this.restingOffsetY = -35;
        this._offsetX = this.restingOffsetX;
        this._offsetY = this.restingOffsetY;
    },

    update: function (args) {
        if (this.animation)
            this.animation.advance();
    },

    offsetX: function () {
				return this._offsetX;
    },

    offsetY: function () {
				return this._offsetY;
    },

    tileSize: function () {
				return TILE_SIZE * 2;
    },

    moveRight: function () {
				this._offsetX++;
        if (this._offsetX === this.restingOffsetX + TILE_SIZE) {
            this._offsetX = this.restingOffsetX;
            this.position = new Position(this.position.x() + 1, this.position.y());
        }
    },

    draw: function () {
        if (this.disabled)
            this.turnGray();
        else
            this._super();
    },

    turnGray: function () {
        var canvas = document.getElementById('effectsCanvas');
        canvas.width = canvas.width;
        var context = canvas.getContext("2d");
        context.drawImage(this.getCurrentImage(), 0, 0);
        var imgd = context.getImageData(0, 0, 64, 64);
        var pix = imgd.data;
        for (var i = 0, n = pix.length; i < n; i += 4) {
            var grayscale = pix[i  ] * .3 + pix[i+1] * .59 + pix[i+2] * .11;
            pix[i  ] = grayscale;   // red
            pix[i+1] = grayscale;   // green
            pix[i+2] = grayscale;   // blue
        }
        context.putImageData(imgd, 0, 0);

        gameContext.drawImage(context.canvas, this.xPixels(), this.yPixels());
    }
});
