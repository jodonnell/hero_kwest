"use strict";

var MoveUnit = Class.extend({
    init: function (objects, unitController, cannotMoveThrough, tileColor) {
        this.objects = objects;
        this.unitController = unitController;
        this.cannotMoveThrough = cannotMoveThrough;
        this.tileColor = tileColor;

        this.cache = [];
    },

    moveTiles: function (position, movement) {
        var cacheKey = position.x() + '_' + position.y() + '_' + movement;
        if (cacheKey in this.cache)
            return;

        this.cache[cacheKey] = true;

        if (this.objects.where(this.cannotMoveThrough).isAtPosition(position))
            return;

        if (!this.objects.where({movementTile: true}).isAtPosition(position)) {
            this.objects.add(new MovementTile(position, this.tileColor), {movementTile: true, z: 101});
        }

        if (movement === 0)
            return;

        this.moveTiles(new Position(position.x() + 1, position.y()), movement - 1);
        this.moveTiles(new Position(position.x() - 1, position.y()), movement - 1);
        this.moveTiles(new Position(position.x(), position.y() + 1), movement - 1);
        this.moveTiles(new Position(position.x(), position.y() - 1), movement - 1);
    },

    createMovementTiles: function (position) {
        var unit = this.objects.where(this.unitController).atPosition(position);

        this.selectedUnit = unit;

        var movementSquares = unit.movement;
        this.moveTiles(position, movementSquares);
    },

    movePlayerIfClickedTile: function (position) {
        if (!this.isValidMovementSpot(position))
            return;

        this.originalPosition = this.selectedUnit.position;
        this.objects.removeAll({movementTile: true});

        this.selectedUnit.moveTo(position, $.proxy(function () {
            $(window).trigger('unitMovedTo', [this.selectedUnit, position]);
        }, this));
    },

    isValidMovementSpot: function (position) {
        return this.objects.where({movementTile: true}).isAtPosition(position)
            && ((!this.objects.where(this.unitController).isAtPosition(position)) || this.selectedUnit.position.isEqual(position));
    },

    disableUnit: function () {
				this.selectedUnit.disabled = true;
    },

    reset: function () {
        this.objects.removeAll({menus: true});
        this.objects.removeAll({movementTile: true});
        if (this.originalPosition)
            this.selectedUnit.position = this.originalPosition;
    }

});
