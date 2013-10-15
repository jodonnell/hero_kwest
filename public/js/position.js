"use strict";

var Position = Class.extend({
    init: function (x, y) {
        this._x = x;
        this._y = y;
    },

    x: function () {
				return this._x;
    },

    y: function () {
				return this._y;
    },

    setY: function (y) {
				return this._y = y;
    },

    setX: function (x) {
				return this._x = x;
    },

    xPixels: function (position) {
				return this.x() * TILE_SIZE;
    },

    yPixels: function (position) {
				return this.y() * TILE_SIZE;
    },

    isEqual: function (position) {
				return this.x() === position.x() && this.y() === position.y();
    },

    isNextTo: function (position) {
				return position.x() - 1 === this.x() && position.y() === this.y()
            || position.x() + 1 === this.x() && position.y() === this.y()
            || position.x() === this.x() && position.y() - 1 === this.y()
            || position.x() === this.x() && position.y() + 1 === this.y();
    }
});
