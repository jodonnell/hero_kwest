"use strict";

var BattlePreviewMenu = Sprite.extend({
    init: function (playerUnit, enemyUnit) {
        this.playerUnit = playerUnit;
        this.enemyUnit = enemyUnit;
        this.x = 0;
        this.y = 0;
        this.position = new Position(0, 0);
    },

    draw: function () {
        gameContext.fillStyle = 'beige';
        gameContext.fillRect(this.x, this.y, 200, 100);

        gameContext.fillStyle = '#1e1e1e';
        gameContext.font = "bold 12px sans-serif";

        var calculator = new BattleCalculator(this.playerUnit, this.enemyUnit);
        this.text("HP - " + this.playerUnit.hp(), 30, 20);
        this.text("DMG - " + calculator.damage(), 30, 40);
        this.text("EVADE - " + calculator.evade(), 30, 60);
        this.text("CRITICAL - " + calculator.critical(), 30, 80);

        var calculator = new BattleCalculator(this.enemyUnit, this.playerUnit);
        this.text("HP - " + this.enemyUnit.hp(), 120, 20);
        this.text("DMG - " + calculator.damage(), 120, 40);
        this.text("EVADE - " + calculator.evade(), 120, 60);
        this.text("CRITICAL - " + calculator.critical(), 120, 80);

        gameContext.drawImage(gameImages['checkmark-icon'], 0, 0);
    },

    text: function (text, x, y) {
				gameContext.fillText(text, x + this.x, y + this.y);
    },

    action: function (playerTurn) {
        (new Battle(this.playerUnit, this.enemyUnit, playerTurn)).attack();
    }
});
