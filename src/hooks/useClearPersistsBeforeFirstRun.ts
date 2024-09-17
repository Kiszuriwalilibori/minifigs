import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatchAction } from "hooks";
import { getRunningStatus } from "reduxware/selectors";

export const useClearPersistsBeforeFirstRun = () => {
    const isRunning = useSelector(getRunningStatus);
    const { clearSelectedMinifigId, clearDraw, setRunningTrue } = useDispatchAction();

    useEffect(() => {
        if (!isRunning) {
            clearSelectedMinifigId();
            clearDraw();
            setRunningTrue();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useClearPersistsBeforeFirstRun;
