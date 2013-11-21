"use strict";

var Text = Sprite.extend({
    init: function (x, y, text) {
        this.x = x;
        this.y = y;
        this.text = text;
    },

    draw: function () {
        gameContext.fillStyle = '#ff0000';
        gameContext.font = "bold 18px sans-serif";

				gameContext.fillText(this.text, this.x, this.y);
    },

    update: function () {
				
    }
});

