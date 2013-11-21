"use strict";

var Wait = Sprite.extend({
    init: function () {
        this.position = new Position(0, 18);
        this.currentImage = 'wait';
    },

    update: function (args) {
    },

    action: function (playerTurn) {
				playerTurn.objects.removeAll({menus: true});
        playerTurn.moveUnit.disableUnit();
        playerTurn.moveUnit = null;
    }
});
