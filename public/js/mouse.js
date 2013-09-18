"use strict";

var Mouse = Class.extend({
    init: function (player, onscreenSprites) {
        this.clicked = false;
        $("#gameCanvas").click($.proxy(function (event) {
            var x = Math.floor((event.pageX - $('#gameCanvas').offset().left) / TILE_SIZE);
            var y = Math.floor((event.pageY - $('#gameCanvas').offset().top) / TILE_SIZE);

            if (this.clicked) {
                if (Math.abs(player.x - x) < 3 && Math.abs(player.y - y) < 3) {
                    player.x = x;
                    player.y = y;
                    this.clicked = false;
                    onscreenSprites.movementTiles.splice(0, onscreenSprites.movementTiles.length);
                }
            }
            else {
                if (x === player.x && y === player.y) {
                    this.clicked = true;
                    for (var i = x - 2; i < x + 3; i++) {
                        for (var j = y - 2; j < y + 3; j++) {
                            onscreenSprites.movementTiles.push(new MovementTile(i, j));
                        }
                    }
                }
            }
        }, this));
    },
});
