describe("Player Turn", function() {
    var playerTurn, onscreenSprites;

    beforeEach(function() { 
        onscreenSprites = new OnscreenSprites();
        playerTurn = new PlayerTurn(onscreenSprites);

        this.addMatchers({
            toBeTheSamePosition: function(expected) {
                return this.actual.isEqual(expected);
            }
        });
    });


    it("when clicked not on a player nothing happens", function() {
        playerTurn.clicked(new Position(1, 1));
        expect(onscreenSprites.movementTiles.length).toBe(0);
    });

    it("when clicked on a player movement tiles are created", function() {
        playerTurn.clicked(new Position(10, 10));
        expect(onscreenSprites.movementTiles.length).toBeGreaterThan(0);
    });

    it("you have to click on movement tiles to move", function() {
        var playerPosition = new Position(10, 10);
        playerTurn.clicked(playerPosition);
        playerTurn.clicked(new Position(20, 20));
        expect(onscreenSprites.playerUnits[0].position).toBeTheSamePosition(playerPosition);
        expect(onscreenSprites.movementTiles.length).toBeGreaterThan(0);
    });

    it("you can move", function() {
        var playerPosition = new Position(10, 10);
        var newPosition = new Position(11, 11);
        playerTurn.clicked(playerPosition);
        playerTurn.clicked(newPosition);
        expect(onscreenSprites.playerUnits[0].position).toBeTheSamePosition(newPosition);
        expect(onscreenSprites.movementTiles.length).toBe(0);
    });

    it("you cannot move into a wall", function() {
        var playerPosition = new Position(10, 10);
        var newPosition = new Position(11, 11);
        onscreenSprites.walls.push(new Wall(newPosition, 'top1'));
        playerTurn.clicked(playerPosition);
        playerTurn.clicked(newPosition);
        expect(onscreenSprites.playerUnits[0].position).toBeTheSamePosition(playerPosition);
    });

});
