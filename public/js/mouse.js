"use strict";

var Mouse = Class.extend({
    init: function (player, onscreenSprites) {
        this.onscreenSprites = onscreenSprites;
        $("#gameCanvas").click($.proxy(function (event) { this.onCanvasClick(event.pageX, event.pageY) }, this));
    },

    onCanvasClick: function (mouseX, mouseY) {
        var x = Math.floor((mouseX - $('#gameCanvas').offset().left) / TILE_SIZE);
        var y = Math.floor((mouseY - $('#gameCanvas').offset().top) / TILE_SIZE);
        var position = new Position(x, y);

        if (this.onscreenSprites.movementTiles.length > 0) {
            this.movePlayerIfClickedTile(position);
        }
        else {
            this.createMovementTiles(position);
        }
    },

    movePlayerIfClickedTile: function (position) {
				if (!this.onscreenSprites.movementTiles.isAtPosition(position)) {
            return;
        }
        
        this.onscreenSprites.player.position = position;
        this.onscreenSprites.movementTiles.splice(0, this.onscreenSprites.movementTiles.length);
    },

    createMovementTiles: function (position) {
				if (!position.isEqual(this.onscreenSprites.player.position)) {
            return;
        }

        for (var i = position.x() - 2; i < position.x() + 3; i++) {
            for (var j = position.y() - 2; j < position.y() + 3; j++) {
                var movementTilePosition = new Position(i, j);
                if (!this.onscreenSprites.walls.isAtPosition(movementTilePosition))
                    this.onscreenSprites.movementTiles.push(new MovementTile(movementTilePosition));
            }
        }
    }
});
