export const getRandom = function(): number {
    return Math.random();
}

export const getRandomInt = function(min:number, max:number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
}
