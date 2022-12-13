import uuid from "react-uuid";
import isEmpty from "lodash/isEmpty";

import { NoParts, Part, LoadingIndicator } from "components";
import { PartsItem } from "types";
import { useGetPartsQuery } from "../../api/partsApi";
import { getSelectedMinifigNumber } from "reduxware/reducers/selectedMinifigSlice";
import { useSelector } from "react-redux";

export const Parts = () => {
    const minifigID = useSelector(getSelectedMinifigNumber);
    const { data: parts, isFetching, isError } = useGetPartsQuery(minifigID);
    if (isFetching) return <LoadingIndicator />;
    if (isError) return <NoParts />;

    return parts && !isEmpty(parts) ? (
        <div className="parts">
            {parts.map((partData: PartsItem) => {
                return <Part data={partData} key={uuid()} />;
            })}
        </div>
    ) : (
        <NoParts />
    );
};
