import React from "react";

import useGetProgressInfo from "../utils/useGetProgressInfo";

const Counter = () => {
    const progressInfo = useGetProgressInfo();
    return <p className="teaser__counter">{progressInfo}</p>;
};

export default React.memo(Counter);
