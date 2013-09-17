"use strict";

var Player = Sprite.extend({
    init: function (x, y) {
        this.x = x;
        this.y = y;
        this.clicked = false;

        $("#gameCanvas").click($.proxy(function (event) {
            var x = Math.floor((event.pageX - $('#gameCanvas').offset().left) / TILE_SIZE);
            var y = Math.floor((event.pageY - $('#gameCanvas').offset().top) / TILE_SIZE);

            if (this.clicked) {
                if (Math.abs(this.x - x) < 3 && Math.abs(this.y - y) < 3) {
                    this.x = x;
                    this.y = y;
                    this.clicked = false;
                }
            }
            else {
                if (x === this.x && y === this.y) {
                    this.clicked = true;
                }
            }
        }, this));
    },

    update: function (args) {
        var collisionDetector = args.collisionDetector;
        var onscreenSprites = args.onscreenSprites;
    },

    getCurrentImage: function () {
        return 'player';
    },

    draw: function () {
        var image = gameImages[this.getCurrentImage()];
        gameContext.drawImage(image, this.x * 30 - 20, this.y * 30 - 24);

        if (this.clicked) {
            gameContext.beginPath();
            gameContext.rect((this.x - 2) * TILE_SIZE, (this.y - 2) * TILE_SIZE, 5 * TILE_SIZE, 5 * TILE_SIZE);
            gameContext.fillStyle = 'rgba(200, 200, 200, 0.5)';
            gameContext.fill();
        }
    },
});
