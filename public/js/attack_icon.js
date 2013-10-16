"use strict";

var AttackIcon = Sprite.extend({
    init: function () {
        this.position = new Position(2, 18);
    },

    update: function (args) {
    },

    getCurrentImage: function () {
        return 'attack-icon';
    },

    action: function (playerTurn) {
        var enemy = playerTurn.selectedUnit().isNextToAny(playerTurn.onscreenSprites.enemies);
        if (!enemy)
            return;

        playerTurn.onscreenSprites.menus.removeAll();
        playerTurn.onscreenSprites.menus.push(new BattlePreviewMenu());
        
        // find enemy
        // create battle calculator
        // show calculations
        // confirm
        // do attack and end turn
    }
});
