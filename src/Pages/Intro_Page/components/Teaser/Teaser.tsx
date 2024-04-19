import { isEmpty } from "lodash";

import Counter from "../Counter";

import { Minifig } from "types";
import { Picture } from "components";

interface Props {
    teaser: Minifig;
}

const TEASER_INFO = "Our stock is large, it will take some time. Besides, admin (shame on him) set 1s interval between requests. That is why it takes so long.";

export const Teaser = (props: Props) => {
    const { teaser } = props;
    if (isEmpty(teaser)) return null;

    return (
        <div className="teaser">
            <p className="teaser__counter">{TEASER_INFO}</p>
            <Counter />
            <Picture imageURL={teaser.set_img_url} name={teaser.name} />
        </div>
    );
};
