"use strict";

var AttackIcon = Sprite.extend({
    init: function () {
        this.position = new Position(2, 18);
        this.currentImage = 'attack-icon';
    },

    update: function (args) {
    },

    action: function (playerTurn) {
        var enemy = playerTurn.selectedUnit().isNextToAny(playerTurn.objects.where({playerAttackable: true}));
        if (!enemy)
            return;

        playerTurn.objects.removeAll({menus: true});
        playerTurn.objects.add(new BattlePreviewMenu(playerTurn.selectedUnit(), enemy), {menus: true, z: 2000});
    }
});
