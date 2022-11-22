import { Minifig } from "types/types";
import { BasicButton, Name, Picture } from "components";
import { ReactEventHandler } from "react";

interface Props {
    minifig: Minifig;
    clickHandler: Function;
    isSelected?: boolean;
    loadHandler: ReactEventHandler<HTMLImageElement>;
}

const Image = (props: Props) => {
    const { minifig, clickHandler, isSelected = false, loadHandler } = props;

    return (
        <BasicButton
            className={isSelected ? "image selected" : "image"}
            onClick={e => {
                e.stopPropagation();
                clickHandler(minifig);
            }}
        >
            <Picture url={minifig.set_img_url} name={minifig.name} loadHandler={loadHandler} />
            <Name text={minifig.name} />
            <a className="link" target="blank" href={minifig.set_url}>
                Show Details
            </a>
        </BasicButton>
    );
};

export default Image;
