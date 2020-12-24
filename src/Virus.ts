import * as Rnd from "./Random";

export interface Virus {
    multi(): boolean,
    disappear(date: number): boolean
}

export class EmptyVirus implements Virus{

    constructor() {
    }

    multi(): boolean {
        return false;
    }

    disappear(date: number): boolean {
        return false;
    }
}

export class CVirus implements Virus {

    private alpha: number = 0;
    private gamma: number = 0.1;
    private mitsu: number = 1;

    constructor(mitsu: number) {
        this.mitsu = mitsu;
    }

    multi(): boolean {
        if (Rnd.getRandom() < 0.8) {
            this.alpha = this.gamma * 2.5 / 8 / 4;
        } else {
            this.alpha = 4 * this.gamma * 2.5 / 8 * this.mitsu;
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

    multi() {
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