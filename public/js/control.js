"use strict";

var Control = Class.extend({
    LEFT_KEY: 37,
    RIGHT_KEY: 39,
    UP_KEY: 38,
    DOWN_KEY: 40,

    Z_KEY: 90,
    DVORAK_Z_KEY: 186,
    DVORAK_Z_KEY_FIREFOX: 59,
    X_KEY: 88,
    DVORAK_X_KEY: 81,

    init: function () {
        this.left = 0;
        this.right = 0;
        this.down = 0;
        this.up = 0;
        this.x = 0;
        this.z = 0;
        this.getKey();
    },

    isHoldingRight: function () {
        return this.right;
    },

    isHoldingLeft: function () {
        return this.left;
    },

    isJumping: function () {
        return this.z;
    },

    isShooting: function () {
        return this.x;
    },

    isHoldingDown: function () {
        return this.down;
    },

    isHoldingUp: function () {
        return this.up;
    },

    notHoldingRightOrLeft: function () {
        return !this.isHoldingLeft() && !this.isHoldingRight();
    },

    getKey: function () {
        document.addEventListener('touchstart', $.proxy(function(e) {
            e.preventDefault();
            var touch = e.touches[0];

            if (touch.pageX < 100) {
                this.pressLeft();
            }
            else if (touch.pageX >= 100 && touch.pageX < 400) {
                this.pressRight();
            }
            else if (touch.pageX >= 400 && touch.pageX < 850) {
                this.pressJump();
            }
            else if (touch.pageX >= 850) {
                this.pressBubble();
            }
        }, this), false);

        var touchEnd = function(e) {
            e.preventDefault();

            this.releaseLeft();
            this.releaseRight();
            this.releaseJump();
            this.releaseBubble();

        };
        document.addEventListener('touchend', $.proxy(touchEnd, this), false);
        document.addEventListener('touchcancel', $.proxy(touchEnd, this), false);

        $(document).keydown($.proxy(function (event) {
            switch (event.which) {
            case this.LEFT_KEY:
                this.pressLeft();
                break;
            case this.RIGHT_KEY:
                this.pressRight();
                break;
            case this.UP_KEY:
                this.pressUp();
                break;
            case this.DOWN_KEY:
                this.pressDown();
                break;
            case this.Z_KEY:
                this.pressJump();
                break;
            case this.DVORAK_Z_KEY:
                this.pressJump();
                break;
            case this.DVORAK_Z_KEY_FIREFOX:
                this.pressJump();
                break;
            case this.X_KEY:
                this.pressBubble();
                break;
            case this.DVORAK_X_KEY:
                this.pressBubble();
                break;
            }
        }, this));
        $(document).keyup($.proxy(function (event) {
            switch (event.which) {
            case this.LEFT_KEY:
                this.releaseLeft();
                break;
            case this.RIGHT_KEY:
                this.releaseRight();
                break;
            case this.DOWN_KEY:
                this.releaseDown();
                break;
            case this.UP_KEY:
                this.releaseUp();
                break;
            case this.Z_KEY:
                this.releaseJump();
                break;
            case this.DVORAK_Z_KEY:
                this.releaseJump();
                break;
            case this.DVORAK_Z_KEY_FIREFOX:
                this.releaseJump();
                break;
            case this.X_KEY:
                this.releaseBubble();
                break;
            case this.DVORAK_X_KEY:
                this.releaseBubble();
                break;
            }
        }, this));
    },

    pressLeft: function () {
        this.left = 1;
    },

    pressRight: function () {
        this.right = 1;
    },

    pressUp: function () {
        this.up = 1;
    },

    pressDown: function () {
        this.down = 1;
    },

    pressJump: function () {
        this.z = 1;
    },

    pressBubble: function () {
        this.x = 1;
    },

    releaseLeft: function () {
        this.left = 0;
    },

    releaseRight: function () {
        this.right = 0;
    },

    releaseDown: function () {
        this.down = 0;
    },

    releaseUp: function () {
        this.up = 0;
    },

    releaseJump: function () {
        this.z = 0;
    },

    releaseBubble: function () {
        this.x = 0;
    }
});
