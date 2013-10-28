"use strict";

var EndTurn = Sprite.extend({
    init: function () {
        this.position = new Position(1, 18);
        this.currentImage = 'endTurn';
    },

    update: function (args) {
    },

    action: function (playerTurn) {
				var playerUnits = playerTurn.objects.where({playerControlled: true});
				_.each(playerUnits, function (playerUnit) {
				    playerUnit.disabled = true;
        });

    }
});
