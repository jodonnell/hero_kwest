describe("Move Unit", function() {
    var moveUnit, objects;
    var playerPosition = new Position(10, 10);
    var player;

    beforeEach(function() { 
        var stats = {hp: 20, strength: 12, defense: 5, speed: 7, evade: 7, critical: 2, criticalEvade: 2};
        player = new Player(playerPosition, 'player', _.clone(stats));
        objects = new Objects();
        objects.add(player, objects.playerUnit());

        moveUnit = new MoveUnit(objects, {playerControlled: true}, {playerCannotMoveThrough: true}, BLUE_TILES);
    });

    it("can descend down stairs", function() {
        var stairsPosition = new Position(11, 11);
        var stairs = new Stairs(stairsPosition);
        objects.add(stairs, objects.stairs());

        spyOn(stairs, 'unitStoppedOn');

        moveUnit.createMovementTiles(playerPosition);
        moveUnit.movePlayerIfClickedTile(stairsPosition);
        expect(stairs.unitStoppedOn).toHaveBeenCalledWith(player);
    });
});
