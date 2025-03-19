export function randomInt(min: number, max: number) {
    return Math.ceil(Math.random() * (max - min) + min);
}

export function randomFloat(min: number, max: number) {
    return Math.random() * (max - min) + min;
}