"use strict";

var PlayerTurn = Class.extend({
    init: function (onscreenSprites) {
        this.onscreenSprites = onscreenSprites;
        _.each(this.onscreenSprites.playerUnits, function (playerUnit) {
				    playerUnit.disabled = false;
        });
        this.onscreenSprites.menus.removeAll();
    },

    update: function () {
				
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
            var moveUnit = new MoveUnit(this.onscreenSprites);
            moveUnit.createMovementTiles(position);
            this.selectedPlayerUnit = moveUnit.selectedPlayerUnit;
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
