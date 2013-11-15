"use strict";

var Unit = Sprite.extend({
    newUnit: function (position, stats) {
        this.position = position;
        this.movement = 5;
        this.disabled = false;
        this.stats = stats;
        this.currentHp = this.stats.hp;
        this.expToNextLevel = 5;
    },

    hp: function () {
				return this.currentHp;
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
				this.currentHp -= amount;
    },

    isDead: function () {
        return !(this.hp() > 0);
    },
    
    gainExp: function (numExp) {
				this.expToNextLevel -= numExp;
        if (this.expToNextLevel <= 0) {
            this.gainLevel();
				    this.expToNextLevel = 10;
        }
    },

    gainLevel: function () {
        this.stats.hp += 1;
        this.stats.strength += 1;
        this.stats.defense += 1;
        this.stats.speed += 1;
        this.stats.evade += 1;
        this.stats.critical += 1;
        this.stats.criticalEvade += 1;

        this.currentHp = this.stats.hp;
    },

    moveTo: function (position, callback) {
        this.animation = new Animation(this, position, callback);
    },

    moveRight: function () {
				this._offsetX++;
        if (this._offsetX === this.restingOffsetX + TILE_SIZE) {
            this._offsetX = this.restingOffsetX;
            this.position = new Position(this.position.x() + 1, this.position.y());
        }
    },

    moveLeft: function () {
				this._offsetX--;
        if (this._offsetX === this.restingOffsetX - TILE_SIZE) {
            this._offsetX = this.restingOffsetX;
            this.position = new Position(this.position.x() - 1, this.position.y());
        }
    },
    
    moveUp: function () {
				this._offsetY--;
        if (this._offsetY === this.restingOffsetY - TILE_SIZE) {
            this._offsetY = this.restingOffsetY;
            this.position = new Position(this.position.x(), this.position.y() - 1);
        }
    },

    moveDown: function () {
				this._offsetY++;
        if (this._offsetY === this.restingOffsetY + TILE_SIZE) {
            this._offsetY = this.restingOffsetY;
            this.position = new Position(this.position.x(), this.position.y() + 1);
        }
    },

    update: function (args) {
				if (this.animation)
            this.animation.advance();
    }
});
