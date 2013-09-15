"use strict";

var LevelBuilder = Class.extend({
    init: function () {
        this.floors = [];
        this.buildLevel1();
    },

    buildLevel1: function () {
        var i;
        var k;
        for (i = 0; i < 27; i++) {
            for (k = 0; k < 27; k++)  {
                this.floors.push(new Floor(i, k));
            }
        }
    }
});
