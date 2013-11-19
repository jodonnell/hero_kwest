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

        this.moveUnit = new MoveUnit(this.objects, {enemyControlled: true}, {enemyCannotMoveThrough: true}, RED_TILES);
        this.moveUnit.createMovementTiles(enemy.position);

        var player = enemy.isNextToAny(this.objects.where({enemyAttackable: true}));

        if (player) {
            this.moveUnit.movePlayerIfClickedTile(enemy.position);
        }
        else {
            this.findPath(enemy);
            // this.moveEnemyToPlayer(enemy);
            // this.objects.removeAll({movementTile: true});
        }
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
                this.enemyMoving = true;
                this.moveUnit.movePlayerIfClickedTile(movementTile.position);
                return true;
            }
        }, this);
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
        var easystar = new EasyStar.js();
        
        var grid = [];
        for (var y = 0; y < Y_MAX; y++) {
            grid[y] = [];
            for (var x = 0; x < X_MAX; x++) { 
                grid[y][x] = 0;
            }
        }
        var cannotMoveThroughTiles = this.objects.where({enemyCannotMoveThrough: true});
        _.each(cannotMoveThroughTiles, function (cannotMoveThroughTile) {
				    grid[cannotMoveThroughTile.position.y()][cannotMoveThroughTile.position.x()] = 1;
        });

        easystar.setGrid(grid);
        easystar.setAcceptableTiles([0]);

        var player = _.first(this.objects.where({playerControlled: true}));

        easystar.findPath(enemy.position.x(), enemy.position.y(), player.position.x() - 1, player.position.y(), $.proxy(function( path )  {
            if (path === null) {
                console.log("Path was not found.");
            } else {
                this.objects.removeAll({movementTile: true});
                path.shift(); // first one is where we start
                var positions = _.collect(path, function(p) {return new Position(p.x, p.y)});
                enemy.followPath(positions);
            }
        }, this));
        easystar.calculate();
    }
});
