"use strict"
import { Vector2, drawPoint} from "./fig2_common.js";

class Figure2A {
    constructor(viz_id) {
        this.canvas = document.getElementById(viz_id);
        this.ctx = this.canvas.getContext("2d");
        this.HEIGHT = this.canvas.getAttribute('height');
        this.WIDTH = this.canvas.getAttribute('width');
        this.RESOLUTION = 20; // Pixels
    }

    draw() {
        this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
        this._drawHorizontalAxis(this.ctx);
        const ticks = this._drawTicks(this.ctx);
    
        this.ctx.beginPath();
        this.ctx.strokeStlye = '#777777';
        this.ctx.lineWidth = 1;
        this.ctx.arc((ticks[2] + ticks[3])/2, this.HEIGHT/2, this.RESOLUTION*2.5, 0, Math.PI, true);
        this.ctx.stroke();
        drawPoint(this.ctx,  new Vector2(ticks[5] - 2, this.HEIGHT/2 - 20),new Vector2(ticks[5], this.HEIGHT/2),
                 7, false);
        this.ctx.beginPath();
        this.ctx.arc(ticks[4], this.HEIGHT/2, this.RESOLUTION, 0, Math.PI, true);
        this.ctx.stroke();
        drawPoint(this.ctx,  new Vector2(ticks[3] + 2, this.HEIGHT/2 - 20),new Vector2(ticks[3], this.HEIGHT/2),
                 7, false);
    
        this.ctx.strokeStyle = '#AA4444'
        this.ctx.fillStyle = '#AA4444'
        this.ctx.beginPath();
        this.ctx.setLineDash([4,2])
        this.ctx.arc((ticks[1] + ticks[2])/2, this.HEIGHT/2 + this.RESOLUTION, this.RESOLUTION * 1.5, 0, Math.PI, false)
        this.ctx.stroke();
        drawPoint(this.ctx,  new Vector2(ticks[3] + 2, this.HEIGHT/2 + 20),new Vector2(ticks[3], this.HEIGHT/2),
                 7, false, 20);

    }

    _drawTicks(ctx) { 
        let ticks = new Map();
    
        for (let i = 0; i < this.WIDTH; i+=this.RESOLUTION) {
            ctx.beginPath();
            ctx.lineTo(this.RESOLUTION / 2 + i, this.HEIGHT/2 - this.RESOLUTION/2);
            ctx.lineTo(this.RESOLUTION/ 2 + i, this.HEIGHT/2 + this.RESOLUTION/2);
            ctx.stroke();
            
            let xPosAxis = Math.round((i -(this.WIDTH / 2))/this.RESOLUTION);
            ctx.fillText(xPosAxis,this.RESOLUTION / 2 + i - 2.5, this.HEIGHT/2 + this.RESOLUTION);
            ticks[xPosAxis] = this.RESOLUTION/ 2 + i;
        }
        return ticks;
    }

    _drawHorizontalAxis(ctx) {
        // Draw axis line 
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = '#444444';
        ctx.setLineDash([1,0])
        ctx.beginPath();
        ctx.lineTo(0, this.HEIGHT /2);
        ctx.lineTo(this.WIDTH, this.HEIGHT / 2);
        ctx.stroke();
    }
}

const fig2A = new Figure2A('fig-2a-distance-vs-displacement');
fig2A.draw();
