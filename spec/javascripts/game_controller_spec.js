describe("Game Controller", function() {
    var gameController, gameInit;

    beforeEach(function() { 
        gameInit = new GameInit();
        gameController = new GameController(gameInit);
    });

    afterEach(function() { 
        gameInit.destroyCanvas();
    })

    it("ends the game when you are dead", function() {
        spyOn(gameController.currentTurn, 'isGameOver').andReturn(true);
        spyOn(gameController, 'drawGameOver');
        spyOn(gameController, '_clearBackground');
        
        gameController.draw();
        expect(gameController.drawGameOver).toHaveBeenCalled();
    });

    it("can descend down a level", function() {
        var playerTurn = spyOn(gameController, 'newPlayerTurn');
        gameController.descendLevel();
        expect(playerTurn).toHaveBeenCalled();
    });
});
