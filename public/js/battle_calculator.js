"use strict";

var BattleCalculator = Sprite.extend({
    init: function (attacker, defender) {
        this.attacker = attacker;
        this.defender = defender;
    },

    damage: function () {
        return this.calculate(this.attacker.strength(), this.defender.defense());
    },

    evade: function () {
        return this.calculate(this.defender.speed(), this.attacker.evade());
    },

    critical: function () {
        return this.calculate(this.attacker.critical(), this.defender.criticalEvade());
    },

    calculate: function (strength, defense) {
        var damage = strength - defense;
        if (damage < 1)
            damage = 1;
				return damage;
    }
});
