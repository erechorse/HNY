import {Cell as Cell, Null as Null, StateR as StateR} from "./Cell";
import {Virus as Vi, Virus} from "./Virus";

export class CellMap {

    cells: Cell[];
    sides: number;
    date: number;

    constructor(sides: number) {
        this.cells = new Array();
        this.sides = sides;
        this.date = 0;
    }

    reset(probI: number, virus: Vi) {

        this.cells = new Array();

        this.date = 0;

        const cellMap: Cell[][] = new Array();

        for (let y = 0; y < this.sides; y++) {
            cellMap[y] = new Array();
            for (let x = 0; x < this.sides; x++) {
                const c = new Cell(x, y);
                c.reset(probI, virus);
                cellMap[y][x] = c;
            }         
        }
        
        for (let y = 0; y < this.sides; y++) {
            cellMap[y].push(cellMap[y][0]);
            cellMap[y].unshift(cellMap[y].slice(-2)[0]);
        }

        const tmp1 = cellMap[0].slice(1,this.sides + 1);
        tmp1.push(new Null());
        tmp1.unshift(new Null());
        cellMap.push(tmp1);

        const tmp2 = (cellMap.slice(-2)[0]).slice(1,this.sides + 1);
        tmp2.push(new Null());
        tmp2.unshift(new Null());
        cellMap.unshift(tmp2);

        for (let y = 1; y < this.sides + 1; y++) {
            for (let x = 1; x < this.sides + 1; x++) {
                for (let yy = y - 1; yy <= y + 1; yy++) {
                    for (let xx = x - 1; xx <= x + 1; xx++) {
                        if (yy === y && xx === x) continue;
                        cellMap[y][x].setNeighbor(cellMap[yy][xx]);
                    }
                }
                this.cells.push(cellMap[y][x]);
            }         
        }
        return; 
    }

    manualReset(coordX: number, coordY:number, virus:Vi, R: boolean) {
        this.cells = new Array();

        this.date = 0;

        const cellMap: Cell[][] = new Array();

        for (let y = 0; y < this.sides; y++) {
            cellMap[y] = new Array();
            for (let x = 0; x < this.sides; x++) {
                const c = new Cell(x, y);
                if (coordX === x && coordY === y) {
                    c.reset(1, virus);
                } else {
                    c.reset(0, virus);
                    if (R) c.currState = new StateR(0);
                }
                cellMap[y][x] = c;
            }         
        }
        
        for (let y = 0; y < this.sides; y++) {
            cellMap[y].push(cellMap[y][0]);
            cellMap[y].unshift(cellMap[y].slice(-2)[0]);
        }

        const tmp1 = cellMap[0].slice(1,this.sides + 1);
        tmp1.push(new Null());
        tmp1.unshift(new Null());
        cellMap.push(tmp1);

        const tmp2 = (cellMap.slice(-2)[0]).slice(1,this.sides + 1);
        tmp2.push(new Null());
        tmp2.unshift(new Null());
        cellMap.unshift(tmp2);

        for (let y = 1; y < this.sides + 1; y++) {
            for (let x = 1; x < this.sides + 1; x++) {
                for (let yy = y - 1; yy <= y + 1; yy++) {
                    for (let xx = x - 1; xx <= x + 1; xx++) {
                        if (yy === y && xx === x) continue;
                        cellMap[y][x].setNeighbor(cellMap[yy][xx]);
                    }
                }
                this.cells.push(cellMap[y][x]);
            }         
        }
        return; 
        
    }

    getNewGen() {
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i].getNextDate();
        }
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i].update();
        }
        this.date++;
        return;
    }

    numberOfState(state: string): number {
        let sum: number = 0;
        for (let i = 0; i < this.cells.length; i++) {
            if (state === this.cells[i].stateName()) sum++;
        }
        return sum;
    }

}