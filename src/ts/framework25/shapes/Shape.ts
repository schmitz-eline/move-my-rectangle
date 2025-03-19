import {iPosition} from "../types/iPosition";
import {iColor} from "../types/iColor";

export abstract class Shape {
    ctx: CanvasRenderingContext2D;
    position: iPosition;
    color: iColor;


    protected constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: iColor) {
        this.ctx = ctx;
        this.position = position;
        this.color = color;
    }
}
