describe("Objects", function() {
    var position = new Position(1, 2);
    var objects;
    var wall;

    beforeEach(function () {
        objects = new Objects();
        wall = new Wall(position, 'left1');
    });

    it("can add an object", function () {
        objects.add(wall, {});

        expect(objects.length()).toBe(1);
    });

    it("can not add a property with the name object", function () {
        expect(function() { objects.add(wall, {object: true}) }).toThrow();
    });

    it("can add multiple objects at once", function () {
				var wall2 = new Wall(position, 'left1');

        objects.add([wall, wall2], {});

        expect(objects.length()).toBe(2);
    });

    it("can remove an object", function() {
        objects.add(wall, {});
        expect(objects.length()).toBe(1);

        objects.remove(null);
        expect(objects.length()).toBe(1);

        objects.remove(wall);
        expect(objects.length()).toBe(0);
    });

    it("can find things by properties", function () {
        wall2 = new Wall(position, 'left1');
        wall3 = new Wall(position, 'left1');

        objects.add([wall, wall2], {property: 1});
        objects.add(wall3, {property: 2});

        expect(objects.where({property: 1}).length).toBe(2);
    });

    // it("can tell if a wall is at a position", function() {
    //     var onscreenSprites = new OnscreenSprites({walls: [new Wall(position, 'left1')]});

    //     var position = new Position(1, 1);
    //     expect(onscreenSprites.walls.isAtPosition(position)).toBeFalsy();

    //     position = new Position(1, 2);
    //     expect(onscreenSprites.walls.isAtPosition(position)).toBeTruthy();
    // });

    // it("can get the sprite at a position", function() {
    //     var player = new Player(new Position(1, 2), {hp: 20, strength: 12, defense: 5, speed: 7, evade: 7, critical: 2, criticalEvade: 2});
    //     var onscreenSprites = new OnscreenSprites({playerUnits: [player]});

    //     var position = new Position(1, 1);
    //     expect(onscreenSprites.playerUnits.atPosition(position)).toBeFalsy();

    //     position = new Position(1, 2);
    //     expect(onscreenSprites.playerUnits.atPosition(position)).toBe(player);
    // });

    it("can remove all sprites", function() {
        var wall2 = new Wall(position, 'left1');
        var wall3 = new Wall(position, 'left1');

        objects.add(wall, {property: true});
        objects.add(wall2, {property: true});
        objects.add(wall3, {property: false});

        objects.removeAll({property: true});

        expect(objects.length()).toBe(1);
    });

});
