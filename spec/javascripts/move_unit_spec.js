describe("Move Unit", function() {
    var moveUnit, objects;

    beforeEach(function() { 
        var stats = {hp: 20, strength: 12, defense: 5, speed: 7, evade: 7, critical: 2, criticalEvade: 2};
        objects = new Objects();
        objects.add(new Player(playerPosition, 'player', _.clone(stats)), objects.playerUnit());

        moveUnit = new MoveUnit(objects, {playerControlled: true}, {enemyCannotMoveThrough: true}, 'blue');
    });

    it("can descend down stairs", function() {
        player.damage(10);
        expect(player.hp()).toBe(10);
    });
});
