"use strict";

var Mouse = Class.extend({
    init: function (gameController) {
        this.gameController = gameController;
        this.onscreenSprites = gameController.onscreenSprites;
        $("#gameCanvas").mousedown($.proxy(function (event) { this.onCanvasClick(event.which, event.pageX, event.pageY) }, this));
    },

    onCanvasClick: function (button, mouseX, mouseY) {
        var x = Math.floor((mouseX - $('#gameCanvas').offset().left) / TILE_SIZE);
        var y = Math.floor((mouseY - $('#gameCanvas').offset().top) / TILE_SIZE);
        var position = new Position(x, y);
        this.gameController.mouseClick(button === 1, position);
    }
});
