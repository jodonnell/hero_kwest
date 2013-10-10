beforeEach(function() {
    this.addMatchers({
        toBeTheSamePosition: function(expected) {
            return this.actual.isEqual(expected);
        }
    });
});
