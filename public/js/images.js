"use strict";

var Images = Class.extend({
    init: function (callback) {
        this._props = [];
        this._callback = callback;

        this._loadImage("attack_icon1", "interface/attack_icon1.png");
        this._loadImage("attack_icon2", "interface/attack_icon2.png");
        this._loadImage("cursor1", "interface/cursor1.png");
        this._loadImage("cursor2", "interface/cursor2.png");
        this._loadImage("cursor3", "interface/cursor3.png");
        this._loadImage("defend_icon1", "interface/defend_icon1.png");
        this._loadImage("defend_icon2", "interface/defend_icon2.png");
        this._loadImage("move_icon1", "interface/move_icon1.png");
        this._loadImage("move_icon2", "interface/move_icon2.png");
        this._loadImage("radish", "radish_sheet.png");
        this._loadImage("cucumber", "cucumber01.png");
        this._loadImage("broccolee", "BroccoLee01.png");
        this._loadImage("doggypoo", "doggyPoo.png");
        this._loadImage("eggplanto", "eggplanto.png");
        this._loadImage("wall", "wall.png");
        this._loadImage("endTurn", "stop.png");
        this._loadImage("wait", "wait.png");
        this._loadImage("checkmark-icon", "check-icon.png");
        this._loadImage("attack-icon", "attack-icon.png");
        this._loadImage("skeleton", "skeleton.png");
        this._loadImage("skeleton_red", "skeleton_red_1.png");
        this._loadImage("mummy", "mummy.png");        
        this._loadImage("floor", "floor_dirt.png");
        this._loadImage("tiles", "tiles.png");
        this._loadImage("room_tiles", "tiles_room_NEW.png");
        this._loadImage("stairs", "stairs_down.png");
        this._loadImage("gem", "gem.png");
        //this.bubRight.onload = callback;
    },

    _loadImage: function (prop, imageFile) {
        this._props.push(prop);
        this[prop] = {ready: false};

        this[prop] = new Image();
        this[prop].src = "images/" + imageFile;
        if (prop === 'gem')
            this[prop].onload = this._callback;
    }

});
