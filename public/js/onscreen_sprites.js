"use strict";

var OnscreenSprites = Class.extend({
    init: function (sprites) {
        if (!sprites) {
            sprites = {};
        }

        this.players = sprites.players || [new Player(100, 100)];
        this.enemies = sprites.enemies || [];
        this.movementTiles = sprites.movementTiles || [];
        this.floors = sprites.floors || [];
        this.walls = sprites.walls || [];
        this.deadEnemies = sprites.deadEnemies || [];
        this.collectibles = sprites.collectibles || [];
        this.texts = sprites.texts || [];

        this.sprites = [this.walls].concat([this.floors], [this.enemies], [this.deadEnemies], [this.collectibles], [this.texts], [this.movementTiles], [this.players]);

        var remove = function (element) {
            var index = this.indexOf(element);
            this.splice(index, 1);
        }

        this.players.remove = remove;
        this.deadEnemies.remove = remove;
        this.enemies.remove = remove;
        this.floors.remove = remove;
        this.collectibles.remove = remove;
        this.texts.remove = remove;
        this.movementTiles.remove = remove;
        this.walls.remove = remove;
    }
});
