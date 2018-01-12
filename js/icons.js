'use strict';

function AnimatedIcons(selector, img1, img2) {
    this.element = document.querySelector(selector);
    this.img1 = img1;
    this.img2 = img2;
    this.state = 1;
}

AnimatedIcons.prototype.render = function(){
    if (this.state === 1) {
        this.element.src = this.img2;
        this.state = 2;
    } else {
        this.element.src = this.img1;
        this.state = 1;
    }
}

var icons = [
    new AnimatedIcons('#arm', 'images/arm-icon.png','images/arm-icon-light.png'),
    new AnimatedIcons('#tampax', 'images/tampax-icon.png','images/tampax-icon-without.png'),
    new AnimatedIcons('#man', 'images/man-icon.png','images/man-icon-foot.png'),
    new AnimatedIcons('#man', 'images/man-icon.png','images/man-icon-foot.png'),
    new AnimatedIcons('#woman', 'images/woman-icon.png','images/woman-icon-camera.png'),
    new AnimatedIcons('#strong', 'images/strong-icon.png','images/stronger-icon.png'),
];

setInterval(function() {
    icons.forEach(function(icon) {
        icon.render();
    })
}, 1000);
