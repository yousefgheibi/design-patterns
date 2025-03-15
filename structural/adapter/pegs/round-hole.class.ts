import { RoundPeg } from "./round-peg.class";

export class RoundHole {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    // بررسی اینکه آیا یک جسم می‌تواند در سوراخ قرار گیرد یا خیر
    fits(peg: RoundPeg): boolean {
        return this.getRadius() >= peg.getRadius();
    }
}