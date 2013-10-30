"use strict";

var GameController = Class.extend({
    init: function (gameInit) {
        this.gameInit = gameInit;
        
        var level = new LevelBuilder();
        this.objects = new Objects();
        this.objects.add(level.playerUnits, this.objects.playerUnit());
        this.objects.add(level.walls, this.objects.walls());
        this.objects.add(level.floors, {movableThrough: true, z: 100});
        this.objects.add(level.enemyUnits, this.objects.enemyUnit());
        this.objects.add(level.stairs, this.objects.stairs());

        this.mouse = new Mouse(this);
        this.newPlayerTurn();
    },

    newPlayerTurn: function () {
        if (this.currentTurn === this.enemyTurn) {
            this.playerTurn = new PlayerTurn(this.objects);
            this.currentTurn = this.playerTurn;
        }
        else {
            this.enemyTurn = new EnemyTurn(this.objects);
            this.currentTurn = this.enemyTurn;
        }
    },

    mouseClick: function(leftClicked, position) {
        this.currentTurn.clicked(leftClicked, position);
    },

    draw: function () {
        if (!("_clearBackground" in this))
            debugger
        this._clearBackground();

        this.objects.draw();
    },

    _clearBackground: function () {
        gameContext.fillStyle = "#010000";
        gameContext.fillRect(0, 0, this.gameInit.width, this.gameInit.height);
    },

    update: function () {
        this.objects.update();
        
        this.currentTurn.update();
        if (this.currentTurn.isTurnOver()) {
            this.newPlayerTurn();
        }
    }
});
