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
        if (!leftClicked && this.moveUnit) {
            this.moveUnit.reset();
            this.moveUnit = null;
            return;
        }

        if (this.onscreenSprites.menus.isAtPosition(position)) {
            var menu = this.onscreenSprites.menus.atPosition(position);
            menu.action(this);
        }
        else if (this.moveUnit) {
            this.moveUnit.movePlayerIfClickedTile(position);
        }
        else if (this.isPlayerMovable(position)) {
            this.moveUnit = new MoveUnit(this.onscreenSprites);
            this.moveUnit.createMovementTiles(position);
        }
    },

    isPlayerMovable: function (position) {
				if (!this.onscreenSprites.playerUnits.isAtPosition(position)) {
            return false;
        }
				var playerUnit = this.onscreenSprites.playerUnits.atPosition(position);
        if (playerUnit.disabled)
            return false;

        return true;
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

});
