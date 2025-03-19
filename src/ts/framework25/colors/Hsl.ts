import {settings} from "../settings";
import {iColor} from "../types/iColor";

export class Hsl implements iColor {
    private _hue: number;
    private _saturation: number;
    private _lightness: number;

    constructor(hue: number, saturation: number, lightness: number) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }

    set lightness(value: number) {
        if (value >= 0 && value <= 100) {
            this._lightness = value;
        } else {
            this._lightness = settings.defaultColorValue;
        }
    }

    get lightness() {
        return Math.trunc(this._lightness);
    }


    get hue(): number {
        return Math.trunc(this._hue);
    }

    set hue(value: number) {
        if (value >= 0 && value <= 360) {
            this._hue = value;
        } else {
            this._hue = settings.defaultColorValue;
        }
    }

    get saturation(): number {
        return Math.trunc(this._saturation);
    }

    set saturation(value: number) {
        if (value >= 0 && value <= 100) {
            this._saturation = value;
        } else {
            this._saturation = settings.defaultColorValue;
        }
    }

    toString() {
        return `hsl(${this.hue}deg,${this.saturation}%,${this.lightness}%)`
    }

}

