"use strict";

var LevelBuilder = Class.extend({
    init: function () {
        this.floors = [];
        this.buildLevel1();
    },

    buildLevel1: function () {
        for (var i = 0; i < 27; i++) {
            for (var k = 0; k < 18; k++)  {
                this.floors.push(new Floor(i, k));
            }
        }
    }
});
