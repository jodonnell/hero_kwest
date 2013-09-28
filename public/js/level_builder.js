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

    fillSquare: function (startX, finishX, startY, finishY, color1, color2) {
        for (var x = startX; x <= finishX; x++) {
            for (var y = startY; y <= finishY; y++) {
                var yEven = ((y - startY) % 2) === 0;
                var xEven = ((x - startX) % 2) === 0;

                if (yEven) {
                    if (xEven) {
                        this.floors.push(new Floor(x, y, color1));
                    }
                    else {
                        this.floors.push(new Floor(x, y, color2));
                    }
                }
                else {
                    if (xEven) {
                        this.floors.push(new Floor(x, y, color2));
                    }
                    else {
                        this.floors.push(new Floor(x, y, color1));
                    }
                }
            }
        }
    },

    fillWallSquare: function (startX, finishX, startY, finishY, color1, color2) {
        for (var x = startX; x <= finishX; x++) {
            for (var y = startY; y <= finishY; y++) {
                var yEven = ((y - startY) % 2) === 0;
                var xEven = ((x - startX) % 2) === 0;

                if (yEven) {
                    if (xEven) {
                        this.walls.push(new Wall(x, y, color1));
                    }
                    else {
                        this.walls.push(new Wall(x, y, color2));
                    }
                }
                else {
                    if (xEven) {
                        this.walls.push(new Wall(x, y, color2));
                    }
                    else {
                        this.walls.push(new Wall(x, y, color1));
                    }
                }
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


        this.fillSquare(6, 12, 5, 10, 'yellow', 'dark brown');
        this.floors.push(new Floor(9, 11, 'dark brown'));

        this.fillSquare(16, 21, 10, 14, 'yellow', 'dark brown');
        this.floors.push(new Floor(18, 15, 'dark brown'));
        this.floors.push(new Floor(22, 12, 'yellow'));

        this.fillSquare(1, 2, 2, 4, 'olive', 'light green');
        this.floors.push(new Floor(3, 3, 'light green'));

        this.fillSquare(16, 19, 2, 4, 'purple brown', 'purple');
        this.floors.push(new Floor(18, 5, 'purple'));

        this.fillSquare(21, 23, 2, 4, 'light blue', 'dark blue');
        this.floors.push(new Floor(22, 5, 'light blue'));


        this.fillWallSquare(1, 2, 1, 1, 'front1', 'front2');
        this.fillWallSquare(3, 3, 2, 2, 'front1', 'front2');
        this.fillWallSquare(4, 14, 1, 1, 'front1', 'front2');
        this.fillWallSquare(16, 19, 1, 1, 'front1', 'front2');
        this.fillWallSquare(21, 23, 1, 1, 'front1', 'front2');

        this.fillWallSquare(0, 4, 6, 6, 'front1', 'front2');
        this.fillWallSquare(6, 12, 4, 4, 'front1', 'front2');

        this.fillWallSquare(15, 17, 6, 6, 'front1', 'front2');
        this.fillWallSquare(19, 21, 6, 6, 'front1', 'front2');
        this.fillWallSquare(23, 23, 6, 6, 'front1', 'front2');

        this.fillWallSquare(5, 8, 12, 12, 'front1', 'front2');
        this.fillWallSquare(10, 13, 12, 12, 'front1', 'front2');

        this.fillWallSquare(16, 21, 9, 9, 'front1', 'front2');
        this.fillWallSquare(22, 22, 11, 11, 'front1', 'front2');

        this.fillWallSquare(1, 8, 16, 16, 'front1', 'front2');
        this.fillWallSquare(11, 17, 16, 16, 'front1', 'front2');
        this.fillWallSquare(19, 22, 16, 16, 'front1', 'front2');

        this.fillWallSquare(0, 23, 0, 0, 'top1', 'top2');

    }
});
