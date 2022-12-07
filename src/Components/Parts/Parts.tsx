import uuid from "react-uuid";
import isEmpty from "lodash/isEmpty";

import { NoParts, Part, LoadingIndicator } from "components";
import { PartsItem } from "types";
import { useGetPartsQuery } from "../../api/partsApi";

interface Props {
    minifigsetNumber: string;
}

export const Parts = (props: Props) => {
    const { minifigsetNumber } = props;
    const { data: parts, isFetching, isError } = useGetPartsQuery(minifigsetNumber);
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
