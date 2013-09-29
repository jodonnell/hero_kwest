describe("Onscreen sprites", function() {
    it("can tell if a wall is at a position", function() {
        var onscreenSprites = new OnscreenSprites({walls: [new Wall(1, 2, 'left1')]});

        var position = new Position(1, 1);
        expect(onscreenSprites.walls.isAtPosition(position)).toBeFalsy();

        position = new Position(1, 2);
        expect(onscreenSprites.walls.isAtPosition(position)).toBeTruthy();
    });
});
