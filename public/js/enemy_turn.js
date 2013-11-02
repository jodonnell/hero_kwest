"use strict";

var EnemyTurn = Turn.extend({
    initialize: function () {
    },

    clicked: function (leftClicked, position) {
    },

    update: function () {
        var enemy = this.enemyToUpdate();
        if (!enemy)
            return;

        this.moveUnit = new MoveUnit(this.objects, {enemyControlled: true}, {enemyCannotMoveThrough: true}, RED_TILES);
        this.moveUnit.createMovementTiles(enemy.position);

        var player = enemy.isNextToAny(this.objects.where({enemyAttackable: true}));

        if (player) {
            this.moveUnit.movePlayerIfClickedTile(enemy.position);
            (new Battle(enemy, player, this)).attack();
        }
        else {
            this.moveEnemyToPlayer(enemy);
            this.objects.removeAll({movementTile: true});
        }

				enemy.disabled = true;
    },

    enemyToUpdate: function () {
				return _.first(_.where(this.objects.where({enemyControlled: true}), {disabled: false}));;
    },

    moveEnemyToPlayer: function (enemy) {
				var movementTiles = this.objects.where({movementTile: true});
        _.some(movementTiles, function (movementTile) {
            if (this.objects.where({enemyControlled: true}).isAtPosition(movementTile.position))
                return false;

				    if (movementTile.isNextToAny(this.objects.where({playerControlled: true}))) {
                this.moveUnit.movePlayerIfClickedTile(movementTile.position);
                var player = enemy.isNextToAny(this.objects.where({enemyAttackable: true}));
                (new Battle(enemy, player, this)).attack();
                return true;
            }
        }, this);
    },

    unitTypes: function () {
				return this.objects.where({enemyControlled: true});
    }

});
