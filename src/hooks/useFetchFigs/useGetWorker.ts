import { useMemo } from "react";
import { Action } from "types";

export const useGetWorker = (action: Action) => {
    const getMemoizedFetchBooksWorker: Worker = new Worker(new URL("./fetchFigsWorker.ts", import.meta.url));
    // const getMemoizedFetchBooksWorker: Worker = useMemo(() => new Worker(new URL("./fetchFigsWorker.ts", import.meta.url)), []);
    return action ? getMemoizedFetchBooksWorker : null;
};

export default useGetWorker;
