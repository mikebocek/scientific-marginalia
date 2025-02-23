export class Vector2 { 
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

//Singleton object to handle shared state in the vector path
export const vectorPath = [];

export function drawPoint(ctx, prev, curr, size, drawText, PIXELS_PER_UNIT) {
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
        const xText = curr.x - (normVec.x * (normVec.x>0)?1.5*PIXELS_PER_UNIT:-PIXELS_PER_UNIT/2);
        const yText = curr.y - (normVec.y * (y_disp<0)?-PIXELS_PER_UNIT/2:PIXELS_PER_UNIT/2);
        ctx.fillText(`[${x_disp},${y_disp}]`,xText ,yText);
    }
}

export function drawHorizontalAxis(ctx) {
    // Draw axis line 
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#444444';
    ctx.setLineDash([1,0])
    ctx.beginPath();
    ctx.lineTo(0, HEIGHT /2);
    ctx.lineTo(WIDTH, HEIGHT / 2);
    ctx.stroke();
}

export function drawTicks(ctx) { 
    let ticks = new Map();

    for (let i = 0; i < WIDTH; i+=RESOLUTION) {
        ctx.beginPath();
        ctx.lineTo(RESOLUTION / 2 + i, HEIGHT/2 - RESOLUTION/2);
        ctx.lineTo(RESOLUTION/ 2 + i, HEIGHT/2 + RESOLUTION/2);
        ctx.stroke();
        
        let xPosAxis = Math.round((i -(WIDTH / 2))/RESOLUTION);
        ctx.fillText(xPosAxis,RESOLUTION / 2 + i - 2.5, HEIGHT/2 + RESOLUTION);
        ticks[xPosAxis] = RESOLUTION/ 2 + i;
    }
    return ticks;
}

export function throttle(fn, wait) {
    let isThrottled = false, savedArgs, savedThis;
    
    function wrapper() {
      if (isThrottled) {
        savedArgs = arguments;
        savedThis = this;
        return;
      }
      
      fn.apply(this, arguments);
      isThrottled = true;
      
      setTimeout(() => {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, wait);
    }
    
    return wrapper;
}

export class VectorViz {
    constructor(viz_id) {
        this.canvas = document.getElementById(viz_id);
        this.ctx = this.canvas.getContext("2d");
        this.ctx.lineWidth = 2;
        this.HEIGHT = this.canvas.getAttribute('height');
        this.WIDTH = this.canvas.getAttribute('width');
        this.PIXELS_PER_UNIT = 20; // Pixels
    }

    clearDisplayBase() {
        let ctx = this.ctx;
        ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = '#777777';
        ctx.setLineDash([1,0])
        ctx.beginPath(0, this.HEIGHT /2);
        ctx.lineTo(0, this.HEIGHT /2);
        ctx.lineTo(this.WIDTH, this.HEIGHT / 2);
        ctx.stroke();
    
        ctx.beginPath(this.WIDTH / 2, 0);
        ctx.lineTo(this.WIDTH / 2, 0);
        ctx.lineTo(this.WIDTH/2, this.HEIGHT);
        ctx.stroke();
    }

    drawVec(ctx, prev, curr, drawText, sizeMultiplier = 1) {
        ctx.beginPath();
        ctx.lineTo(prev.x, prev.y);
        ctx.lineTo(curr.x, curr.y);
        ctx.stroke();
        drawPoint(ctx, prev, curr, 10 * sizeMultiplier, drawText, this.PIXELS_PER_UNIT);
    }

    getCanvasBoundaries(obj) {
        let curleft = 0;
        let curtop = 0;
        if (obj.offsetParent) {
            do {
			    curleft += obj.offsetLeft;
			    curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);}
        return [curleft,curtop];
    }

}