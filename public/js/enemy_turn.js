"use strict";

var EnemyTurn = Turn.extend({
    initialize: function () {
    },

    clicked: function (leftClicked, position) {
    },

    update: function () {
        var firstEnemy = _.first(_.where(this.objects.where({enemyControlled: true}), {disabled: false}));;
        if (firstEnemy) {
            this.moveUnit = new MoveUnit(this.objects, {enemyControlled: true}, RED_TILES);
            this.moveUnit.createMovementTiles(firstEnemy.position);
            this.moveUnit.movePlayerIfClickedTile(firstEnemy.position);
            var player = firstEnemy.isNextToAny(this.objects.where({enemyAttackable: true}));

            if (player) {
                new Battle(firstEnemy, player, this);
            }
            else {
				        firstEnemy.disabled = true;
            }
        }
    },

    unitTypes: function () {
				return this.objects.where({enemyControlled: true});
    }

});
