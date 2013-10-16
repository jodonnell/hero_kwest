"use strict";

var Skeleton = Sprite.extend({
    init: function (position, stats) {
        this.position = position;
        this.movement = 5;
        this.disabled = false;
        this.stats = stats;
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
