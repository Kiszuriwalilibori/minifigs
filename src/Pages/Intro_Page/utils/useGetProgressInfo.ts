import { shallowEqual, useSelector } from "react-redux";
import { getCounter, getPagesCount } from "reduxware/selectors";
import { PAGE_SIZE } from "config";

export const useGetProgressInfo = () => {
    const counter = useSelector(getCounter, shallowEqual);
    const pagesCount = useSelector(getPagesCount, shallowEqual);
    const progressInfo = `Exploring set number ${counter} of ${Math.ceil(pagesCount / PAGE_SIZE)}`;

    return progressInfo;
};

export default useGetProgressInfo;
