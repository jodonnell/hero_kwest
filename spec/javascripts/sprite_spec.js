describe("Sprite", function() {
    it("isNextToAny", function() {
        var position = new Position(2, 2);
        var wall = new Wall(position, 'top1');
        
        var sprites = [new Wall(new Position(3, 3), 'top1')];
        expect(wall.isNextToAny(sprites)).toBeFalsy();

        sprites.push(new Wall(new Position(2, 3), 'top1'));
        expect(wall.isNextToAny(sprites)).toBeTruthy();
    });

});
