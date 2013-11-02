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

    it("can gain enough experience to gain a level", function () {
        var gainLevel = spyOn(player, 'gainLevel');
				player.gainExp(player.expToNextLevel);
        expect(gainLevel).toHaveBeenCalled();
        expect(player.expToNextLevel).toBe(0);
    });

    it("can gain a level", function () {
				player.gainLevel();
        expect(player.strength()).toBe(13);
    })

});
