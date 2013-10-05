"use strict";

var Mouse = Class.extend({
    init: function (gameController) {
        this.gameController = gameController;
        this.onscreenSprites = gameController.onscreenSprites;
        $("#gameCanvas").click($.proxy(function (event) { this.onCanvasClick(event.pageX, event.pageY) }, this));
    },

    onCanvasClick: function (mouseX, mouseY) {
        var x = Math.floor((mouseX - $('#gameCanvas').offset().left) / TILE_SIZE);
        var y = Math.floor((mouseY - $('#gameCanvas').offset().top) / TILE_SIZE);
        var position = new Position(x, y);

        this.gameController.mouseClick(position);
    }
});
