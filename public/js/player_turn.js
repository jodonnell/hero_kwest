"use strict";

var PlayerTurn = Class.extend({
    init: function (objects) {
        this.objects = objects;

        _.each(this.objects.where({unit: true}), function (unit) {
				    unit.disabled = false;
        });

        this.objects.removeAll({menus: true});
    },

    update: function () {
    },

    damageDone: function (unit, damage) {
        var text = new Text(unit.position.xPixels() + 8, unit.position.yPixels() - 12, damage);
        this.objects.add(new RaisingAndDisappearingTextEffect(text, this.objects), {effect: true});
				this.objects.add(text, {damageNumber: true, z: 1000});
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
            this.moveUnit = new MoveUnit(this.objects);
            this.moveUnit.createMovementTiles(position);
        }
    },

    unitDied: function (unit) {
				this.objects.remove(unit);
    },

    finishUnitMove: function () {
				this.objects.removeAll({menus: true});
        this.moveUnit.disableUnit();
        this.moveUnit = null;
    },

    selectedUnit: function () {
				return this.moveUnit.selectedPlayerUnit;
    },

    isPlayerMovable: function (position) {
				if (!this.objects.where({playerControlled: true}).isAtPosition(position)) {
            return false;
        }

				var playerUnit = this.objects.where({playerControlled: true}).atPosition(position);
        return !playerUnit.disabled;
    },

    isTurnOver: function () {
        var playerUnits = this.objects.where({playerControlled: true});
				return _.every(playerUnits, function (playerUnit) {
				    return playerUnit.disabled;
        });
    },

});
