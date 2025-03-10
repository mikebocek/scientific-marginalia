class SquareDiagram {
    constructor(canvas_id) {
        this.canvas = document.getElementById(canvas_id);
        this.ctx = this.canvas.getContext("2d");
        this.HEIGHT = this.canvas.getAttribute('height');
        this.WIDTH = this.canvas.getAttribute('width');
        this.MARGIN = 30;
        this.SIDE_LENGTH = 40;
    }

    draw(nSquares) {
        this.ctx.strokeStyle = '#555555';
        this.ctx.fillStyle = '#CC99CC';
        const offset = this.SIDE_LENGTH / 5;
        if (nSquares == 1) {
            this.drawSquare(0, 0);
        } else {
            for (let i = 0; i < nSquares - 1; i++) {
                for (let j = 0; j < nSquares - 1; j++) {
                    this.drawSquare(i, j);
                }
            }
            this.ctx.fillStyle = '#9999CC';
            for (let i = 0; i < nSquares - 1; i++) { 
                this.drawSquare(nSquares - 1, i, 0, offset);
                this.drawSquare(i, nSquares - 1, offset, 0);
            }
            this.ctx.fillStyle = '#CC9999';
            this.drawSquare(nSquares - 1, nSquares - 1, offset, offset);
        }
    }

    drawSquare(rowIndex, colIndex, xOffset = 0, yOffset =0) {
        const left = this.MARGIN + (colIndex * this.SIDE_LENGTH) + xOffset;
        const bottom = this.HEIGHT - (this.MARGIN + (rowIndex * this.SIDE_LENGTH) + yOffset);
        this.ctx.beginPath();
        this.ctx.lineTo(left, bottom);
        this.ctx.lineTo(left + this.SIDE_LENGTH, bottom);
        this.ctx.lineTo(left + this.SIDE_LENGTH, bottom - this.SIDE_LENGTH);
        this.ctx.lineTo(left, bottom - this.SIDE_LENGTH);
        this.ctx.lineTo(left, bottom);
        this.ctx.stroke();
        this.ctx.fill();
    }
}

const Figure1A = new SquareDiagram('figure-1a-square')
Figure1A.draw(1);

const Figure1B = new SquareDiagram('figure-1b-square-2')
Figure1B.draw(2);

const Figure1C = new SquareDiagram('figure-1c-square-3')
Figure1C.draw(3);

const Figure1D = new SquareDiagram('figure-1d-square-4')
Figure1D.draw(4);