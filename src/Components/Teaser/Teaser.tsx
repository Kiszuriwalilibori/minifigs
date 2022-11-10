import { Minifig } from "types";

import { Picture } from "Components";

interface Props {
    teaser: Minifig;
    counter: number;
}

export const Teaser = (props: Props) => {
    const { teaser, counter } = props;
    if (!teaser) return null;
    return (
        <div className="teaser">
            <p>{counter}</p>
            <Picture url={teaser.set_img_url} name={teaser.name} />
        </div>
    );
};
