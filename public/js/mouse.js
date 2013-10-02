"use strict";

var Mouse = Class.extend({
    init: function (player, onscreenSprites) {
        this.clicked = false;
        this.onscreenSprites = onscreenSprites;
        $("#gameCanvas").click($.proxy(function (event) { this.onCanvasClick(event.pageX, event.pageY) }, this));
    },

    onCanvasClick: function (mouseX, mouseY) {
        var x = Math.floor((mouseX - $('#gameCanvas').offset().left) / TILE_SIZE);
        var y = Math.floor((mouseY - $('#gameCanvas').offset().top) / TILE_SIZE);
        var position = new Position(x, y);

        if (this.clicked) {
            if (this.onscreenSprites.movementTiles.isAtPosition(position)) {
                this.onscreenSprites.player.position = position;
                this.clicked = false;
                this.onscreenSprites.movementTiles.splice(0, this.onscreenSprites.movementTiles.length);
            }
        }
        else {
            if (position.isEqual(this.onscreenSprites.player.position)) {
                this.clicked = true;
                for (var i = x - 2; i < x + 3; i++) {
                    for (var j = y - 2; j < y + 3; j++) {
                        var movementTilePosition = new Position(i, j);
                        if (!this.onscreenSprites.walls.isAtPosition(movementTilePosition))
                            this.onscreenSprites.movementTiles.push(new MovementTile(movementTilePosition));
                    }
                }
            }
        }
    }
});
