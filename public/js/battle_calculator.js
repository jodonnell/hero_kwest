"use strict";

var BattleCalculator = Sprite.extend({
    init: function (attacker, defender) {
        this.attacker = attacker;
        this.defender = defender;
    },

    damage: function () {
        var damage = this.attacker.strength() - this.defender.defense();
        if (damage < 1)
            damage = 1;
				return damage;
    },

    evade: function () {
        var damage = this.attacker.evade() - this.defender.speed();
        if (damage < 1)
            damage = 1;
				return damage;
    },

    critical: function () {
        var damage = this.attacker.critical() - this.defender.criticalEvade();
        if (damage < 1)
            damage = 1;
				return damage;
    }
});
