describe("Player Turn", function() {
    var playerTurn, objects;
    var playerPosition = new Position(10, 10);
    var newPosition = new Position(11, 11);
    var waitPosition = new Position(0, 18);
    var endPosition = new Position(1, 18);
    var attackPosition = new Position(2, 18);
    var secondPosition = new Position(8, 8);
    var stats = {hp: 20, strength: 12, defense: 5, speed: 7, evade: 7, critical: 2, criticalEvade: 2};

    beforeEach(function() { 
        objects = new Objects();
        objects.add(new Player(playerPosition, 'player', _.clone(stats)), objects.playerUnit());
        playerTurn = new PlayerTurn(objects);
    });

    it("when clicked not on a player nothing happens", function() {
        playerTurn.clicked(true, new Position(1, 1));
        expect(objects.where({movementTile: true}).length).toBe(0);
    });

    it("when clicked on a player movement tiles are created", function() {
        playerTurn.clicked(true, new Position(10, 10));
        expect(objects.where({movementTile: true}).length).toBeGreaterThan(0);
    });

    it("you have to click on movement tiles to move", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, new Position(20, 20));
        expect(_.first(objects.where({playerControlled: true})).position).toBeTheSamePosition(playerPosition);
        expect(objects.where({movementTile: true}).length).toBeGreaterThan(0);
    });

    it("you can move", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);
        expect(_.first(objects.where({playerControlled: true})).position).toBeTheSamePosition(newPosition);
        expect(objects.where({movementTile: true}).length).toBe(0);
    });

    it("you cannot move into a wall", function() {
        objects.add(new Wall(newPosition, 'top1'), objects.walls());
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);
        expect(_.first(objects.where({playerControlled: true})).position).toBeTheSamePosition(playerPosition);
    });

    it("you cannot move on top of another player unit", function() {
        var players = [new Player(playerPosition, stats), new Player(secondPosition, stats)];

        playerTurn.objects.add(new Player(secondPosition, stats), objects.playerUnit());

        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, secondPosition);
        expect(_.first(objects.where({playerControlled: true})).position).toBeTheSamePosition(playerPosition);
    });

    it("a menu pops up", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);
        expect(objects.where({menus: true}).length).toBeGreaterThan(0);
    });

    it("you can click on the wait icon to wait", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);

        playerTurn.clicked(true, waitPosition);

        expect(objects.where({menus: true}).length).toBe(0);

        // clicking on player now does nothing
        playerTurn.clicked(true, newPosition);
        expect(objects.where({movementTile: true}).length).toBe(0);
        expect(_.first(objects.where({playerControlled: true})).disabled).toBeTruthy();
    });

    it("right clicking cancels movement", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(false, new Position(1, 1));

        expect(objects.where({movementTile: true}).length).toBe(0);
    });

    it("right clicking sends you back to original position", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);

        playerTurn.clicked(false, new Position(1, 1));

        expect(_.first(objects.where({playerControlled: true})).position).toBeTheSamePosition(playerPosition);
    });

    it("you can not move a moved man", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);
        playerTurn.clicked(true, newPosition);
        expect(objects.where({movementTile: true}).length).toBe(0);
    });

    it("you can not move onto a skeleton", function() {
        var skeleton = [new Skeleton(newPosition)];

        playerTurn.objects.add(skeleton, objects.enemyUnit());

        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);
        expect(objects.where({movementTile: true}).length).toBeGreaterThan(0);
    });

    it("you knows when the turn is over", function() {
        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);
        playerTurn.clicked(true, waitPosition);
        expect(playerTurn.isTurnOver()).toBeTruthy();
    });

    it("you can end the turn early", function() {
        var players = [new Player(playerPosition), new Player(secondPosition)];

        objects = new Objects({playerUnits: players});
        playerTurn = new PlayerTurn(objects);

        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, newPosition);
        playerTurn.clicked(true, endPosition);

        expect(playerTurn.isTurnOver()).toBeTruthy();
    });

    it("you can attack", function() {
        var skeleton = [new Skeleton(newPosition, stats)];

        playerTurn.objects.add(skeleton, objects.enemyUnit());

        playerTurn.clicked(true, playerPosition);
        playerTurn.clicked(true, new Position(10, 11));
        playerTurn.clicked(true, attackPosition);

        expect(objects.where({menus: true}).length).toBe(1);
        playerTurn.clicked(true, new Position(0, 0));
        expect(_.first(objects.where({enemyControlled: true})).hp()).toBe(13);
        expect(_.first(objects.where({playerControlled: true})).hp()).toBe(13);

        expect(objects.where({menus: true}).length).toBe(0);
        expect(_.first(objects.where({playerControlled: true})).disabled).toBeTruthy();
    });

    it("is game over when you have no more units", function() {
        expect(playerTurn.isGameOver()).toBeFalsy();
        //objects.removeAll({playerControlled: true});
        //expect(playerTurn.isGameOver()).toBeTruthy();
    });
});
