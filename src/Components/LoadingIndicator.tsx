import { shallowEqual, useSelector } from "react-redux";
import { getIsLoading } from "reduxware/selectors";

const LoadingIndicator = () => {
    const isLoading = useSelector(getIsLoading, shallowEqual);
    return <div className="loader"></div>;
};

export default LoadingIndicator;
