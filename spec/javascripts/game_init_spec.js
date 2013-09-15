describe("GameInit", function() {
    it("creates a canvas", function() {
        new GameInit()
        expect($("canvas#gameCanvas").length).toEqual(1);
    });
});
