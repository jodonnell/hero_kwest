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
				if (this.effect) {
            this.effect.update();
            if (this.effect.isDone())
                this.effect = null;
        }
    },

    damageDone: function (unit, damage) {
        var text = new Text(unit.position.xPixels() + 8, unit.position.yPixels() - 12, damage);
        this.effect = new RaisingAndDisappearingTextEffect(text, this.onscreenSprites.texts);
				this.onscreenSprites.texts.push(text);
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

    unitDied: function (unit) {
				this.onscreenSprites.playerUnits.remove(unit);
				this.onscreenSprites.enemyUnits.remove(unit);
    },

    finishUnitMove: function () {
				this.onscreenSprites.menus.removeAll();
        this.moveUnit.disableUnit();
        this.moveUnit = null;
    },

    selectedUnit: function () {
				return this.moveUnit.selectedPlayerUnit;
    },

    isPlayerMovable: function (position) {
				if (!this.onscreenSprites.playerUnits.isAtPosition(position)) {
            return false;
        }

				var playerUnit = this.onscreenSprites.playerUnits.atPosition(position);
        return !playerUnit.disabled;
    },

    isTurnOver: function () {
        var playerUnits = this.onscreenSprites.playerUnits;
				return _.every(playerUnits, function (playerUnit) {
				    return playerUnit.disabled;
        });
    },

});
