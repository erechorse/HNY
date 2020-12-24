import {Cell} from "./Cell";


export const BoardViewr = function(canvas: HTMLCanvasElement, cells: Cell[], sides: number) {
    const length = canvas.width / sides;
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < cells.length; i++) {
        ctx.beginPath();
        ctx.rect(cells[i].x * length, cells[i].y * length, length, length);
        ctx.fillStyle = cells[i].currState.color;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
    }
}

export const BoardReseter = function(canvas: HTMLCanvasElement, sides:number) {
    const width = canvas.width;
    const length = width / sides;
    const ctx = canvas.getContext("2d");
    for (let y = 0; y < width; y++) {
        for (let x = 0; x < width; x++) {
            ctx.beginPath();
            ctx.rect(x * length, y * length, length, length);
            ctx.fillStyle = "#FFFFFF";
            ctx.fill();
            ctx.strokeStyle = "black";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();             
        }
    }
}