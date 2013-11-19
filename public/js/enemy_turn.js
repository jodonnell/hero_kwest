"use strict";

var EnemyTurn = Turn.extend({
    initialize: function () {
        this.enemyMoving = false;
    },

    clicked: function (leftClicked, position) {
    },

    update: function () {
        if (this.enemyMoving)
            return;

        var enemy = this.enemyToUpdate();
        if (!enemy)
            return;

        var player = enemy.isNextToAny(this.objects.where({enemyAttackable: true}));

        if (player) {
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
        this.enemyMoving = false;
				enemy.disabled = true;
    },

    findPath: function (enemy) {
        this.enemyMoving = true;
        
        var player = _.first(this.objects.where({playerControlled: true}));
        var playerPosition = new Position(player.position.x() - 1, player.position.y());

        var cannotMoveThroughTiles = this.objects.where({enemyCannotMoveThrough: true});
        var pathFinder = new PathFinder(enemy.position, playerPosition, cannotMoveThroughTiles, $.proxy(function( path )  {
            if (path === null) {
                console.log("Path was not found.");
            } else {
                this.objects.removeAll({movementTile: true});
                path.shift(); // first one is where we start
                var positions = _.collect(path, function(p) {return new Position(p.x, p.y)});
                enemy.followPath(positions);
            }
        }, this));
        pathFinder.findPath();
    }
});
