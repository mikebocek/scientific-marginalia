"use strict"
import { Vector2, drawPoint, vectorPath, throttle, VectorViz} from "./fig2_common.js";

class Figure2B extends VectorViz {
    constructor(viz_id) {
        super(viz_id);
        vectorPath.push(new Vector2(this.WIDTH / 2, this.HEIGHT /2));

        //Bind functions 
        this.addLine = this.addLine.bind(this);
        this.tryLine = this.tryLine.bind(this);
        this.drawCurrPath = this.drawCurrPath.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.clearDisplay();

        this.canvas.addEventListener("click", this.addLine);
        this.canvas.addEventListener("mousemove", (e => throttle(this.tryLine(e), 20)));
        this.canvas.addEventListener("mouseout", this.drawCurrPath)
        window.addEventListener("keydown", this.handleKeyPress);
    }

    clearDisplay() {
        /* 
         * Reset the display to the basic canvas that we're going to 
           draw on 
         */
        this.clearDisplayBase();
    
        if (vectorPath.length > 1) {
            ctx.font = '12px sans-serif'
            const diffs = vectorPath.slice(1).map((e, i) => e.sub(vectorPath[i]));
            const distance = Math.round(diffs.reduce((i, j) => i + j.getLength(), 0), 2);
            const displacement = Math.round(vectorPath.at(-1).sub(vectorPath.at(0)).getLength());
            ctx.fillStyle = '#333333';
            ctx.fillText(`Displacement: ${displacement}`, 10, 15);
            ctx.fillText(`Distance: ${distance}`, 10, 30);
        }
    }

    drawCurrPath(drawResult = false) {
        let ctx = this.ctx;
        this.clearDisplay();
        // Draw the individual user vectors
        ctx.strokeStyle = "#AAAAAA";
        ctx.fillStyle = "#AAAAAA";
        ctx.lineWidth = 2;
        ctx.setLineDash([8,4])
        vectorPath.forEach((e, i) => {i > 0?this.drawVec(ctx, vectorPath[i-1],e, true):null});
    
        // Draw the resulting vector
        if (vectorPath.length > 2 && drawResult) { 
            ctx.fillStyle = '#AA2211';
            ctx.strokeStyle = "#AA2211";
            ctx.lineWidth = 4;
            ctx.setLineDash([1, 0]);
            const start = vectorPath.at(0);
            const end = vectorPath.at(-1);
            this.drawVec(ctx, start, end, 2, true);
        }
    }

    addLine(e) {
        const [left, top] = this.getCanvasBoundaries(this.canvas);
        const [x, y] = [this.PIXELS_PER_UNIT* Math.round((e.pageX - left) / this.PIXELS_PER_UNIT), 
                        this.PIXELS_PER_UNIT* Math.round((e.pageY - top) / this.PIXELS_PER_UNIT)];
        vectorPath.push(new Vector2(x, y));
        this.drawCurrPath(true);
    }
    
    tryLine(e) {
        const [left, top] = this.getCanvasBoundaries(this.canvas);
        const [x, y] = [this.PIXELS_PER_UNIT* Math.round((e.pageX - left) / this.PIXELS_PER_UNIT), 
                        this.PIXELS_PER_UNIT* Math.round((e.pageY - top) / this.PIXELS_PER_UNIT)];
        vectorPath.push(new Vector2(x, y));
        this.drawCurrPath();
        vectorPath.pop()
    }

    handleKeyPress(e) {
        switch (e.key) {
            case "Escape":
            case "Q": 
            case "q": 
            this.clearDisplay();
            vectorPath = [new Vector2(this.WIDTH/ 2, this.HEIGHT/2)];
        }
    }
}




let figure2B = new Figure2B('vector-addition');