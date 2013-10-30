"use strict";

var GameInit = Class.extend({
    init: function () {
        this.createCanvas();
    },

    createCanvas: function () {
        this.width = SCREEN_WIDTH;
        this.height = SCREEN_HEIGHT;

        var left = $(window).width() / 2 - this.width / 2;
        var top = $(window).height() / 2 - this.height / 2;

        var canvasString = '<canvas id="gameCanvas" width="' + this.width + '" height="' + this.height + '"></canvas>';
        var canvas = $('body').append(canvasString);
        $("#gameCanvas").css('position', 'absolute');
        $("#gameCanvas").css('top', top + 'px');
        $("#gameCanvas").css('left', left + 'px');

        $('#gameCanvas').on('contextmenu', function() {return false});
        // $("#gameCanvas").css('width', '1066px');
        // $("#gameCanvas").css('height', '800px');

        var canvasString = '<canvas id="effectsCanvas" style="display: none;" width="' + TILE_SIZE * 2 + '" height="' + TILE_SIZE * 2 + '"></canvas>';
        $('body').append(canvasString);

    },

    destroyCanvas: function () {
        $("#gameCanvas").remove();
    }
});
