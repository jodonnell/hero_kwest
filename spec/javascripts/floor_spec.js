describe("Floor", function() {
    it("can be loaded correctly", function() {
        var position = new Position(1, 1);
        var floor = new Floor(position, 'light brown');
        expect(floor.position).toEqual(position);
    });

});
