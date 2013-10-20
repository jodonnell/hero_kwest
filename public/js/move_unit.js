"use strict";

var MoveUnit = Class.extend({
    init: function (objects) {
        this.objects = objects;
    },

    moveTiles: function (position, movement) {
        if (this.objects.where({playerCannotMoveThrough: true}).isAtPosition(position))
            return;

        if (!this.objects.where({movementTile: true}).isAtPosition(position))
            this.objects.add(new MovementTile(position), {movementTile: true, z: 101});

        if (movement === 0)
            return;

        this.moveTiles(new Position(position.x() + 1, position.y()), movement - 1);
        this.moveTiles(new Position(position.x() - 1, position.y()), movement - 1);
        this.moveTiles(new Position(position.x(), position.y() + 1), movement - 1);
        this.moveTiles(new Position(position.x(), position.y() - 1), movement - 1);
    },

    createMovementTiles: function (position) {
        var playerUnit = this.objects.where({playerControlled: true}).atPosition(position);

        this.selectedPlayerUnit = playerUnit;

        var movementSquares = playerUnit.movement;
        this.moveTiles(position, movementSquares);
    },

    movePlayerIfClickedTile: function (position) {
        if (!this.isValidMovementSpot(position))
            return;

        this.originalPosition = this.selectedPlayerUnit.position;
        this.selectedPlayerUnit.position = position;
        this.objects.removeAll({movementTile: true});
        this.objects.add([new Wait(), new EndTurn(), new AttackIcon()], {menus: true, z: 100});
    },

    isValidMovementSpot: function (position) {
        return this.objects.where({movementTile: true}).isAtPosition(position)
            && !this.objects.where({playerControlled: true}).isAtPosition(position);
    },

    disableUnit: function () {
				this.selectedPlayerUnit.disabled = true;
    },

    reset: function () {
        this.objects.removeAll({menus: true});
        this.objects.removeAll({movementTile: true});
        if (this.originalPosition)
            this.selectedPlayerUnit.position = this.originalPosition;
    }

});
