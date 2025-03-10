import {Vector2, VectorViz} from "./fig2_common.js";

class Figure2EA extends VectorViz {
    constructor(viz_id) {
        super(viz_id);

        this.PIXELS_PER_UNIT = 4;

        this.tryVec = this.tryVec.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.vec = new Vector2(40, -40)


        this.slider = document.getElementById('scale-slider');
        // Won't be set to 1 by default, but it should be 
        this.slider.value = 1;

        this.clearDisplay();
        this.canvas.addEventListener("mousemove", (e) => this.tryVec(e));
        this.canvas.addEventListener("mouseout", () => this.clearDisplay())

        this.slider.addEventListener("change", () => this.clearDisplay())
    }

    clearDisplay() { 
        this.clearDisplayBase();

        let ctx = this.ctx;
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#AA4444'
        ctx.fillStyle = '#AA4444'
        this.drawVec(ctx, this.origin, this.origin.add(this.vec), true);

        ctx.lineWidth = 4;
        ctx.strokeStyle = '#AAAAAA'
        ctx.fillStyle = '#AAAAAA'
        this.drawVec(ctx, this.origin, new Vector2(this.origin.x + this.vec.x, this.origin.y), false);
        this.drawVec(ctx, new Vector2(this.origin.x + this.vec.x, this.origin.y), this.origin.add(this.vec), false);

        if (Math.abs(this.vec.x) > 10 && Math.abs(this.vec.y) > 10) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            const startAngle = this.vec.x < 0?Math.PI:0;
            const angle = Math.atan(this.vec.y / this.vec.x)
            const endAngle = this.vec.x < 0?Math.PI+angle:angle;
            
            ctx.arc(this.origin.x, this.origin.y, 20, startAngle, endAngle, Math.sign(this.vec.x) != Math.sign(this.vec.y));
            ctx.stroke();
            const normVec = this.origin.add(this.vec.getNormalizedVec().scale(20));
            ctx.fillText('θ', normVec.x, normVec.y);
        }

        const length = Math.round(10 * this.vec.getLength() / (this.PIXELS_PER_UNIT**2))/10;
        ctx.font = '12px sans-serif'
        ctx.fillStyle = '#333333';
        ctx.fillText(`Length: ${length}`, 10, 15);
    }

    tryVec(e) {
        const [left, top] = this.getCanvasBoundaries(this.canvas);
        const [x, y] = [this.PIXELS_PER_UNIT* Math.round((e.pageX - left) / this.PIXELS_PER_UNIT), 
                        this.PIXELS_PER_UNIT* Math.round((e.pageY - top) / this.PIXELS_PER_UNIT)];
        
        this.vec =  new Vector2(x, y).sub(this.origin);

        this.clearDisplay();
    }

}

const fig2ea = new Figure2EA('figure-2ea-distance');