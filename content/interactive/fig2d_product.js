import {Vector2, VectorViz} from "./fig2_common.js";

class Figure2D1 extends VectorViz {
    constructor(viz_id) {
        super(viz_id);

        this.PIXELS_PER_UNIT = 10;

        this.clearDisplayBase();


        let ctx = this.ctx;
        ctx.strokeStyle = "#AAAAAA";
        ctx.fillStyle = "#AAAAAA";
        ctx.lineWidth = 4;
        this.drawVec(ctx, this.origin, this.origin.add(new Vector2(0, -80)));
        this.drawVec(ctx, this.origin, this.origin.add(new Vector2(80, 0)));
    }
}

class Figure2D2 extends VectorViz {
    constructor(viz_id) {
        super(viz_id);

        this.PIXELS_PER_UNIT = 10;

        this.clearDisplayBase();

        let ctx = this.ctx;
        ctx.strokeStyle = "#AAAAAA";
        ctx.fillStyle = "#AAAAAA";
        ctx.lineWidth = 4;
        this.drawVec(ctx, this.origin, this.origin.add((new Vector2(80, -80)).scale(Math.sqrt(2)/2)));
        this.drawVec(ctx, this.origin, this.origin.add((new Vector2(80, 80)).scale(Math.sqrt(2)/2)));
    }
}

const fig2d1 = new Figure2D1('figure-2d-product-1');
const fig2d2 = new Figure2D2('figure-2d-product-2');