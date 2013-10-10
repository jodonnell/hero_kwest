"use strict";

var Images = Class.extend({
    init: function (callback) {
        this._props = [];
        this._callback = callback;

        this._loadImage("player", "RK01.png");
        this._loadImage("wall", "wall.png");
        this._loadImage("endTurn", "stop.png");
        this._loadImage("wait", "wait.png");
        this._loadImage("floor", "floor_dirt.png");
        this._loadImage("tiles", "tiles.png");
        this._loadImage("bubRight", "bub.png");
        //this.bubRight.onload = callback;
    },

    _loadImage: function (prop, imageFile) {
        this._props.push(prop);
        this[prop] = {ready: false};

        this[prop] = new Image();
        this[prop].src = "images/" + imageFile;
        if (prop === 'bubRight')
            this[prop].onload = this._callback;
    }

});
