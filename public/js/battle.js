"use strict";

var Battle = Class.extend({
    init: function (attackerUnit, defenderUnit, turn) {
				var calculator = new BattleCalculator(attackerUnit, defenderUnit);
        defenderUnit.damage(calculator.damage());

        calculator = new BattleCalculator(defenderUnit, attackerUnit);
        attackerUnit.damage(calculator.damage());

        turn.finishUnitMove();

        if (attackerUnit.isDead()) {
            turn.unitDied(attackerUnit);
        }
    }

});
