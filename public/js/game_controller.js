"use strict";

var GameController = Class.extend({
    init: function (gameInit, players) {
        this.gameInit = gameInit;

        this.onscreenSprites = new OnscreenSprites({players: [players],
                                                   walls: (new LevelBuilder()).walls,
                                                   floors: (new LevelBuilder()).floors});

        this.mouse = new Mouse(players, this.onscreenSprites);
    },

    draw: function () {
        this._clearBackground();

        var drawMethod = $.proxy(function (i, j) {
            this.onscreenSprites.sprites[i][j].draw();
        }, this);
        this._eachSprite(drawMethod);
    },

    _clearBackground: function () {
        gameContext.fillStyle = "#010000";
        gameContext.fillRect(0, 0, this.gameInit.width, this.gameInit.height);
    },

    update: function () {
        var updateMethod = $.proxy(function (i, j) {
            this.onscreenSprites.sprites[i][j].update({onscreenSprites: this.onscreenSprites});
        }, this);
        this._eachSprite(updateMethod);
    },

    _eachSprite: function (spriteAction) {
        var i, j, sprites;

        for (i = 0; i < this.onscreenSprites.sprites.length; i++) {
            sprites = this.onscreenSprites.sprites[i];
            for (j = 0; j < sprites.length; j++) {
                spriteAction(i, j);
            }
        }
    }
});
