"use strict";

var EndTurn = Sprite.extend({
    init: function () {
        this.position = new Position(1, 18);
    },

    update: function (args) {
    },

    getCurrentImage: function () {
        return 'endTurn';
    },

    action: function (playerTurn) {
				var playerUnits = playerTurn.objects.where({playerControlled: true});
				_.each(playerUnits, function (playerUnit) {
				    playerUnit.disabled = true;
        });

    }
});
