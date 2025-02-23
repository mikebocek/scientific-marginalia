import {Vector2, VectorViz} from "./fig2_common.js";

class Figure2D extends VectorViz {
    constructor(viz_id) {
        super(viz_id);

        this.PIXELS_PER_UNIT = 4;

        this.placeVec = this.placeVec.bind(this);
        this.tryVec = this.tryVec.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.vec = [new Vector2(40, -40)
        ];


        this.slider = document.getElementById('scale-slider');
        // Won't be set to 1 by default, but it should be 
        this.slider.value = 1;

        this.clearDisplay();
        this.canvas.addEventListener("mousemove", (e) => this.tryVec(e));
        this.canvas.addEventListener("click", (e) => this.placeVec(e));
        this.canvas.addEventListener("mouseout", () => this.clearDisplay())

        this.slider.addEventListener("change", () => this.clearDisplay())
    }

    clearDisplay() { 
        this.clearDisplayBase();

        let ctx = this.ctx;

        const scale = +this.slider.value;
        
        if (this.vec.length == 1) {
            ctx.strokeStyle = "#AAAAAA";
            ctx.fillStyle = "#AAAAAA";
            ctx.lineWidth = 1;
            ctx.setLineDash([8,4])
            const startPoint = new Vector2(this.WIDTH/2, this.HEIGHT/2);
            this.drawVec(ctx, startPoint, startPoint.add(this.vec[0]), true);

            ctx.strokeStyle = "#AA2211";
            ctx.fillStyle = "#AA2211";
            ctx.lineWidth = 4;
            ctx.setLineDash([1,0]);
            this.drawVec(this.ctx, startPoint, 
                startPoint.add(this.vec[0].scale(scale)), true);

            this.ctx.font = '12px sans-serif'
            this.ctx.fillStyle = '#333333';
            this.ctx.fillText(`Scale factor: ${scale}`, 10, 15);
        }
    }

    tryVec(e) {
        this.clearDisplay();
        const [left, top] = this.getCanvasBoundaries(this.canvas);
        const [x, y] = [this.PIXELS_PER_UNIT* Math.round((e.pageX - left) / this.PIXELS_PER_UNIT), 
                        this.PIXELS_PER_UNIT* Math.round((e.pageY - top) / this.PIXELS_PER_UNIT)];
        
        let currVec = [new Vector2(this.WIDTH / 2, this.HEIGHT/2),
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
        
        this.vec = [new Vector2(x - this.WIDTH/2, y - this.HEIGHT/2)];
        this.clearDisplay();
    }
}

const fig2d = new Figure2D('figure-2d-scaling');