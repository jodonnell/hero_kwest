"use strict";

var Player = Sprite.extend({
    init: function (position, image, stats) {
        this.position = position;
        this.movement = 5;
        this.disabled = false;
        this.image = image;
        this.stats = stats;
    },

    update: function (args) {
    },

    hp: function () {
				return this.stats.hp;
    },

    strength: function () {
				return this.stats.strength;
    },

    defense: function () {
				return this.stats.defense;
    },

    speed: function () {
				return this.stats.speed;
    },

    evade: function () {
				return this.stats.evade;
    },

    critical: function () {
				return this.stats.critical;
    },

    criticalEvade: function () {
				return this.stats.criticalEvade;
    },

    getCurrentImage: function () {
        return gameImages[this.image];
    },

    draw: function () {
        if (this.disabled)
            this.turnGray();
        else
            gameContext.drawImage(this.getCurrentImage(), this.position.xPixels() - 16, this.position.yPixels() - 38);
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

        gameContext.drawImage(context.canvas, this.position.xPixels() - 16, this.position.yPixels() - 38);
    }
});
