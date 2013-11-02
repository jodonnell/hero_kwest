"use strict";

var Unit = Sprite.extend({
    newUnit: function (position, stats) {
        this.position = position;
        this.movement = 5;
        this.disabled = false;
        this.stats = stats;
        this.expToNextLevel = 5;
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

    damage: function (amount) {
				this.stats.hp = this.stats.hp - amount;
    },

    isDead: function () {
        return !(this.hp() > 0);
    },
    
    gainExp: function (numExp) {
				this.expToNextLevel -= numExp;
        if (this.expToNextLevel <= 0) {
            this.gainLevel();
				    this.expToNextLevel = 0;
        }
    },

    gainLevel: function () {
        this.stats.strength += 1;
        this.stats.defense += 1;
        this.stats.speed += 1;
        this.stats.evade += 1;
    }
});
