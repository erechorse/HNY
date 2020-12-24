import * as Rnd from "./Random";
import {Virus as Vi, EmptyVirus as EV} from "./Virus";

export class Cell {

    virus: Vi; //体内ウイルス
    x: number;
    y: number;
    neighbor: Cell[];
    currState: State;
    nextState: State;

    constructor(x: number, y: number) {
        this.virus = new EV();
        this.x = x;
        this.y = y;
        this.neighbor = new Array();
        this.currState = new StateS(0)
        this.nextState = new StateS(0);
    }

    reset(probI: number, virus: Vi) {
        this.virus = virus;
        if (Rnd.getRandom() < probI) {
            this.currState = new StateI(0);
        } else {
            this.currState = new StateS(0);
        }
        return;
    }

    setNeighbor(cell: Cell) {
        this.neighbor.push(cell);
        return;
    }

    getNextDate() {
        this.nextState = this.currState.nextState(this.neighbor, this.virus);
        return;
    }

    update() {
        this.currState = this.nextState;
    }

    stateName() {
        return this.currState.name;
    }

}

export class Null extends Cell {

    constructor() {
        super(0,0);
    }

    reset(probI:number, virus:Vi): void;
    reset(): void;

    reset(){
        return;
    }

    getNextState() {
        return;
    }

    update() {
        return;
    }

    
}

export interface State {
    name: string;
    date: number,
    color: string,
    positive: boolean,
    nextState(neighbor:Cell[], virus:Vi): State;
}

export class StateS implements State {

    name: string = "S";
    date: number;
    color: string = '#FFFFFF'; //白
    positive = false;

    constructor(date:number) {
        this.date = date;
    }

    nextState(neighbor: Cell[], virus:Vi): State {
        for (let i = 0; i < neighbor.length; i++) {
            if (neighbor[i].currState.positive) {
                if(virus.multi()) {
                    return new StateI(0);
                }
            }
        }
        this.date++;
        return new StateS(this.date);
    }

}

export class StateI implements State {

    name: string = "I";
    date: number;
    color: string = '#FF0000'; //赤
    positive = true;

    constructor(date:number) {
        this.date = date;
    }

    nextState(neighbor: Cell[], virus:Vi): State {
        if (virus.disappear(this.date)) {
            return new StateR(this.date);
        }
        this.date++;
        return new StateI(this.date);
    }

}

export class StateR implements State {

    name: string = "R";
    date: number;
    color: string = '#008000'; //緑
    positive = false;

    constructor(date:number) {
        this.date = date;
    }

    nextState(neighbor: Cell[], virus:Vi): State {
        this.date++;
        return new StateR(this.date);
    }

}