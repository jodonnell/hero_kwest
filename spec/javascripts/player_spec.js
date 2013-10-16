describe("Player", function() {
    var player;


    beforeEach(function() { 
        var stats = {hp: 20, strength: 12, defense: 5, speed: 7, evade: 7, critical: 2, criticalEvade: 2};
        player = new Player(new Position(1, 1), 'player', stats);
    });

    it("can do damage", function() {
        player.damage(10);
        expect(player.hp()).toBe(10);
    });
});
