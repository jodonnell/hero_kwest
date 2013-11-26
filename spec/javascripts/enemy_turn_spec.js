describe("Enemy turn", function() {
    var stats, player, skeleton, turn;

    beforeEach(function() { 
        stats = {hp: 20, strength: 12, defense: 5, speed: 7, evade: 7, critical: 2, criticalEvade: 2};
        player = new Player(new Position(1, 1), 'player', stats);
        skeleton = new Skeleton(new Position(2, 1), 'skeleton', _.clone(stats));

        turn = {
            finishUnitMove: function() {},
            unitDied: function() {},
            damageDone: function () {}
        };
        spyOn(turn, 'finishUnitMove');
        spyOn(turn, 'unitDied');

        var objects = new Objects();
        objects.add(player, objects.playerUnit());
        objects.add(skeleton, objects.enemyUnit());
        turn = new EnemyTurn(objects);

    });


    it("can attack", function() {
        var battle = spyOn(window, 'Battle').andCallFake(function () {
				    return {attack: function() {}};
        });

        turn.update();

        expect(battle).toHaveBeenCalled();
    });


    it("will move to player", function() {
        skeleton.position = new Position(4, 1);
        turn.update();
        expect(skeleton.animation.toPosition.isEqual(new Position(2, 1))).toBeTruthy();
    });

});
