"use strict";

var Player = Sprite.extend({
    init: function (position, image, stats) {
        this.position = position;
        this.movement = 5;
        this.disabled = false;
        this.image = image;
        this._hp = stats.hp;
        this._strength = stats.strength;
        this._defense = stats.defense;
        this._speed = stats.speed;
        this._evade = stats.evade;
        this._critical = stats.critical;
        this._criticalEvade = stats.criticalEvade;
    },

    update: function (args) {
    },

    hp: function () {
				return this._hp;
    },

    strength: function () {
				return this._strength;
    },

    defense: function () {
				return this._defense;
    },

    speed: function () {
				return this._speed;
    },

    evade: function () {
				return this._evade;
    },

    critical: function () {
				return this._critical;
    },

    criticalEvade: function () {
				return this._criticalEvade;
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
