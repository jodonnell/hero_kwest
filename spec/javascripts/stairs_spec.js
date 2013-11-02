describe("Stairs", function() {
    it("triggers an event when a unit steps on it", function() {
        var spyEvent = spyOnEvent(window, 'enteredStairs')

        var stairs = new Stairs(new Position(1, 1));
        stairs.unitStoppedOn(null);
        expect(spyEvent).toHaveBeenTriggered();
    });
});
