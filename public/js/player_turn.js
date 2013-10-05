"use strict";

var PlayerTurn = Class.extend({
    init: function (onscreenSprites) {
        this.onscreenSprites = onscreenSprites;;
    },

    clicked: function (position) {
				if (this.onscreenSprites.movementTiles.length > 0) {
            this.movePlayerIfClickedTile(position);
        }
        else {
            this.createMovementTiles(position);
        }
    },

    movePlayerIfClickedTile: function (position) {
				if (!this.onscreenSprites.movementTiles.isAtPosition(position)) {
            return;
        }
        
        this.selectedPlayerUnit.position = position;
        this.onscreenSprites.movementTiles.splice(0, this.onscreenSprites.movementTiles.length);
    },

    createMovementTiles: function (position) {
				if (!this.onscreenSprites.playerUnits.isAtPosition(position)) {
            return;
        }

        var playerUnit = this.onscreenSprites.playerUnits.atPosition(position);

        this.selectedPlayerUnit = playerUnit;

        var movementSquares = playerUnit.movement;
        this.moveTiles(position, movementSquares);
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
				
    }
});
