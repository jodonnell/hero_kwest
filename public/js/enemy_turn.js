"use strict";

var EnemyTurn = Turn.extend({
    initialize: function () {
    },

    clicked: function (leftClicked, position) {
    },

    update: function () {
        var firstEnemy = _.first(_.where(this.objects.where({enemyControlled: true}), {disabled: false}));;
        if (firstEnemy) {
            this.moveUnit = new MoveUnit(this.objects, {enemyControlled: true}, {enemyCannotMoveThrough: true}, RED_TILES);
            this.moveUnit.createMovementTiles(firstEnemy.position);

            var player = firstEnemy.isNextToAny(this.objects.where({enemyAttackable: true}));

            if (player)
                this.moveUnit.movePlayerIfClickedTile(firstEnemy.position);
            else {
                var movementTiles = this.objects.where({movementTile: true});
                _.some(movementTiles, function (movementTile) {
				            if (movementTile.isNextToAny(this.objects.where({playerControlled: true}))) {
                        this.moveUnit.movePlayerIfClickedTile(movementTile.position);
                        player = firstEnemy.isNextToAny(this.objects.where({enemyAttackable: true}));
                        return true;
                    }
                }, this);
            }

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
