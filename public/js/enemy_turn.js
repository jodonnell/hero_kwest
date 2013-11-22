"use strict";

var EnemyTurn = Turn.extend({
    initialize: function () {
        this.enemyMoving = false;
    },

    clicked: function (leftClicked, position) {
    },

    update: function () {
        var enemy = this.enemyToUpdate();
        if (this.enemyMoving || !enemy)
            return;

        var playerNextToEnemy = enemy.isNextToAny(this.objects.where({enemyAttackable: true}));

        if (playerNextToEnemy) {
            this.unitMovedTo(null, enemy, enemy.position);
        }
        else {
            this.findPath(enemy);
        }
    },

    enemyToUpdate: function () {
				return _.first(_.where(this.objects.where({enemyControlled: true}), {disabled: false}));;
    },

    unitTypes: function () {
				return this.objects.where({enemyControlled: true});
    },

    unitMovedTo: function (event, enemy, position) {
        var player = enemy.isNextToAny(this.objects.where({enemyAttackable: true}));
        if (player)
            (new Battle(enemy, player, this)).attack();
        this.enemyDone(enemy);
    },

    enemyDone: function (enemy) {
        this.enemyMoving = false;
				enemy.disabled = true;
    },

    findPath: function (enemy) {
        this.enemyMoving = true;
        
        var player = _.first(this.objects.where({playerControlled: true}));
        var playerPosition = this.getOpenTileNextToPlayer(player);

        var cannotMoveThroughTiles = this.objects.where({enemyCannotMoveThrough: true});
        var pathFinder = new PathFinder(enemy.position, playerPosition, cannotMoveThroughTiles, $.proxy(function( path )  {
            if (path === null) {
                console.log("Path was not found.");
                this.enemyDone(enemy);
            } else {
                this.objects.removeAll({movementTile: true});
                path.shift(); // first one is where we start
                var positions = _.collect(path, function(p) {return new Position(p.x, p.y)});
                enemy.followPath(positions);
            }
        }, this));
        pathFinder.findPath();
    },

    getOpenTileNextToPlayer: function (player) {
				var playerPosition = new Position(player.position.x() - 1, player.position.y());

        if (this.objects.where({movableThrough: true}).isAtPosition(playerPosition)) {
            return playerPosition;
        }

        playerPosition = new Position(player.position.x() + 1, player.position.y());
        if (this.objects.where({movableThrough: true}).isAtPosition(playerPosition)) {
            return playerPosition;
        }

        playerPosition = new Position(player.position.x(), player.position.y() - 1);
        if (this.objects.where({movableThrough: true}).isAtPosition(playerPosition)) {
            return playerPosition;
        }

        playerPosition = new Position(player.position.x(), player.position.y() + 1);
        if (this.objects.where({movableThrough: true}).isAtPosition(playerPosition)) {
            return playerPosition;
        }
    }
});
