import { isEmpty } from "lodash";

import { Minifig } from "types";

import { Picture } from "components";
import Counter from "../Counter";

interface Props {
    teaser: Minifig;
}
export const Teaser = (props: Props) => {
    const { teaser } = props;

    if (isEmpty(teaser)) return null;

    return (
        <div className="teaser">
            <p className="teaser__counter">{"Our stock is large, it will take some time. Besides, admin (shame on him) set 1s interval between requests. That is why it takes that long "}</p>
            <Counter />
            <Picture url={teaser.set_img_url} name={teaser.name} />
        </div>
    );
};
