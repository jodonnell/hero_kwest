"use strict";

var SoloGame = Class.extend({
    init: function() {
        var bub = new Player(new Position(10, 10));

        var gameController = new GameController(gameInit, bub);

        (function animloop(){
            stats.begin();
            
            gameController.update();
            gameController.draw();
            requestAnimFrame(animloop);

            stats.end();
        })();
    }
})
