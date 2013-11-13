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

        $(window).bind('enteredStairs', $.proxy(this.descendLevel, this));
    },

    descendLevel: function () {
        var level = new LevelBuilder();
        var players = this.objects.where({playerControlled: true});

        this.objects = new Objects();
        this.objects.add(players, this.objects.playerUnit());
        this.objects.add(level.walls, this.objects.walls());
        this.objects.add(level.floors, {movableThrough: true, z: 100});
        this.objects.add(level.enemyUnits, this.objects.enemyUnit());
        this.objects.add(level.stairs, this.objects.stairs());

        this.newPlayerTurn();
    },

    newTurn: function () {
        this.currentTurn.destroy();

        if (this.currentTurn === this.enemyTurn) {
            this.newPlayerTurn();
        }
        else {
            this.newEnemyTurn();
        }
    },

    newPlayerTurn: function () {
				this.playerTurn = new PlayerTurn(this.objects);
        this.currentTurn = this.playerTurn;
    },

    newEnemyTurn: function () {
				this.enemyTurn = new EnemyTurn(this.objects);
        this.currentTurn = this.enemyTurn;
    },

    mouseClick: function(leftClicked, position) {
        this.currentTurn.clicked(leftClicked, position);
    },

    draw: function () {
        if (!("_clearBackground" in this))
            debugger
        this._clearBackground();

        if (this.currentTurn.isGameOver()) {
            this.drawGameOver();
            return;
        }

        this.objects.draw();
    },

    drawGameOver: function () {
				gameContext.fillStyle = '#ff0000';
        gameContext.font = "bold 30px sans-serif";

				gameContext.fillText('Game Over', SCREEN_WIDTH / 2 - 50, SCREEN_HEIGHT / 2);

    },

    _clearBackground: function () {
        gameContext.fillStyle = "#010000";
        gameContext.fillRect(0, 0, this.gameInit.width, this.gameInit.height);
    },

    update: function () {
        if (this.currentTurn.isGameOver()) {
            return;
        }

        this.objects.update();
        
        this.currentTurn.update();
        if (this.currentTurn.isTurnOver()) {
            this.newTurn();
        }
    }
});
