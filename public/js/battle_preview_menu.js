"use strict";

var BattlePreviewMenu = Sprite.extend({
    init: function (playerUnit, enemyUnit) {
        this.playerUnit = playerUnit;
        this.enemyUnit = enemyUnit;
        this.x = 0;
        this.y = 0;
    },

    draw: function () {
        gameContext.fillStyle = 'beige';
        gameContext.fillRect(this.x, this.y, 250, 100);

        gameContext.fillStyle = '#1e1e1e';
        gameContext.font = "bold 12px sans-serif";

        var calculator = new BattleCalculator(this.playerUnit, this.enemyUnit);
        this.text("HP - " + this.playerUnit.hp(), 20, 20);
        this.text("DMG - " + calculator.damage(), 20, 40);
        this.text("EVADE - " + calculator.evade(), 20, 60);
        this.text("CRITICAL - " + calculator.critical(), 20, 80);

        var calculator = new BattleCalculator(this.enemyUnit, this.playerUnit);
        this.text("HP - " + this.enemyUnit.hp(), 120, 20);
        this.text("DMG - " + calculator.damage(), 120, 40);
        this.text("EVADE - " + calculator.evade(), 120, 60);
        this.text("CRITICAL - " + calculator.critical(), 120, 80);


    },

    text: function (text, x, y) {
				gameContext.fillText(text, x + this.x, y + this.y);
    }
});
