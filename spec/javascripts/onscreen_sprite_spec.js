describe("Onscreen sprites", function() {
    it("can remove a wall", function() {
        var wall = new Wall((new Position(1, 2)), 'left1');
        var onscreenSprites = new OnscreenSprites({walls: [wall]});

        expect(onscreenSprites.walls.length).toBe(1);

        onscreenSprites.walls.remove(wall);
        expect(onscreenSprites.walls.length).toBe(0);
    });

    it("can tell if a wall is at a position", function() {
        var onscreenSprites = new OnscreenSprites({walls: [new Wall((new Position(1, 2)), 'left1')]});

        var position = new Position(1, 1);
        expect(onscreenSprites.walls.isAtPosition(position)).toBeFalsy();

        position = new Position(1, 2);
        expect(onscreenSprites.walls.isAtPosition(position)).toBeTruthy();
    });

    it("can get the sprite at a position", function() {
        var player = new Player(new Position(1, 2));
        var onscreenSprites = new OnscreenSprites({playerUnits: [player]});

        var position = new Position(1, 1);
        expect(onscreenSprites.playerUnits.atPosition(position)).toBeFalsy();

        position = new Position(1, 2);
        expect(onscreenSprites.playerUnits.atPosition(position)).toBe(player);
    });

});
