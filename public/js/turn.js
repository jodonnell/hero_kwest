"use strict";

var Turn = Class.extend({
    init: function (objects) {
        this.objects = objects;

        _.each(this.objects.where({unit: true}), function (unit) {
				    unit.disabled = false;
        });

        this.objects.removeAll({menus: true});
        this.initialize();
    },

    damageDone: function (unit, damage) {
        var text = new Text(unit.position.xPixels() + 8, unit.position.yPixels() - 12, damage);
        this.objects.add(new RaisingAndDisappearingTextEffect(text, this.objects), {effect: true});
				this.objects.add(text, {damageNumber: true, z: 10000});
    },

    unitDied: function (unit) {
				this.objects.remove(unit);
    },

    finishUnitMove: function () {
				this.objects.removeAll({menus: true});
        this.moveUnit.disableUnit();
        this.moveUnit = null;
    },

    isTurnOver: function () {
        var units = this.unitTypes();
				return _.every(units, function (unit) {
				    return unit.disabled;
        });
    },

    isGameOver: function () {
        return this.objects.where({playerControlled: true}).length === 0;
    }

});
