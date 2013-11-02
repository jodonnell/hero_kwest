"use strict";

var Battle = Class.extend({
    init: function (attackerUnit, defenderUnit, turn) {
        this.attackerUnit = attackerUnit;
        this.defenderUnit = defenderUnit;
        this.turn = turn;
    },

    attack: function () {
				var calculator = new BattleCalculator(this.attackerUnit, this.defenderUnit);
        
				if (!this.chanceGreaterThan(calculator.evade())) {
            this.defenderUnit.damage(calculator.damage());
            this.turn.damageDone(this.defenderUnit, calculator.damage());
        }

        if (this.defenderUnit.isDead()) {
            this.turn.unitDied(this.defenderUnit);
            this.attackerUnit.gainExp(5);
        }
        else {
            calculator = new BattleCalculator(this.defenderUnit, this.attackerUnit);
            if (!this.chanceGreaterThan(calculator.evade())) {
                this.attackerUnit.damage(calculator.damage());
                this.turn.damageDone(this.attackerUnit, calculator.damage());
            }
        }

        this.turn.finishUnitMove();

        if (this.attackerUnit.isDead()) {
            this.turn.unitDied(this.attackerUnit);
            this.defenderUnit.gainExp(5);
        }

    },

    chanceGreaterThan: function (percent) {
				return _.random(0, 100) <= percent;
    }

});
