describe("Wall", function() {
    it("can be loaded correctly", function() {
        var position = new Position(1, 1);
        var wall = new Wall(position, 'top1');
        expect(wall.position).toEqual(position);
    });

});
