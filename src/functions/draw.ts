import { RootStateType } from "types";

const NUMBER_OF_MINIFIGS = 3;

function draw(minifigs: RootStateType["draw"]["minifigs"]) {
    let initialLength = minifigs.length;
    if (initialLength <= NUMBER_OF_MINIFIGS) return minifigs;
    const results = [] as RootStateType["draw"]["minifigs"];

    for (let i = 0; i < NUMBER_OF_MINIFIGS; i++) {
        const index = Math.floor(Math.random() * minifigs.length);
        results.push(minifigs[index]);
        minifigs.splice(index, 1);
    }

    return results;
}

export default draw;
