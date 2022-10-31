import uuid from "react-uuid";

import isEmpty from "lodash/isEmpty";

import LoadingIndicator from "Components/LoadingIndicator";
import { PartsItem } from "types";

import { Part } from "Components";
// interface Props {
//     parts: { part: { part_num: string; name: string; part_img_url: string; part_url: string } }[];
// }
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
        <div>It seems that Dementors sucked all the parts &#128553;</div>
    );
};

/**
 * todo rozważyć przypadek kiedy wyslemy puste z selecta - powinien byc brak części
 */
