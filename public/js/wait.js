"use strict";

var Wait = Sprite.extend({
    init: function () {
        this.position = new Position(0, 18);
    },

    update: function (args) {
    },

    getCurrentImage: function () {
        return 'wait';
    },

    action: function (playerTurn) {
				playerTurn.objects.removeAll({menus: true});
        playerTurn.moveUnit.disableUnit();
        playerTurn.moveUnit = null;
    }
});
