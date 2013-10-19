"use strict";

var Battle = Class.extend({
    init: function (attackerUnit, defenderUnit, turn) {
				var calculator = new BattleCalculator(attackerUnit, defenderUnit);

        if (!this.chanceGreaterThan(calculator.evade())) {
            defenderUnit.damage(calculator.damage());
            turn.damageDone(defenderUnit, calculator.damage());
        }

        if (defenderUnit.isDead()) {
            turn.unitDied(defenderUnit);
        }
        else {
            calculator = new BattleCalculator(defenderUnit, attackerUnit);
            if (!this.chanceGreaterThan(calculator.evade())) {
                attackerUnit.damage(calculator.damage());
                turn.damageDone(attackerUnit, calculator.damage());
            }
        }

        turn.finishUnitMove();

        if (attackerUnit.isDead()) {
            turn.unitDied(attackerUnit);
        }
    },

    chanceGreaterThan: function (percent) {
				return _.random(0, 100) <= percent;
    }

});
