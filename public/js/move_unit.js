"use strict";

var MoveUnit = Class.extend({
    init: function (onscreenSprites) {
        this.onscreenSprites = onscreenSprites;
    },

    moveTiles: function (position, movement) {
        if (this.onscreenSprites.walls.isAtPosition(position))
            return;

        if (!this.onscreenSprites.movementTiles.isAtPosition(position))
            this.onscreenSprites.movementTiles.push(new MovementTile(position));

        if (movement === 0)
            return;

        this.moveTiles(new Position(position.x() + 1, position.y()), movement - 1);
        this.moveTiles(new Position(position.x() - 1, position.y()), movement - 1);
        this.moveTiles(new Position(position.x(), position.y() + 1), movement - 1);
        this.moveTiles(new Position(position.x(), position.y() - 1), movement - 1);
				
    },

    createMovementTiles: function (position) {
				if (!this.onscreenSprites.playerUnits.isAtPosition(position)) {
            return;
        }

        var playerUnit = this.onscreenSprites.playerUnits.atPosition(position);
        if (playerUnit.disabled)
            return;

        this.selectedPlayerUnit = playerUnit;

        var movementSquares = playerUnit.movement;
        this.moveTiles(position, movementSquares);
    },

    movePlayerIfClickedTile: function (position) {
        if (!this.isValidMovementSpot(position))
            return;

        this.originalPosition = this.selectedPlayerUnit.position;
        this.selectedPlayerUnit.position = position;
        this.onscreenSprites.movementTiles.removeAll();
        this.onscreenSprites.menus.push(new Wait());
        this.onscreenSprites.menus.push(new EndTurn());
        this.onscreenSprites.menus.push(new AttackIcon());
    },

    isValidMovementSpot: function (position) {
        return this.onscreenSprites.movementTiles.isAtPosition(position)
            && !this.onscreenSprites.playerUnits.isAtPosition(position)
            && !this.onscreenSprites.enemies.isAtPosition(position);
    },

});
