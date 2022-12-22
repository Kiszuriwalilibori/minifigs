import { Minifigs } from "types";

import { Picture } from "components";

interface Props {
    teasers: Minifigs;
    counter: number;
}

export const Teaser = (props: Props) => {
    const { teasers, counter } = props;
    if (!teasers || !teasers.length) return null;

    const teaser = teasers.at(-1)!;

    return (
        <div className="teaser">
            <p className="teaser__counter">{"Our stock is large, it will take some time..."}</p>
            <p className="teaser__counter">{"Exploring set number " + counter}</p>
            <Picture url={teaser.set_img_url} name={teaser.name} />
        </div>
    );
};
