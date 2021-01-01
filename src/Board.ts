import {Cell} from "./Cell";


export const BoardViewer = function(canvas: HTMLCanvasElement, cells: Cell[], sides: number) {
    const length = canvas.width / sides;
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < cells.length; i++) {
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.rect(cells[i].x * length, cells[i].y * length, length, length);
        ctx.fillStyle = cells[i].currState.color;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
    }
}

export const MitsuViewer = function(canvas: HTMLCanvasElement, cells: Cell[], sides: number) {
    const length = canvas.width / sides;
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < cells.length; i++) {

        ctx.beginPath();
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = "blue";

        if (cells[i].risk) {
            if (cells[i].x === 0) {
                if (cells[i].y === 0) {
                    ctx.fillRect(0,0,length * 2, length * 2);
                    ctx.fillRect(canvas.width - length, 0, length, length * 2);
                    ctx.fillRect(0, canvas.width - length, length * 2, length);
                } else if (cells[i].y === sides - 1) {
                    ctx.fillRect(0, canvas.width - length * 2, length * 2, length * 2);
                    ctx.fillRect(0, 0, length * 2, length);
                    ctx.fillRect(canvas.width - length, canvas.width - length * 2, length, length * 2);
                } else {
                    ctx.fillRect(0, (cells[i].y - 1) * length, length * 2, length * 3)
                    ctx.fillRect(canvas.width - length, (cells[i].y - 1) * length, length, length * 3);
                }
            } else if (cells[i].x === sides - 1) {
                if (cells[i].y === 0) {
                    ctx.fillRect(canvas.width - length * 2, 0, length * 2, length * 2);
                    ctx.fillRect(0, 0, length, length * 2);
                    ctx.fillRect(canvas.width - length * 2, canvas.width - length, length * 2, length);
                } else if (cells[i].y === sides - 1) {
                    ctx.fillRect(canvas.width - length * 2, canvas.width - length * 2, length * 2, length * 2);
                    ctx.fillRect(0, canvas.width - length * 2, length, length * 2);
                    ctx.fillRect(canvas.width - length * 2, 0, length * 2, length);
                } else {
                    ctx.fillRect(canvas.width - length * 2, (cells[i].y - 1) * length, length * 2, length * 3);
                    ctx.fillRect(0, (cells[i].y - 1) * length, length, length * 3);
                }
            } else if (cells[i].y === 0) {
                ctx.fillRect((cells[i].x - 1) * length, 0, length * 3, length * 2);
                ctx.fillRect((cells[i].x - 1) * length, canvas.width - length, length * 3, length);
            } else if (cells[i].y === sides - 1) {
                ctx.fillRect((cells[i].x - 1) * length, canvas.width - length * 2, length * 3, length * 2);
                ctx.fillRect((cells[i].x - 1) * length, 0, length * 3, length);
            } else {
                ctx.fillRect((cells[i].x - 1) * length, (cells[i].y - 1) * length, length * 3, length * 3);
            }
            ctx.closePath();
        }
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

export const ClearViewer = function(canvas: HTMLCanvasElement, sides:number) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0,0,canvas.width,canvas.width);
    ctx.closePath();
}