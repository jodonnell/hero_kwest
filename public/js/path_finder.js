"use strict";

var PathFinder = Class.extend({
    init: function (startPosition, endPosition, cannotMoveThroughTiles, callback) {
        this.cannotMoveThroughTiles = cannotMoveThroughTiles;
        this.startPosition = startPosition;
        this.endPosition = endPosition;
        this.callback = callback;
    },

    findPath: function (enemy) {
        var easystar = new EasyStar.js();
        
        var grid = [];
        for (var y = 0; y < Y_MAX; y++) {
            grid[y] = [];
            for (var x = 0; x < X_MAX; x++) { 
                grid[y][x] = 0;
            }
        }
        _.each(this.cannotMoveThroughTiles, function (cannotMoveThroughTile) {
				    grid[cannotMoveThroughTile.position.y()][cannotMoveThroughTile.position.x()] = 1;
        });

        easystar.setGrid(grid);
        easystar.setAcceptableTiles([0]);

        easystar.findPath(this.startPosition.x(), this.startPosition.y(), this.endPosition.x(), this.endPosition.y(), this.callback);
        easystar.calculate();
    }
});
