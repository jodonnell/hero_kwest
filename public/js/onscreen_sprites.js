"use strict";

var OnscreenSprites = Class.extend({
    init: function (sprites) {
        if (!sprites) {
            sprites = {};
        }

        this.playerUnits = sprites.playerUnits || [new Player(new Position(10, 10), 'player', {hp: 20, strength: 12, defense: 5, speed: 7, evade: 7, critical: 2, criticalEvade: 2})];
        this.movementTiles = sprites.movementTiles || [];
        this.floors = sprites.floors || [];
        this.walls = sprites.walls || [];
        this.menus = sprites.menus || [];
        this.enemyUnits = sprites.enemyUnits || [];

        this.sprites = [this.walls].concat([this.floors], [this.movementTiles], [this.enemyUnits], [this.playerUnits], [this.menus]);

        
        var remove = function (element) {
            var index = this.indexOf(element);
            if (index !== -1)
                this.splice(index, 1);
        };

        var isAtPosition = function (position) {
            return _.any(this.map(function (wall) {
                return position.isEqual(wall.position);
            }));
        };

        var removeAll = function (position) {
            this.splice(0, this.length);
        };

        var atPosition = function (position) {
            for (var i = 0; i < this.length; i++) {
                var sprite = this[i];
                if (position.isEqual(sprite.position))
                    return sprite;
            }
            return false;
        };

        _.each(this.sprites, function(sprite) {
            sprite.remove = remove;
            sprite.atPosition = atPosition;
            sprite.isAtPosition = isAtPosition;
            sprite.removeAll = removeAll;
        })
    }
});
