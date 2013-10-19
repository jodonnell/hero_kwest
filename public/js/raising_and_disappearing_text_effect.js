"use strict";

var RaisingAndDisappearingTextEffect = Class.extend({
    init: function (text, texts) {
        this.text = text;
        this.texts = texts;
        this.counter = 0;
    },

    update: function () {
				this.counter++;

        if ((this.counter % 2) == 0)
            this.text.y--;

        if (this.isDone()) {
            this.texts.remove(this.text);
        }
    },

    isDone: function() {
        return this.counter > 40;
    }
});
