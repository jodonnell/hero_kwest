"use strict";

var PlayerTurn = Turn.extend({
    initialize: function () {
    },

    update: function () {
    },

    clicked: function (leftClicked, position) {
        if (!leftClicked && this.moveUnit) {
            this.moveUnit.reset();
            this.moveUnit = null;
            return;
        }

        if (this.objects.where({menus: true}).isAtPosition(position)) {
            var menu = this.objects.where({menus: true}).atPosition(position);
            menu.action(this);
        }
        else if (this.moveUnit) {
            this.moveUnit.movePlayerIfClickedTile(position);
        }
        else if (this.isPlayerMovable(position)) {
            this.moveUnit = new MoveUnit(this.objects, {playerControlled: true}, {playerCannotMoveThrough: true}, BLUE_TILES);
            this.moveUnit.createMovementTiles(position);
        }
    },

    selectedUnit: function () {
				return this.moveUnit.selectedUnit;
    },

    isPlayerMovable: function (position) {
				if (!this.objects.where({playerControlled: true}).isAtPosition(position)) {
            return false;
        }

				var playerUnit = this.objects.where({playerControlled: true}).atPosition(position);
        return !playerUnit.disabled;
    },

    unitTypes: function () {
				return this.objects.where({playerControlled: true});
    },

    unitMovedTo: function (event, selectedUnit, position) {
				var landedOnObjects = this.objects.where({tile: true}).allAtPosition(position);
        _.each(landedOnObjects, function (landendOn) {
				    landendOn.unitStoppedOn(selectedUnit);
        }, this);

        this.objects.add([new Wait(), new EndTurn(), new AttackIcon()], {menus: true, z: 100});
    }
});
