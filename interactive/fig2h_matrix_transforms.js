import {Vector2, drawPoint} from "./fig2_common.js";

const canvas = document.getElementById('figure-2h-matrix-transforms')
const ctx = canvas.getContext("2d");
const IMG_SIZE = 150;
const PIXELS_PER_UNIT = 10;

document.getElementById('input-00').value = '1';
document.getElementById('input-01').value = '0';
document.getElementById('input-10').value = '0';
document.getElementById('input-11').value = '1';

class Figure2H {
    constructor(viz_id) {
        this.canvas = document.getElementById(viz_id);
        this.ctx = this.canvas.getContext("2d");
        this.ctx.lineWidth = 2;
        this.HEIGHT = this.canvas.getAttribute('height');
        this.WIDTH = this.canvas.getAttribute('width');
        this.PIXELS_PER_UNIT = 20; // Pixels
        this.origin = new Vector2(this.WIDTH/2, this.HEIGHT/2);
    }

    draw(mat00, mat01, mat10, mat11) {
        this.ctx.resetTransform();
        const image = document.getElementById('source');
        this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);

        this.ctx.transform(mat00, mat01, mat10, mat11, this.WIDTH/2, this.HEIGHT/2);
        
        this.ctx.drawImage(image, 0, 0, 717, 717,-IMG_SIZE/2, -IMG_SIZE/2, IMG_SIZE, IMG_SIZE);
        this.ctx.strokeStyle = '#AA44AA';
        this.ctx.fillStyle = '#AA44AA';
        drawVec(this.ctx, new Vector2(-IMG_SIZE/2, IMG_SIZE), new Vector2(-IMG_SIZE/2, IMG_SIZE-100));
        drawVec(this.ctx, new Vector2(-IMG_SIZE/2, IMG_SIZE-100), new Vector2(100 - IMG_SIZE/2, IMG_SIZE-100));
        drawVec(this.ctx, new Vector2(-IMG_SIZE/2, IMG_SIZE), new Vector2(100 - IMG_SIZE/2, IMG_SIZE-100));
    }

}

class Figure2HInteractive extends Figure2H {
    constructor(viz_id) {
        super(viz_id);

        for (let elem of document.querySelectorAll('.matrix-element')) {
            elem.addEventListener("change", () => this.reDraw())
        }

        this.reDraw();
    }

    reDraw() {
        const mat00 = +document.getElementById('input-00').value;
        const mat01 = +document.getElementById('input-01').value;
        const mat10 = +document.getElementById('input-10').value;
        const mat11 = +document.getElementById('input-11').value;

        this.draw(mat00, mat01, mat10, mat11);

    }
}


function drawVec(ctx, prev, curr) {
    ctx.beginPath();
    ctx.lineTo(prev.x, prev.y);
    ctx.lineTo(curr.x, curr.y);
    ctx.stroke();
    drawPoint(ctx, prev, curr, 10, false, PIXELS_PER_UNIT);
}

const figure2h1 = new Figure2HInteractive('figure-2h-matrix-transforms');

const figure2h2 = new Figure2H('figure-2h-identity');
figure2h2.draw(1, 0, 0, 1);

const figure2h3 = new Figure2H('figure-2h-scaling');
figure2h3.draw(2, 0, 0, 1);

const figure2h4 = new Figure2H('figure-2h-flip');
figure2h4.draw(1, 0, 0, -1);

const figure2h5 = new Figure2H('figure-2h-skew');
figure2h5.draw(1, 1, 0, 1);

const figure2h6 = new Figure2H('figure-2h-rotation');
figure2h6.draw(0.5, -0.86, 0.86, 0.5);