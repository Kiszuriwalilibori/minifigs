import { Paths } from "routes/paths";
import { RedirectType } from "types";
import { NavigateFunction } from "react-router-dom";

const createRedirect = (history: NavigateFunction) => {
    return (): RedirectType => ({
        intro: () => {
            history(Paths.intro);
        },
        order: () => {
            history(Paths.order);
        },
        select: () => {
            history(Paths.select);
        },
    });
};

export default createRedirect;
