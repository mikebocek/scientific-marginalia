import {Vector2, VectorViz} from "./fig2_common.js";

class Figure2F extends VectorViz {
    constructor(viz_id) {
        super(viz_id);

        this.PIXELS_PER_UNIT = 4;

        this.placeVec = this.placeVec.bind(this);
        this.tryVec = this.tryVec.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.vec = [new Vector2(0, -40),
                    new Vector2(40, 0)
        ];


        this.clearDisplay();
        this.canvas.addEventListener("mousemove", (e) => this.tryVec(e));
        this.canvas.addEventListener("click", (e) => this.placeVec(e));
        this.canvas.addEventListener("mouseout", () => this.clearDisplay())
    }

    clearDisplay() { 
        this.clearDisplayBase();

        let ctx = this.ctx;

        
        ctx.lineWidth = 1;

        const point1 = this.origin.add(this.vec[0]);
        const point2 = this.origin.add(this.vec[1]);
        const endPoint = this.origin.add(this.vec[0]).add(this.vec[1]);
        ctx.strokeStyle = '#AA4444'
        ctx.fillStyle = '#AA4444'
        this.drawVec(ctx, this.origin, point1, true);
        this.drawVec(ctx, point2, endPoint, true);
        ctx.strokeStyle = '#4444AA'
        ctx.fillStyle = '#4444AA'
        this.drawVec(ctx, this.origin, point2, true);
        this.drawVec(ctx, point1, endPoint, true);

        ctx.globalAlpha = 0.5;
        ctx.strokeStyle = "#AAAAAA";
        ctx.fillStyle = '#AA44AA';
        ctx.beginPath();

        ctx.setLineDash([8,4])
        for (const point of [this.origin, point1, endPoint, point2]) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#AAAAAA";


        this.ctx.font = '12px sans-serif'
        this.ctx.fillStyle = '#333333';
        let elements = [];
        for (const vec of this.vec) { 
            elements.push(Math.round(vec.x / this.PIXELS_PER_UNIT, 0));
            elements.push(Math.round(vec.y / this.PIXELS_PER_UNIT, 0));
        }
        const [a, b, c, d] =  elements;
        const wedgeProduct = Math.round((a * d) - (c * b), 1)
        this.ctx.fillText(`Wedge product: ${wedgeProduct}`, 10, 15);
    }

    tryVec(e) {
        this.clearDisplay();
        const [left, top] = this.getCanvasBoundaries(this.canvas);
        const [x, y] = [this.PIXELS_PER_UNIT* Math.round((e.pageX - left) / this.PIXELS_PER_UNIT), 
                        this.PIXELS_PER_UNIT* Math.round((e.pageY - top) / this.PIXELS_PER_UNIT)];
        
        let currVec = [this.origin,
                        new Vector2(x, y)        
        ];

        this.ctx.strokeStyle = "#AAAAAA";
        this.ctx.fillStyle = "#AAAAAA";
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([8,4])

        this.drawVec(this.ctx, currVec[0], currVec[1], true);
    }

    placeVec(e) {
        const [left, top] = this.getCanvasBoundaries(this.canvas);
        const [x, y] = [this.PIXELS_PER_UNIT* Math.round((e.pageX - left) / this.PIXELS_PER_UNIT), 
                        this.PIXELS_PER_UNIT* Math.round((e.pageY - top) / this.PIXELS_PER_UNIT)];
        
        this.vec.shift();
        this.vec.push(new Vector2(x, y).sub(this.origin));
        this.clearDisplay();
    }
}

const fig2f = new Figure2F('figure-2f-wedge-product');