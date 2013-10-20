"use strict";

var RaisingAndDisappearingTextEffect = Class.extend({
    init: function (text, objects) {
        this.text = text;
        this.objects = objects;
        this.counter = 0;
    },

    update: function () {
				this.counter++;

        if ((this.counter % 2) == 0)
            this.text.y--;

        if (this.isDone()) {
            this.objects.remove(this.text);
            this.objects.remove(this);
        }
    },

    isDone: function() {
        return this.counter > 40;
    }
});
