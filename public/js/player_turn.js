"use strict";

var PlayerTurn = Class.extend({
    init: function (onscreenSprites) {
        this.onscreenSprites = onscreenSprites;
        _.each(this.onscreenSprites.playerUnits, function (playerUnit) {
				    playerUnit.disabled = false;
        });
        this.onscreenSprites.menus.removeAll();
    },

    clicked: function (leftClicked, position) {
        if (!leftClicked) {
            this.onscreenSprites.menus.removeAll();
            this.onscreenSprites.movementTiles.removeAll();
            if (this.originalPosition)
                this.selectedPlayerUnit.position = this.originalPosition;
            this.originalPosition = null;
            this.selectedPlayerUnit = null;
            return;
        }

        if (this.onscreenSprites.menus.isAtPosition(position)) {
            var menu = this.onscreenSprites.menus.atPosition(position);
            menu.action(this);
        }
				else if (this.isPlayerSelected()) {
            this.movePlayerIfClickedTile(position);
        }
        else if (!this.selectedPlayerUnit) {
            this.createMovementTiles(position);
        }
    },

    isPlayerSelected: function () {
				return this.onscreenSprites.movementTiles.length > 0;
    },

    isTurnOver: function () {
        var playerUnits = this.onscreenSprites.playerUnits;
				return _.every(playerUnits, function (playerUnit) {
				    return playerUnit.disabled;
        });
    },

    movePlayerIfClickedTile: function (position) {
				if (!this.onscreenSprites.movementTiles.isAtPosition(position)) {
            return;
        }

        if (this.onscreenSprites.playerUnits.isAtPosition(position)) {
            return;
        }

        this.originalPosition = this.selectedPlayerUnit.position;
        this.selectedPlayerUnit.position = position;
        this.onscreenSprites.movementTiles.removeAll();
        this.onscreenSprites.menus.push(new Wait());
        this.onscreenSprites.menus.push(new EndTurn());
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
