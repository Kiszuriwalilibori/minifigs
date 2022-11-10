import { Paths } from "routes/paths";
import { History } from "history";
import { RedirectType } from "types";

const createRedirect = (history: History) => {
    return (): RedirectType => ({
        intro: () => {
            history.push(Paths.intro);
        },
        order: () => {
            history.push(Paths.order);
        },
        select: () => {
            history.push(Paths.select);
        },
    });
};

export default createRedirect;
