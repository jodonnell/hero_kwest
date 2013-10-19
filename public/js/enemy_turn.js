"use strict";

var EnemyTurn = Class.extend({
    init: function (objects) {
        this.objects = objects;

        _.each(this.objects.where({unit: true}), function (unit) {
				    unit.disabled = false;
        });

        this.objects.removeAll({menus: true});
    },

    clicked: function (leftClicked, position) {
    },

    update: function () {
        var firstEnemy = _.first(_.where(this.objects.where({enemyControlled: true}), {disabled: false}));;
        if (firstEnemy)
				    firstEnemy.disabled = true;
    },

    isTurnOver: function () {
        var enemyUnits = this.objects.where({enemyControlled: true});
				return _.every(enemyUnits, function (enemy) {
				    return enemy.disabled;
        });
    },
});
