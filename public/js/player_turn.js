"use strict";

var PlayerTurn = Class.extend({
    init: function (onscreenSprites) {
        this.onscreenSprites = onscreenSprites;;
    },

    clicked: function (leftClicked, position) {
        if (leftClicked == false) {
            return
        }

				if (this.playerSelected()) {
            this.movePlayerIfClickedTile(position);
        }
        else {
            if (this.onscreenSprites.menus.isAtPosition(position)) {
                this.onscreenSprites.menus.splice(0, this.onscreenSprites.menus.length);
                this.selectedPlayerUnit.disabled = true;
            }
            else {
                this.createMovementTiles(position);
            }
        }
    },

    playerSelected: function () {
				return this.onscreenSprites.movementTiles.length > 0;
    },

    movePlayerIfClickedTile: function (position) {
				if (!this.onscreenSprites.movementTiles.isAtPosition(position)) {
            return;
        }
        
        this.selectedPlayerUnit.position = position;
        this.onscreenSprites.movementTiles.splice(0, this.onscreenSprites.movementTiles.length);
        this.onscreenSprites.menus.push(new Wait());
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
