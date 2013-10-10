describe("Player Turn", function() {
    var playerTurn, onscreenSprites;
    var playerPosition = new Position(10, 10);
    var newPosition = new Position(11, 11);

    beforeEach(function() { 
        onscreenSprites = new OnscreenSprites();
        playerTurn = new PlayerTurn(onscreenSprites);
    });

    it("when clicked not on a player nothing happens", function() {
        playerTurn.clicked(true, new Position(1, 1));
        expect(onscreenSprites.movementTiles.length).toBe(0);
    });

    it("when clicked on a player movement tiles are created", function() {
        playerTurn.clicked(true, new Position(10, 10));
        expect(onscreenSprites.movementTiles.length).toBeGreaterThan(0);
    });

    it("you have to click on movement tiles to move", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, new Position(20, 20));
        expect(onscreenSprites.playerUnits[0].position).toBeTheSamePosition(playerPosition);
        expect(onscreenSprites.movementTiles.length).toBeGreaterThan(0);
    });

    it("you can move", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);
        expect(onscreenSprites.playerUnits[0].position).toBeTheSamePosition(newPosition);
        expect(onscreenSprites.movementTiles.length).toBe(0);
    });

    it("you cannot move into a wall", function() {
        onscreenSprites.walls.push(new Wall(newPosition, 'top1'));
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);
        expect(onscreenSprites.playerUnits[0].position).toBeTheSamePosition(playerPosition);
    });

    it("you cannot move on top of another player unit", function() {
        var secondPosition = new Position(8, 8);
        var players = [new Player(playerPosition), new Player(secondPosition)];

        onscreenSprites = new OnscreenSprites({playerUnits: players});
        playerTurn = new PlayerTurn(onscreenSprites);

        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, new Position(8, 8));
        expect(onscreenSprites.playerUnits[0].position).toBeTheSamePosition(playerPosition);
    });

    it("a menu pops up", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);
        expect(onscreenSprites.menus.length).toBe(1);
    });

    it("you can click on the wait icon to wait", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);

        playerTurn.clicked(true, new Position(0, 18));

        expect(onscreenSprites.menus.length).toBe(0);

        // clicking on player now does nothing
        playerTurn.clicked(true, newPosition);
        expect(onscreenSprites.movementTiles.length).toBe(0);
        expect(onscreenSprites.playerUnits[0].disabled).toBeTruthy();
    });

    it("right clicking cancels movement", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(false, new Position(1, 1));

        expect(onscreenSprites.movementTiles.length).toBe(0);
    });

    it("right clicking sends you back to original position", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);

        playerTurn.clicked(false, new Position(1, 1));

        expect(onscreenSprites.playerUnits[0].position).toBeTheSamePosition(playerPosition);
    });

    it("you can not move a moved man", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);
        playerTurn.clicked(true, newPosition);
        expect(onscreenSprites.movementTiles.length).toBe(0);
    });

});
