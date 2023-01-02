import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { getCounter } from "reduxware/selectors";

const Counter = () => {
    const counter = useSelector(getCounter, shallowEqual);
    return <p className="teaser__counter">{"Exploring set number " + counter}</p>;
};

export default React.memo(Counter);
