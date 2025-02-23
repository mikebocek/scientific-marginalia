import {Vector2, vectorPath, VectorViz} from "./fig2_common.js";

class Figure2C extends VectorViz {
    constructor(viz_id) {
        super(viz_id);
        this.clearDisplay();
        this.drawCurrPath = this.drawCurrPath.bind(this);
        setInterval(() => this.drawCurrPath(), 2500)
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

    drawCurrPath() {
        console.log("Run")
        // A little weird - but we sort of made the mistake of storing 
        // our Vector2 elements as an array of positions on the canvas - so
        // we need to convert to "differences", shuffle those, and then 
        // convert those back to positions
        const diffs = vectorPath.slice(1).map((e, i) => e.sub(vectorPath[i]))
        const shuffledDiffs = shuffle(diffs);
        let shuffledVectorPath = [new Vector2(this.WIDTH/2, this.HEIGHT/2)];
        shuffledDiffs.forEach((e) => shuffledVectorPath.push(shuffledVectorPath.at(-1).add(e)));

        this.clearDisplay();
        if (shuffledVectorPath.length > 2) { 
            let ctx = this.ctx;
            this.clearDisplay();
            // Draw the individual user vectors
            ctx.strokeStyle = "#AAAAAA";
            ctx.fillStyle = "#AAAAAA";
            ctx.lineWidth = 2;
            ctx.setLineDash([8,4])
            shuffledVectorPath.forEach((e, i) => {i > 0?this.drawVec(ctx, shuffledVectorPath[i-1],e, true):null});
        
            // Draw the resulting vector
        
            ctx.fillStyle = '#AA2211';
            ctx.strokeStyle = "#AA2211";
            ctx.lineWidth = 4;
            ctx.setLineDash([1, 0]);
            const start = shuffledVectorPath.at(0);
            const end = shuffledVectorPath.at(-1);
            this.drawVec(ctx, start, end, 2, true);
        }
    }
}

// Fisher-Yates shuffle - stolen from Wikipedia
function shuffle(in_arr) {
    let arr = in_arr.slice();
    for (let i = arr.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random()* (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let figure2C = new Figure2C('figure-2c-commuitivity');