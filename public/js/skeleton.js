"use strict";

var Skeleton = Sprite.extend({
    init: function (position, stats) {
        this.position = position;
        this.movement = 5;
        this.disabled = false;

        this._hp = stats.hp;
        this._strength = stats.strength;
        this._defense = stats.defense;
        this._speed = stats.speed;
        this._evade = stats.evade;
        this._critical = stats.critical;
        this._criticalEvade = stats.criticalEvade;
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

    update: function (args) {
    },

    getCurrentImage: function () {
        return 'skeleton';
    },

    draw: function () {
        var image = gameImages[this.getCurrentImage()];
        gameContext.drawImage(image, this.position.xPixels() - 2, this.position.yPixels() - 20);
    }
});
