"use strict";

var EnemyTurn = Class.extend({
    init: function (onscreenSprites) {
        this.onscreenSprites = onscreenSprites;
        _.each(this.onscreenSprites.playerUnits, function (playerUnit) {
				    playerUnit.disabled = false;
        });
        this.onscreenSprites.menus.removeAll();
    },

    clicked: function (leftClicked, position) {
    },

    update: function () {
        var firstEnemy = _.first(_.where(this.onscreenSprites.enemyUnits, {disabled: false}));;
				//this.createMovementTiles(firstEnemy.position);
				firstEnemy.disabled = true;
    },

    isTurnOver: function () {
        var enemyUnits = this.onscreenSprites.enemyUnits;
				return _.every(enemyUnits, function (enemy) {
				    return enemy.disabled;
        });
    },

    movePlayerIfClickedTile: function (position) {
        if (!this.isValidMovementSpot(position))
            return;

        this.originalPosition = this.selectedPlayerUnit.position;
        this.selectedPlayerUnit.position = position;
        this.onscreenSprites.movementTiles.removeAll();
        this.onscreenSprites.menus.push(new Wait());
        this.onscreenSprites.menus.push(new EndTurn());
    },

    isValidMovementSpot: function (position) {
        return this.onscreenSprites.movementTiles.isAtPosition(position)
            && !this.onscreenSprites.playerUnits.isAtPosition(position)
            && !this.onscreenSprites.enemyUnits.isAtPosition(position);
    },

    createMovementTiles: function (position) {
				if (!this.onscreenSprites.enemyUnits.isAtPosition(position)) {
            return;
        }

        var playerUnit = this.onscreenSprites.enemyUnits.atPosition(position);
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
