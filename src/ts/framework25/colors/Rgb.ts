import {settings} from "../settings";
import {iColor} from "../types/iColor";

export class Rgb implements iColor {
    private _red: number;
    private _green: number;
    private _blue: number;

    constructor(red: number, green: number, blue: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }


    set red(value: number) {
        if (value >= 0 && value <= 255) {
            this._red = value;
        } else {
            this._red = settings.defaultColorValue;

        }
    }

    set green(value: number) {
        if (value >= 0 && value <= 255) {
            this._green = value;
        } else {
            this._green = settings.defaultColorValue;

        }
    }

    set blue(value: number) {
        if (value >= 0 && value <= 255) {
            this._blue = value;
        } else {
            this._blue = settings.defaultColorValue;

        }
    }


    get red(): number {
        return Math.trunc(this._red);
    }

    get green(): number {
        return Math.trunc(this._green);
    }

    get blue(): number {
        return Math.trunc(this._blue);
    }

    toString() {
        return `rgb(${this.red},${this.green},${this.blue})`;
    }
}