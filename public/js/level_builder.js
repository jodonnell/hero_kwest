"use strict";

var LevelBuilder = Class.extend({
    init: function () {
        this.floors = [];
        this.walls = [];
        this.buildLevel1();
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

        this.floors.push(new Floor(0, 6, 'light grey'));
        this.floors.push(new Floor(0, 7, 'navy'));
        this.floors.push(new Floor(0, 8, 'light grey'));
        this.floors.push(new Floor(0, 9, 'navy'));
        this.floors.push(new Floor(0, 10, 'light grey'));
        this.floors.push(new Floor(0, 11, 'navy'));
        this.floors.push(new Floor(0, 12, 'light grey'));
        this.floors.push(new Floor(0, 13, 'navy'));
        this.floors.push(new Floor(0, 14, 'light grey'));
        this.floors.push(new Floor(0, 15, 'navy'));
        this.floors.push(new Floor(0, 16, 'light grey'));


        this.floors.push(new Floor(1, 16, 'navy'));
        this.floors.push(new Floor(2, 16, 'light grey'));
        this.floors.push(new Floor(3, 16, 'navy'));
        this.floors.push(new Floor(4, 16, 'light grey'));
        this.floors.push(new Floor(5, 16, 'navy'));
        this.floors.push(new Floor(6, 16, 'light grey'));
        this.floors.push(new Floor(7, 16, 'navy'));
        this.floors.push(new Floor(8, 16, 'light grey'));
        this.floors.push(new Floor(9, 16, 'navy'));
        this.floors.push(new Floor(10, 16, 'light grey'));
        this.floors.push(new Floor(11, 16, 'navy'));
        this.floors.push(new Floor(12, 16, 'light grey'));
        this.floors.push(new Floor(13, 16, 'navy'));
        this.floors.push(new Floor(14, 16, 'light grey'));
        this.floors.push(new Floor(15, 16, 'navy'));
        this.floors.push(new Floor(16, 16, 'light grey'));
        this.floors.push(new Floor(17, 16, 'navy'));
        this.floors.push(new Floor(18, 16, 'light grey'));
        this.floors.push(new Floor(19, 16, 'navy'));
        this.floors.push(new Floor(20, 16, 'light grey'));
        this.floors.push(new Floor(21, 16, 'navy'));
        this.floors.push(new Floor(22, 16, 'light grey'));
        this.floors.push(new Floor(23, 16, 'navy'));


        this.walls.push(new Wall(1, 0, 'top'));
        this.walls.push(new Wall(2, 0, 'top2'));
    }
});
