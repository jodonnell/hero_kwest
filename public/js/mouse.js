"use strict";

var Mouse = Class.extend({
    init: function (player, onscreenSprites) {
        this.clicked = false;
        $("#gameCanvas").click($.proxy(function (event) {
            var x = Math.floor((event.pageX - $('#gameCanvas').offset().left) / TILE_SIZE);
            var y = Math.floor((event.pageY - $('#gameCanvas').offset().top) / TILE_SIZE);
            var position = new Position(x, y);

            if (this.clicked) {
                if (onscreenSprites.movementTiles.isAtPosition(position)) {
                    player.position = position;
                    this.clicked = false;
                    onscreenSprites.movementTiles.splice(0, onscreenSprites.movementTiles.length);
                }
            }
            else {
                if (position.isEqual(player.position)) {
                    this.clicked = true;
                    for (var i = x - 2; i < x + 3; i++) {
                        for (var j = y - 2; j < y + 3; j++) {
                            var movementTilePosition = new Position(i, j);
                            if (!onscreenSprites.walls.isAtPosition(movementTilePosition))
                                onscreenSprites.movementTiles.push(new MovementTile(movementTilePosition));
                        }
                    }
                }
            }
        }, this));
    },
});
