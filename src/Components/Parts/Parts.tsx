import uuid from "react-uuid";
import isEmpty from "lodash/isEmpty";

import { NoParts, Part } from "components";
import { PartsItem } from "types";

interface Props {
    parts: PartsItem[];
}

export const Parts = (props: Props) => {
    const { parts } = props;
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
