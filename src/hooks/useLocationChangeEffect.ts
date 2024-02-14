import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useLocationChangeEffect(callback: Function) {
    const location = useLocation();

    useEffect(() => {
        callback();
    }, [location, callback]);
}

export default useLocationChangeEffect;
