"use strict";

var SoloGame = Class.extend({
    init: function() {
        var gameController = new GameController(gameInit);

        (function animloop(){
            stats.begin();
            
            gameController.update();
            gameController.draw();
            requestAnimFrame(animloop);

            stats.end();
        })();
    }
})
