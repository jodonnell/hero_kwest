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

    length: function () {
				return this.objects.length;
    },

    where: function (properties) {
        var isAtPosition = function (position) {
            return _.any(this.map(function (wall) {
                return position.isEqual(wall.position);
            }));
        };

        var atPosition = function (position) {
            for (var i = 0; i < this.length; i++) {
                var object = this[i];
                if (position.isEqual(object.position))
                    return object;
            }
            return false;
        };

				var objects = _.pluck(_.where(this.objects, properties), 'object');

        objects.atPosition = atPosition;
        objects.isAtPosition = isAtPosition;
        return objects;
    },
    
    update: function () {
				_.each(this.objects, function (object) {
				    object.object.update(this);
        }, this);
    },

    draw: function () {
        var zOrdered = _.sortBy(_.reject(this.objects, function (object) {
				    return !('z' in object);
        }), 'z');

				_.each(zOrdered, function (object) {
				    object.object.draw(this);
        }, this);
    }

});
