import { Minifig } from "types/types";

function draw(minifigs: Minifig[]) {
    let initialLength = minifigs.length;
    if (initialLength <= 3) return minifigs;
    const results = [] as Minifig[];

    for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * minifigs.length);
        results.push(minifigs[index]);
        minifigs.splice(index, 1);
    }
    return results;
}

export default draw;
