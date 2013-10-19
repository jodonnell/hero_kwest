describe("Battle", function() {
    var stats, player, skeleton, turn;

    beforeEach(function() { 
        stats = {hp: 20, strength: 12, defense: 5, speed: 7, evade: 7, critical: 2, criticalEvade: 2};
        player = new Player(new Position(1, 1), 'player', stats);
        skeleton = new Skeleton(new Position(2, 1), _.clone(stats));

        turn = {
            finishUnitMove: function() {},
            unitDied: function() {}
        };
        spyOn(turn, 'finishUnitMove');
        spyOn(turn, 'unitDied');
    });


    it("does damage", function() {
        var battle = new Battle(player, skeleton, turn);
        expect(player.hp()).toEqual(13);
        expect(turn.finishUnitMove).toHaveBeenCalled();
    });

    it("can evade attack", function() {
        var battle = new Battle(player, skeleton, turn);
        expect(player.hp()).toEqual(13);
        expect(turn.finishUnitMove).toHaveBeenCalled();
    });

    it("will die", function() {
        stats.hp = 3;
        var battle = new Battle(player, skeleton, turn);
        expect(player.isDead()).toBeTruthy();
        expect(turn.unitDied).toHaveBeenCalledWith(player);
    });

    it("wont damage the attacker if it kills the defender", function() {
        stats.hp = 3;
        skeleton.damage(17);

        var battle = new Battle(player, skeleton, turn);
        expect(player.isDead()).toBeFalsy();
        expect(skeleton.isDead()).toBeTruthy();
        expect(turn.unitDied).toHaveBeenCalledWith(skeleton);
    });

});
