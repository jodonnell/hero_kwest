"use strict";

var LevelBuilder = Class.extend({
    init: function () {
        this.floors = [];
        this.walls = [];
        this.embellishments = [];
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

    fillEmbellishment: function (startX, finishX, startY, finishY, color1, color2) {
        for (var x = startX; x <= finishX; x++) {
            for (var y = startY; y <= finishY; y++) {
                var yEven = ((y - startY) % 2) === 0;
                var xEven = ((x - startX) % 2) === 0;

                if (yEven) {
                    if (xEven) {
                        this.embellishments.push(new Floor((new Position(x, y)), color1));
                    }
                    else {
                        this.embellishments.push(new Floor((new Position(x, y)), color2));
                    }
                }
                else {
                    if (xEven) {
                        this.embellishments.push(new Floor((new Position(x, y)), color2));
                    }
                    else {
                        this.embellishments.push(new Floor((new Position(x, y)), color1));
                    }
                }
            }
        }
    },

    embellishment: function (x, y, color) {
				this.fillEmbellishment(x, x, y, y, color, color);
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
                            new Player(new Position(8, 8), 'doggypoo', {hp: 16, strength: 9, defense: 11, speed: 8, evade: 10, critical: 30, criticalEvade: 2}), 
                            new Player(new Position(6, 9), 'eggplanto', {hp: 15, strength: 13, defense: 4, speed: 57, evade: 47, critical: 7, criticalEvade: 7})];

        this.enemyUnits = [new Skeleton(new Position(6, 6), 'skeleton', {hp: 14, strength: 14, defense: 6, speed: 6, evade: 6, critical: 4, criticalEvade: 3}), 
                           new Skeleton(new Position(11, 5), 'skeleton_red', {hp: 12, strength: 16, defense: 5, speed: 8, evade: 4, critical: 2, criticalEvade: 6}),
                           new Skeleton(new Position(15, 5), 'mummy', {hp: 14, strength: 14, defense: 6, speed: 6, evade: 6, critical: 4, criticalEvade: 3})];

        this.stairs = [new Stairs(new Position(15, 13))];
    },

    fillFloors: function () {
        this.fillSquare(6, 14, 15, 15, 'hanging1', 'hanging2');
        this.fillSquare(4, 5, 14, 14, 'hanging1', 'hanging2');
        this.fillSquare(15, 16, 14, 14, 'hanging1', 'hanging2');

        this.square(5, 5, 'normal floor');
        this.square(5, 6, 'cracked floor');
        this.square(5, 7, 'normal floor');
        this.square(5, 8, 'square floor');
        this.square(5, 9, 'square floor');
        this.square(5, 10, 'normal floor');
        this.square(5, 11, 'normal floor');
        this.square(5, 12, 'normal floor');
        this.square(5, 13, 'normal floor');


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
        this.square(7, 15, 'hanging slime1');

        this.square(8, 4, 'normal floor');
        this.square(8, 5, 'normal floor');
        this.square(8, 6, 'square floor');
        this.square(8, 7, 'square floor');
        this.square(8, 8, 'normal floor');
        this.square(8, 9, 'normal floor');
        this.square(8, 10, 'normal floor');
        this.square(8, 11, 'cracked floor');
        this.square(8, 12, 'normal floor');
        this.square(8, 13, 'slime top right');
        this.square(8, 14, 'slime bottom right');

        this.square(9, 4, 'normal floor');
        this.square(9, 5, 'square floor');
        this.square(9, 6, 'square floor');
        this.square(9, 7, 'square floor');
        this.square(9, 8, 'normal floor');
        this.square(9, 9, 'rocks');
        this.square(9, 10, 'normal floor');
        this.square(9, 11, 'normal floor');
        this.square(9, 12, 'normal floor');
        this.square(9, 13, 'normal floor');
        this.square(9, 14, 'normal floor');

        this.square(10, 4, 'normal floor');
        this.square(10, 5, 'square floor');
        this.square(10, 6, 'square floor');
        this.square(10, 7, 'square floor');
        this.square(10, 8, 'square floor');
        this.square(10, 9, 'normal floor');
        this.square(10, 10, 'normal floor');
        this.square(10, 11, 'normal floor');
        this.square(10, 12, 'slime');
        this.square(10, 13, 'normal floor');
        this.square(10, 14, 'shiny floor');

        this.square(11, 4, 'normal floor');
        this.square(11, 5, 'square floor');
        this.square(11, 6, 'square floor');
        this.square(11, 7, 'square floor');
        this.square(11, 8, 'square floor');
        this.square(11, 9, 'square floor');
        this.square(11, 10, 'normal floor');
        this.square(11, 11, 'slime');
        this.square(11, 12, 'normal floor');
        this.square(11, 13, 'slime');
        this.square(11, 14, 'normal floor');

        this.square(12, 4, 'normal floor');
        this.square(12, 5, 'square floor');
        this.square(12, 6, 'square floor');
        this.square(12, 7, 'square floor');
        this.square(12, 8, 'normal floor');
        this.square(12, 9, 'normal floor');
        this.square(12, 10, 'rocks');
        this.square(12, 11, 'normal floor');
        this.square(12, 12, 'slime');
        this.square(12, 13, 'normal floor');
        this.square(12, 14, 'normal floor');

        this.square(13, 4, 'normal floor');
        this.square(13, 5, 'normal floor');
        this.square(13, 6, 'square floor');
        this.square(13, 7, 'square floor');
        this.square(13, 8, 'cracked floor');
        this.square(13, 9, 'normal floor');
        this.square(13, 10, 'normal floor');
        this.square(13, 11, 'shiny floor');
        this.square(13, 12, 'normal floor');
        this.square(13, 13, 'rocks');
        this.square(13, 14, 'normal floor');

        this.square(14, 4, 'normal floor');
        this.square(14, 5, 'normal floor');
        this.square(14, 6, 'normal floor');
        this.square(14, 7, 'square floor');
        this.square(14, 8, 'normal floor');
        this.square(14, 9, 'rocks');
        this.square(14, 10, 'square floor');
        this.square(14, 11, 'square floor');
        this.square(14, 12, 'normal floor');
        this.square(14, 13, 'normal floor');
        this.square(14, 14, 'normal floor');

        this.square(15, 5, 'normal floor');
        this.square(15, 6, 'normal floor');
        this.square(15, 7, 'normal floor');
        this.square(15, 8, 'normal floor');
        this.square(15, 9, 'normal floor');
        this.square(15, 10, 'square floor');
        this.square(15, 11, 'normal floor');
        this.square(15, 12, 'normal floor');
        this.square(15, 13, 'normal floor');

        this.fillEmbellishment(5, 5, 5, 13, 'shadow', 'shadow');
        this.fillEmbellishment(6, 6, 4, 4, 'shadow', 'shadow');
        this.fillEmbellishment(5, 5, 3, 3, 'shadow wall left1', 'shadow');
        this.fillEmbellishment(5, 5, 4, 4, 'shadow wall left2', 'shadow');

        this.fillEmbellishment(6, 6, 2, 2, 'shadow wall left1', 'shadow');
        this.fillEmbellishment(6, 6, 3, 3, 'shadow wall left2', 'shadow');

        this.embellishment(6, 12, 'slime emb1');
        this.embellishment(7, 12, 'slime emb2');
        this.embellishment(8, 12, 'slime emb3');
        this.embellishment(6, 13, 'slime emb4');
        this.embellishment(6, 14, 'slime emb5');
        this.embellishment(9, 13, 'slime emb6');
        this.embellishment(9, 14, 'slime emb7');        
        this.embellishment(9, 12, 'slime emb8');

        this.embellishment(9, 12, 'slime emb9');
        this.embellishment(11, 12, 'slime emb10');
        this.embellishment(10, 11, 'slime emb11');
        this.embellishment(10, 13, 'slime emb12');

        this.embellishment(10, 11, 'slime emb9');
        this.embellishment(12, 11, 'slime emb10');
        this.embellishment(11, 10, 'slime emb11');
        this.embellishment(11, 12, 'slime emb12');

        this.embellishment(11, 12, 'slime emb9');
        this.embellishment(13, 12, 'slime emb10');
        this.embellishment(12, 11, 'slime emb11');
        this.embellishment(12, 13, 'slime emb12');

        this.embellishment(10, 13, 'slime emb9');
        this.embellishment(12, 13, 'slime emb10');
        this.embellishment(11, 12, 'slime emb11');
        this.embellishment(11, 14, 'slime emb12');

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

        this.fillWallSquare(6, 14, 1, 1, 'top1', 'top2');
        this.fillWallSquare(6, 14, 2, 2, 'front1', 'front2');
        this.fillWallSquare(6, 14, 3, 3, 'front3', 'front4');

        this.wallSquare(15, 1, 'topright');
        this.wallSquare(15, 3, 'front1');
        this.wallSquare(15, 4, 'front3');
        this.wallSquare(15, 2, 'right1');
        this.wallSquare(16, 2, 'topright');

        this.fillWallSquare(16, 16, 3, 11, 'right1', 'right2');
        this.wallSquare(16, 12, 'front1');
        this.wallSquare(16, 13, 'front3');

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
