import {Rgb} from "./Rgb";
import {iColor} from "../types/iColor";

export class Rgba extends Rgb implements iColor {
    private _alpha: number;

    constructor(red: number, green: number, blue: number, alpha: number) {
        super(red, green, blue);
        this.alpha = alpha;
    }

    set alpha(value: number) {
        if (value >= 0 && value <= 1) {
            this._alpha = value;
        } else {
            this._alpha = 0;

        }
    }

    toString() {
        return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
    }
}