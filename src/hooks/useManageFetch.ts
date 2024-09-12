import { useEffect } from "react";
import useBoolean from "./useBoolean";

export const useManageFetch = (fetchFn: Function) => {
    const [shouldFetch, fetchMinifigs, setShouldFetchFalse, ,] = useBoolean(false);

    useEffect(() => {
        if (shouldFetch) {
            fetchFn();
            setShouldFetchFalse();
        }
        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldFetch]);

    return fetchMinifigs;
};

export default useManageFetch;
