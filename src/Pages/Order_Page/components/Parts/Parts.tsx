import uuid from "react-uuid";

import { after, isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { useRef } from "react";

import { LoadingIndicator } from "components";
import { Part, NoParts } from "../../components";
import { PartsItem } from "types";
import { isOffline } from "functions";
import { useGetPartsQuery } from "../../utils/partsApi";
import { getSelectedMinifigNumber } from "reduxware/selectors";

export const Parts = () => {
    const minifigID = useSelector(getSelectedMinifigNumber);
    const { data: parts, isFetching, isError } = useGetPartsQuery(minifigID, { skip: isOffline() });
    const refImages = useRef<HTMLDivElement>(null);

    const onLoad = parts
        ? after(parts.length, () => {
              refImages.current?.classList.add("active");
          })
        : () => {};

    if (isFetching) return <LoadingIndicator />;
    if (isError) return <NoParts />;

    return parts && !isEmpty(parts) ? (
        <div className="parts" ref={refImages}>
            {parts.map((partData: PartsItem) => {
                return <Part data={partData} key={uuid()} loadHandler={onLoad} />;
            })}
        </div>
    ) : (
        <NoParts />
    );
};
