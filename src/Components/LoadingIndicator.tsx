import { shallowEqual, useSelector } from "react-redux";
import { getIsLoading } from "reduxware/selectors";

const LoadingIndicator = () => {
    const isLoading = useSelector(getIsLoading, shallowEqual);
    if (!isLoading) return null;
    return <div className="loader"></div>;
};

export default LoadingIndicator;
