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
        if (firstEnemy)
				    firstEnemy.disabled = true;
    },

    isTurnOver: function () {
        var enemyUnits = this.onscreenSprites.enemyUnits;
				return _.every(enemyUnits, function (enemy) {
				    return enemy.disabled;
        });
    },
});
