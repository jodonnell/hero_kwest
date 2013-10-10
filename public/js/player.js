"use strict";

var Player = Sprite.extend({
    init: function (position) {
        this.position = position;
        this.movement = 5;
        this.disabled = false;
    },

    update: function (args) {
    },

    getCurrentImage: function () {
        return 'player';
    },

    draw: function () {
        var image = gameImages[this.getCurrentImage()];
        
        if (this.disabled)
            this.turnGray();
        else
            gameContext.drawImage(image, this.position.xPixels() - 16, this.position.yPixels() - 24);
    },

    turnGray: function () {
        var image = gameImages[this.getCurrentImage()];
        var canvas = $('#effectsCanvas').get(0).getContext("2d");
        canvas.drawImage(image, 0, 0);
        var imgd = canvas.getImageData(0, 0, 64, 64);
        var pix = imgd.data;
        for (var i = 0, n = pix.length; i < n; i += 4) {
            var grayscale = pix[i  ] * .3 + pix[i+1] * .59 + pix[i+2] * .11;
            pix[i  ] = grayscale;   // red
            pix[i+1] = grayscale;   // green
            pix[i+2] = grayscale;   // blue
        }
        canvas.putImageData(imgd, 0, 0);

        gameContext.drawImage(canvas.canvas, this.position.xPixels() - 16, this.position.yPixels() - 24);
    }
});
