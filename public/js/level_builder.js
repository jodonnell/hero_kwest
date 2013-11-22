"use strict";

var LevelBuilder = Class.extend({
    init: function () {
        this.floors = [];
        this.walls = [];
        this.shadows = [];
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

    fillShadow: function (startX, finishX, startY, finishY, color1, color2) {
        for (var x = startX; x <= finishX; x++) {
            for (var y = startY; y <= finishY; y++) {
                var yEven = ((y - startY) % 2) === 0;
                var xEven = ((x - startX) % 2) === 0;

                if (yEven) {
                    if (xEven) {
                        this.shadows.push(new Floor((new Position(x, y)), color1));
                    }
                    else {
                        this.shadows.push(new Floor((new Position(x, y)), color2));
                    }
                }
                else {
                    if (xEven) {
                        this.shadows.push(new Floor((new Position(x, y)), color2));
                    }
                    else {
                        this.shadows.push(new Floor((new Position(x, y)), color1));
                    }
                }
            }
        }
    },

    square: function (x, y, color) {
				this.fillSquare(x, x, y, y, color);
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

    wallSquare: function (x, y, color) {
				this.fillWallSquare(x, x, y, y, color, color);
    },

    buildLevel1: function () {
        this.fillFloors();
        this.fillWalls();
        this.playerUnits = [new Player(new Position(10, 10), 'radish', {hp: 20, strength: 12, defense: 9, speed: 7, evade: 7, critical: 2, criticalEvade: 2}), 
                            new Player(new Position(8, 8), 'broccolee', {hp: 16, strength: 9, defense: 11, speed: 8, evade: 10, critical: 30, criticalEvade: 2}), 
                            new Player(new Position(6, 9), 'cucumber', {hp: 15, strength: 13, defense: 4, speed: 57, evade: 47, critical: 7, criticalEvade: 7})];

        this.enemyUnits = [new Skeleton(new Position(6, 6), {hp: 14, strength: 14, defense: 6, speed: 6, evade: 6, critical: 4, criticalEvade: 3}), 
                           new Skeleton(new Position(11, 5), {hp: 12, strength: 16, defense: 5, speed: 8, evade: 4, critical: 2, criticalEvade: 6}),
                           new Skeleton(new Position(23, 3), {hp: 14, strength: 14, defense: 6, speed: 6, evade: 6, critical: 4, criticalEvade: 3})];

        this.stairs = [new Stairs(new Position(12, 13))];
    },

    fillFloors: function () {
        this.square(4, 14, 'hanging1');

        this.square(5, 5, 'normal floor');
        this.square(5, 6, 'cracked floor');
        this.square(5, 7, 'normal floor');
        this.square(5, 8, 'square floor');
        this.square(5, 9, 'square floor');
        this.square(5, 10, 'normal floor');
        this.square(5, 11, 'normal floor');
        this.square(5, 12, 'normal floor');
        this.square(5, 13, 'normal floor');
        this.square(5, 14, 'hanging2');

        this.square(6, 4, 'normal floor');
        this.square(6, 5, 'normal floor');
        this.square(6, 6, 'normal floor');
        this.square(6, 7, 'rocks');
        this.square(6, 8, 'normal floor');
        this.square(6, 9, 'normal floor');
        this.square(6, 10, 'normal floor');
        this.square(6, 11, 'rocks');
        this.square(6, 12, 'normal floor');
        this.square(6, 13, 'normal floor');
        this.square(6, 14, 'normal floor');
        this.square(6, 15, 'hanging1');

        this.square(7, 4, 'square floor');
        this.square(7, 5, 'square floor');
        this.square(7, 6, 'shiny floor');
        this.square(7, 7, 'normal floor');
        this.square(7, 8, 'normal floor');
        this.square(7, 9, 'rocks');
        this.square(7, 10, 'normal floor');
        this.square(7, 11, 'normal floor');
        this.square(7, 12, 'normal floor');
        this.square(7, 13, 'slime top left');
        this.square(7, 14, 'slime bottom left');
        this.square(7, 15, 'hanging2');
        this.square(7, 15, 'hanging slime1');

        this.fillShadow(5, 5, 5, 13, 'shadow', 'shadow');

        // this.floors.push(new Floor((new Position(9, 11)), 'dark brown'));

        // this.fillSquare(16, 21, 10, 14, 'yellow', 'dark brown');
        // this.floors.push(new Floor((new Position(18, 15)), 'dark brown'));
        // this.floors.push(new Floor((new Position(22, 12)), 'yellow'));

        // this.fillSquare(1, 2, 2, 4, 'olive', 'light green');
        // this.floors.push(new Floor((new Position(3, 3)), 'light green'));

        // this.fillSquare(16, 19, 2, 4, 'purple brown', 'purple');
        // this.floors.push(new Floor((new Position(18, 5)), 'purple'));

        // this.fillSquare(21, 23, 2, 4, 'light blue', 'dark blue');
        // this.floors.push(new Floor((new Position(22, 5)), 'light blue'));
    },

    fillWalls: function () {
        this.fillWallSquare(4, 4, 3, 11, 'left1', 'left2');
        this.wallSquare(4, 12, 'front1');
        this.wallSquare(4, 13, 'front3');

        this.wallSquare(4, 2, 'topleft');
        this.wallSquare(5, 2, 'left1');
        this.wallSquare(5, 1, 'topleft');
        this.wallSquare(5, 3, 'front1');
        this.wallSquare(5, 4, 'front3');


        this.fillWallSquare(6, 15, 1, 1, 'top1', 'top2');
        this.fillWallSquare(6, 15, 2, 2, 'front1', 'front2');
        this.fillWallSquare(6, 15, 3, 3, 'front3', 'front4');

        this.wallSquare(16, 1, 'topright');
        this.wallSquare(16, 3, 'front1');
        this.wallSquare(16, 4, 'front3');
        this.wallSquare(16, 2, 'right1');
        this.wallSquare(17, 2, 'topright');

        this.fillWallSquare(17, 17, 3, 11, 'right1', 'right2');
        this.wallSquare(17, 12, 'front1');
        this.wallSquare(17, 13, 'front3');

        // this.fillWallSquare(12, 17, 15, 15, 'bottom1', 'bottom2');
        // this.fillWallSquare(19, 21, 15, 15, 'bottom1', 'bottom2');
        // this.fillWallSquare(22, 22, 15, 15, 'bottomright', 'bottom2');

        // this.fillWallSquare(11, 11, 14, 14, 'topleft', 'bottom2');
        // this.fillWallSquare(12, 15, 14, 14, 'top1', 'top2');
        // this.fillWallSquare(15, 15, 9, 13, 'left1', 'left2');
        // this.fillWallSquare(15, 15, 8, 8, 'topleft', 'left2');
        // this.fillWallSquare(16, 22, 8, 8, 'top1', 'top2');

        // this.fillWallSquare(22, 22, 9, 10, 'right1', 'right2');
        // this.fillWallSquare(22, 22, 13, 14, 'right1', 'right2');
    }
});
