"use strict";

var LevelBuilder = Class.extend({
    init: function () {
        this.floors = [];
        this.walls = [];
        this.playerUnits = [];
        this.buildLevel1();
    },

    alternateTilesX: function (start, finish, x, color1, color2) {
        for (var i = start; i <= finish; i++) {
            if (((i - start) % 2) === 0) {
                this.floors.push(new Floor((new Position(x, i)), color1));
            }
            else {
                this.floors.push(new Floor((new Position(x, i)), color2));
            }
        }
    },

    alternateTilesY: function (start, finish, y, color1, color2) {
        for (var i = start; i <= finish; i++) {
            if (((i - start) % 2) === 0) {
                this.floors.push(new Floor((new Position(i, y)), color1));
            }
            else {
                this.floors.push(new Floor((new Position(i, y)), color2));
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
                        this.floors.push(new Floor((new Position(x, y)), color1));
                    }
                    else {
                        this.floors.push(new Floor((new Position(x, y)), color2));
                    }
                }
                else {
                    if (xEven) {
                        this.floors.push(new Floor((new Position(x, y)), color2));
                    }
                    else {
                        this.floors.push(new Floor((new Position(x, y)), color1));
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
                        this.walls.push(new Wall((new Position(x, y)), color1));
                    }
                    else {
                        this.walls.push(new Wall((new Position(x, y)), color2));
                    }
                }
                else {
                    if (xEven) {
                        this.walls.push(new Wall((new Position(x, y)), color2));
                    }
                    else {
                        this.walls.push(new Wall((new Position(x, y)), color1));
                    }
                }
            }
        }
    },

    buildLevel1: function () {
        this.fillFloors();
        this.fillWalls();
        this.playerUnits = [new Player(new Position(10, 10)), new Player(new Position(8, 8))];
    },

    fillFloors: function () {
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

        this.floors.push(new Floor((new Position(18, 16)), 'navy'));
        this.floors.push(new Floor((new Position(18, 6)), 'navy'));
        this.floors.push(new Floor((new Position(22, 6)), 'navy'));


        this.fillSquare(6, 12, 5, 10, 'yellow', 'dark brown');
        this.floors.push(new Floor((new Position(9, 11)), 'dark brown'));

        this.fillSquare(16, 21, 10, 14, 'yellow', 'dark brown');
        this.floors.push(new Floor((new Position(18, 15)), 'dark brown'));
        this.floors.push(new Floor((new Position(22, 12)), 'yellow'));

        this.fillSquare(1, 2, 2, 4, 'olive', 'light green');
        this.floors.push(new Floor((new Position(3, 3)), 'light green'));

        this.fillSquare(16, 19, 2, 4, 'purple brown', 'purple');
        this.floors.push(new Floor((new Position(18, 5)), 'purple'));

        this.fillSquare(21, 23, 2, 4, 'light blue', 'dark blue');
        this.floors.push(new Floor((new Position(22, 5)), 'light blue'));
    },

    fillWalls: function () {
				this.fillWallSquare(1, 2, 1, 1, 'front1', 'front2');
        this.fillWallSquare(3, 3, 2, 2, 'front1', 'front2');
        this.fillWallSquare(4, 14, 1, 1, 'front1', 'front2');
        this.fillWallSquare(16, 19, 1, 1, 'front1', 'front2');
        this.fillWallSquare(21, 23, 1, 1, 'front1', 'front2');

        this.fillWallSquare(0, 3, 6, 6, 'front1', 'front2');
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

        //top left room
        this.fillWallSquare(0, 0, 1, 4, 'left1', 'left2');
        this.fillWallSquare(0, 0, 5, 5, 'bottomleft', 'bottomleft');
        this.fillWallSquare(1, 2, 5, 5, 'bottom1', 'bottom1');
        this.fillWallSquare(3, 3, 5, 5, 'bottomright', 'bottomright');
        this.fillWallSquare(3, 3, 4, 4, 'top1', 'top1');
        this.fillWallSquare(3, 3, 4, 4, 'topright', 'top1');
        this.fillWallSquare(3, 3, 1, 1, 'bottomright', 'top1');


        // top right rooms
        this.fillWallSquare(15, 15, 1, 4, 'left1', 'left2');
        this.fillWallSquare(15, 15, 5, 5, 'bottomleft', 'top2');
        this.fillWallSquare(16, 17, 5, 5, 'bottom1', 'bottom2');
        this.fillWallSquare(20, 20, 1, 4, 'left1', 'left2');
        this.fillWallSquare(19, 21, 5, 5, 'bottom1', 'bottom2');
        this.fillWallSquare(23, 23, 5, 5, 'bottom1', 'bottom2');

        // right most wall
        this.fillWallSquare(24, 24, 0, 0, 'topright', 'right2');
        this.fillWallSquare(24, 24, 17, 17, 'bottomright', 'right2');
        this.fillWallSquare(24, 24, 1, 16, 'right1', 'right2');

        // middle large room
        this.fillWallSquare(5, 5, 3, 3, 'topleft', 'right2');
        this.fillWallSquare(6, 12, 3, 3, 'top1', 'top2');
        this.fillWallSquare(13, 13, 3, 3, 'topright', 'topright');
        this.fillWallSquare(5, 5, 4, 10, 'left1', 'left2');
        this.fillWallSquare(13, 13, 4, 10, 'right1', 'right2');
        this.fillWallSquare(5, 8, 11, 11, 'bottom1', 'bottom2');
        this.fillWallSquare(10, 13, 11, 11, 'bottom1', 'bottom2');

        this.fillWallSquare(1, 8, 15, 15, 'bottom1', 'bottom2');
        this.fillWallSquare(4, 8, 14, 14, 'top1', 'top2');
        this.fillWallSquare(1, 1, 8, 14, 'left1', 'left2');
        this.fillWallSquare(3, 3, 8, 14, 'right1', 'right2');
        this.fillWallSquare(2, 2, 8, 8, 'top1', 'top2');
        this.fillWallSquare(2, 2, 9, 14, 'front1', 'front1');

        this.fillWallSquare(11, 11, 15, 15, 'bottomleft', 'bottom2');
        this.fillWallSquare(12, 17, 15, 15, 'bottom1', 'bottom2');
        this.fillWallSquare(19, 21, 15, 15, 'bottom1', 'bottom2');
        this.fillWallSquare(22, 22, 15, 15, 'bottomright', 'bottom2');

        this.fillWallSquare(11, 11, 14, 14, 'topleft', 'bottom2');
        this.fillWallSquare(12, 15, 14, 14, 'top1', 'top2');
        this.fillWallSquare(15, 15, 9, 13, 'left1', 'left2');
        this.fillWallSquare(15, 15, 8, 8, 'topleft', 'left2');
        this.fillWallSquare(16, 22, 8, 8, 'top1', 'top2');

        this.fillWallSquare(22, 22, 9, 10, 'right1', 'right2');
        this.fillWallSquare(22, 22, 13, 14, 'right1', 'right2');
    }
});
