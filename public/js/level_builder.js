"use strict";

var LevelBuilder = Class.extend({
    init: function () {
        this.floors = [];
        this.walls = [];
        this.buildLevel1();
    },

    alternateTilesX: function (start, finish, x, color1, color2) {
        for (var i = start; i <= finish; i++) {
            if (((i - start) % 2) === 0) {
                this.floors.push(new Floor(x, i, color1));
            }
            else {
                this.floors.push(new Floor(x, i, color2));
            }
        }
    },

    alternateTilesY: function (start, finish, y, color1, color2) {
        for (var i = start; i <= finish; i++) {
            if (((i - start) % 2) === 0) {
                this.floors.push(new Floor(i, y, color1));
            }
            else {
                this.floors.push(new Floor(i, y, color2));
            }
        }
    },

    buildLevel1: function () {
        // for (var i = 0; i < 27; i++) {
        //     for (var k = 0; k < 18; k++)  {
        //         this.floors.push(new Floor(i, k, 'navy'));
        //     }
        // }
        
        this.walls.push(new Wall(0, 0, 'left'));
        this.walls.push(new Wall(0, 1, 'left'));
        this.walls.push(new Wall(0, 2, 'left'));
        this.walls.push(new Wall(0, 3, 'left'));
        this.walls.push(new Wall(0, 4, 'left'));

        
        this.alternateTilesX(2, 12, 4, 'navy', 'light grey');
        this.alternateTilesX(2, 12, 14, 'navy', 'light grey');

        this.alternateTilesY(5, 13, 2, 'light grey', 'navy');

        this.alternateTilesY(0, 4, 7, 'light grey', 'navy');
        this.alternateTilesY(15, 22, 7, 'navy', 'light grey');

        this.alternateTilesX(8, 17, 0, 'navy', 'light grey');
        this.alternateTilesX(7, 16, 23, 'navy', 'light grey');

        this.alternateTilesY(1, 23, 17, 'navy', 'light grey');

        this.alternateTilesX(12, 16, 9, 'light grey', 'navy');
        this.alternateTilesX(13, 16, 10, 'light grey', 'navy');

        this.alternateTilesY(4, 8, 13, 'light grey', 'navy');
        this.alternateTilesY(11, 14, 13, 'navy', 'light grey');


        this.floors.push(new Floor(18, 16, 'navy'));
        this.floors.push(new Floor(18, 6, 'navy'));
        this.floors.push(new Floor(22, 6, 'navy'));


        this.walls.push(new Wall(1, 0, 'top'));
        this.walls.push(new Wall(2, 0, 'top2'));
    }
});
