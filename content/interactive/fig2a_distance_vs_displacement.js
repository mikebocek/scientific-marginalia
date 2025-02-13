"use strict"

//import { Vector2, drawHorizontalAxis, drawPoint, drawTicks } from "./interactive/fig2_common.js";

class Vector2 { 
    /*
     * Handle vector arithmetic for a 2D vector
     */
    constructor(x, y) { 
        this.x = x;
        this.y = y;
    }

    add(vec) { 
        return new Vector2(this.x + vec.x, this.y + vec.y);
    }

    sub(vec) {
        return new Vector2(this.x - vec.x, this.y - vec.y);
    }

    getLength() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    scale(scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    getNormalizedVec() {
        const length = this.getLength();
        if (length === 0) {
            return new Vector2(0, 0)
        }
        return new Vector2(this.x /length, this.y/length);
    }
}

function drawPoint(ctx, prev, curr, size, drawText) {
    ctx.beginPath();
    const diffVec = prev.add(curr.scale(-1))
    // Get some useful helper vectors
    const normVec = diffVec.getNormalizedVec().scale(size);
    const orthoVec = new Vector2(-normVec.y, normVec.x);
    const leftPoint = curr.add(normVec).add(orthoVec.scale(0.5));
    const rightPoint = curr.add(normVec).add(orthoVec.scale(-0.5));
    
    ctx.lineTo(leftPoint.x, leftPoint.y);
    ctx.lineTo(rightPoint.x, rightPoint.y);
    ctx.lineTo(curr.x, curr.y);
    ctx.fill();

    ctx.font = '12px sans-serif'
    if (drawText) {
        const x_disp = Math.round(-(diffVec.x)/PIXELS_PER_UNIT, 1);
        const y_disp = Math.round((diffVec.y)/PIXELS_PER_UNIT, 1);
        const xText = curr.x - (normVec.x * (normVec.x>0)?3.5*PIXELS_PER_UNIT:3*PIXELS_PER_UNIT);
        const yText = curr.y - (normVec.y * (normVec.y<0)?PIXELS_PER_UNIT:1);
        ctx.fillText(`[${x_disp},${y_disp}]`,xText ,yText);

    }
}





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
                 7, false);

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
