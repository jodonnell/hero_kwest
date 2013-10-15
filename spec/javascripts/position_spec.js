describe("Position", function() {
    it("has a x and y", function() {
        var position = new Position(1, 1);
        expect(position.x()).toEqual(1);
        expect(position.y()).toEqual(1);
    });

    it("can set an x and y", function() {
        var position = new Position(1, 1);
        position.setX(2);
        position.setY(2);

        expect(position.x()).toEqual(2);
        expect(position.y()).toEqual(2);
    });

    it("compares two points", function() {
        var position = new Position(1, 1);
        var position2 = new Position(2, 1);

        expect(position.isEqual(position2)).toBeFalsy();

        var position3 = new Position(1, 1);
        expect(position.isEqual(position3)).toBeTruthy();
    });

    it("can get pixels", function() {
        var position = new Position(2, 2);

        expect(position.xPixels()).toBe(64);
        expect(position.yPixels()).toBe(64);
    });

    it("knows if a position is next to it", function() {
        var position = new Position(2, 2);
        var position1 = new Position(3, 2);
        var position2 = new Position(1, 2);
        var position3 = new Position(2, 3);
        var position4 = new Position(2, 1);

        var badPosition = new Position(3, 3);

        expect(position.isNextTo(position1)).toBeTruthy();
        expect(position.isNextTo(position2)).toBeTruthy();
        expect(position.isNextTo(position3)).toBeTruthy();
        expect(position.isNextTo(position4)).toBeTruthy();

        expect(position.isNextTo(badPosition)).toBeFalsy();
    });

});
