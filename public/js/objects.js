"use strict";

var Objects = Class.extend({
    init: function () {
        this.objects = [];
    },

    removeAll: function (properties) {
        var removeObjects = this.where(properties);
        _.each(removeObjects, function (removeObject) {
            this.remove(removeObject);
        }, this);
    },

    remove: function (element) {
        this.objects = _.reject(this.objects, function (object) {
				    return object.object === element;
        });
    },

    add: function (objects, properties) {
        if ("object" in properties)
            throw new Error("Properties cannot have the property object.");

        if (objects instanceof Array) {
            _.each(objects, function (object) {
				        this.objects.push(_.extend({object: object}, properties));
            }, this);
        }
        else {
				    this.objects.push(_.extend({object: objects}, properties));
        }
    },

    all: function () {
        return this.returnObjects(this.objects);				
    },

    length: function () {
				return this.objects.length;
    },

    where: function (properties) {
        return this.returnObjects(_.where(this.objects, properties));
    },

    returnObjects: function (objects) {
        var isAtPosition = function (position) {
            return _.any(this.map(function (wall) {
                return position.isEqual(wall.position);
            }));
        };

        var allAtPosition = function (position) {
            return _.select(this, function (object) {
                return position.isEqual(object.position);
            });
        };

        var atPosition = function (position) {
            for (var i = 0; i < this.length; i++) {
                var object = this[i];
                if (position.isEqual(object.position))
                    return object;
            }
            return false;
        };

				var objects = _.pluck(objects, 'object');

        objects.atPosition = atPosition;
        objects.isAtPosition = isAtPosition;
        objects.allAtPosition = allAtPosition;
        return objects;
    },
    
    update: function () {
				_.each(this.objects, function (object) {
				    object.object.update(this);
        }, this);
    },

    draw: function () {
        var removeNoZ = _.reject(this.objects, function (object) {
				    return !('z' in object);
        });

        var zOrdered = _.sortBy(removeNoZ, function(object) {
            var y = 0;
            if ("position" in object.object)
                y = object.object.position.y();
            return object.z + y;
        })

				_.each(zOrdered, function (object) {
				    object.object.draw(this);
        }, this);
    },

    playerUnit: function () {
				return {playerControlled: true, attackable: true, z: 1000, unit: true, enemyAttackable: true, enemyCannotMoveThrough: true, tile: true};
    },

    enemyUnit: function () {
				return {enemyControlled: true, attackable: true, z: 1000, playerCannotMoveThrough: true, playerAttackable: true, unit: true, tile: true};
    },

    walls: function () {
				return {z: 1000, playerCannotMoveThrough: true, enemyCannotMoveThrough: true, tile: true};
    },

    stairs: function () {
				return {z: 999, stairs: true, tile: true};
    },

});
