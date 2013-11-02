"use strict";

var Battle = Class.extend({
    init: function (attackerUnit, defenderUnit, turn) {
        this.attackerUnit = attackerUnit;
        this.defenderUnit = defenderUnit;
        this.turn = turn;

				this.attackerCalculator = new BattleCalculator(this.attackerUnit, this.defenderUnit);
        this.defenderCalculator = new BattleCalculator(this.defenderUnit, this.attackerUnit);
    },

    attack: function () {
        this.doAttack(this.attackerUnit, this.defenderUnit, this.attackerCalculator);
        this.doAttack(this.defenderUnit, this.attackerUnit, this.defenderCalculator);

        this.turn.finishUnitMove();
    },

    doAttack: function (attackerUnit, defenderUnit, calculator) {
				if (!attackerUnit.isDead() && !this.doesEvade(calculator)) {
            this.damage(defenderUnit, calculator);
            this.checkForDeath(defenderUnit, attackerUnit);
        }
    },

    damage: function (unit, calculator) {
        var damage = calculator.damage();
        if (this.doesCritical(calculator))
            damage *= 2;

				unit.damage(damage);
        this.turn.damageDone(unit, damage);
    },

    doesCritical: function (calculator) {
        return this.chanceGreaterThan(calculator.critical());
    },

    doesEvade: function (calculator) {
				return this.chanceGreaterThan(calculator.evade());
    },

    chanceGreaterThan: function (percent) {
				return _.random(0, 100) <= percent;
    },

    checkForDeath: function (losingUnit, winningUnit) {
        if (losingUnit.isDead()) {
            this.turn.unitDied(losingUnit);
            winningUnit.gainExp(5);
        }
    }

});
