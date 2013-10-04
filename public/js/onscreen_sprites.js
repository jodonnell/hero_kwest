"use strict";

var OnscreenSprites = Class.extend({
    init: function (sprites) {
        if (!sprites) {
            sprites = {};
        }

        this.playerUnits = sprites.playerUnits || [new Player(new Position(10, 10))];
        this.enemies = sprites.enemies || [];
        this.movementTiles = sprites.movementTiles || [];
        this.floors = sprites.floors || [];
        this.walls = sprites.walls || [];
        this.deadEnemies = sprites.deadEnemies || [];
        this.collectibles = sprites.collectibles || [];
        this.texts = sprites.texts || [];

        this.sprites = [this.walls].concat([this.floors], [this.enemies], [this.deadEnemies], [this.collectibles], [this.texts], [this.movementTiles], [this.playerUnits]);

        
        var remove = function (element) {
            var index = this.indexOf(element);
            this.splice(index, 1);
        }

        var isAtPosition = function (position) {
            return _.any(this.map(function (wall) {
                return position.isEqual(wall.position);
            }));
        }

        var atPosition = function (position) {
            for (var i = 0; i < this.length; i++) {
                var sprite = this[i];
                if (position.isEqual(sprite.position))
                    return sprite;
            }
            return false;
        }

        this.playerUnits.remove = remove;
        this.deadEnemies.remove = remove;
        this.enemies.remove = remove;
        this.floors.remove = remove;
        this.collectibles.remove = remove;
        this.texts.remove = remove;
        this.movementTiles.remove = remove;
        this.walls.remove = remove;

        this.playerUnits.atPosition = atPosition;
        this.playerUnits.isAtPosition = isAtPosition;
        this.walls.isAtPosition = isAtPosition;
        this.movementTiles.isAtPosition = isAtPosition;
    }
});
