import * as Rnd from "./Random";

export interface Virus {
    multi(risk: boolean): boolean,
    disappear(date: number): boolean
}

export class EmptyVirus implements Virus{

    constructor() {
    }

    multi(risk: boolean): boolean {
        return false;
    }

    disappear(date: number): boolean {
        return false;
    }
}

export class CVirus implements Virus {

    private alpha: number = 0;
    private gamma: number = 0.1;

    constructor() {
    }

    multi(risk: boolean): boolean {
        if (risk) {
            this.alpha = 4 * this.gamma * 2.5 / 8;
        } else {
            this.alpha = this.gamma * 2.5 / 8 / 4;
        }
        if (Rnd.getRandom() < this.alpha) {
            return true;
        } else {
            return false;
        }
    }

    disappear(date: number): boolean {
        if (date > 1 / this.gamma) {
            return true;
        }
        return false;
    }
}

export class VaiableVirus implements Virus {
    
    private alpha: number;
    private gamma: number;

    constructor(alpha: number, gamma: number) {
        this.alpha = alpha;
        this.gamma = gamma;
    }

    multi(risk: boolean) {
        if (Rnd.getRandom() < this.alpha) {
            return true;
        } else {
            return false;
        }
    }

    disappear(date: number): boolean {
        if (date > 1 / this.gamma) {
            return true;
        }
        return false;
    }
}