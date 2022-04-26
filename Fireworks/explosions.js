import { Particle } from "./Classes/Particle.js";
window.oncontextmenu = function () { return false; } // Block menu

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
const frameRate = 60.0;
const frameDelay = 1000.0 / frameRate;
var particles = [];

var main = setInterval(() => { 
    update(); //console.log(main); 
}, frameDelay);


const update = () => {

    // text to controll firework
    //text();

    // Every tick clear screen with black rectangle with opacity 0.15
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, innerWidth, innerHeight);

    var i = particles.length;
    while(i--) {
        // Progress particles
        if (particles[i].opacity == 0) { particles.splice(i, 1); } else {
            particles[i].update();
            particles[i].draw();
        }
    }
}

