import { useMemo } from "react";

export const useGetMemoizedFetchBooksWorker = () => {
    const getMemoizedFetchBooksWorker: Worker = new Worker(new URL("./fetchFigsWorker.ts", import.meta.url));
    // const getMemoizedFetchBooksWorker: Worker = useMemo(() => new Worker(new URL("./fetchFigsWorker.ts", import.meta.url)), []);
    return getMemoizedFetchBooksWorker;
};

export default useGetMemoizedFetchBooksWorker;
