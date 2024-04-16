import { Minifig, SelectedMinifig } from "types";
import { BasicButton, Name, Picture } from "components";
import { ReactEventHandler, useCallback } from "react";

interface Props {
    minifig: Minifig;
    clickHandler: (minifig: SelectedMinifig) => void;
    isSelected?: boolean;
    loadHandler: ReactEventHandler<HTMLImageElement>;
}

export const MinifigCard = (props: Props) => {
    const { minifig, clickHandler, isSelected = false, loadHandler } = props;

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            clickHandler(minifig);
        },
        [minifig]
    );
    const noActionNoPropagation = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
    }, []);

    return (
        <div className={isSelected ? "minifigCard selected" : "minifigCard"} onClick={handleClick}>
            <BasicButton className="flexbox-column-centered textBlack " onClick={handleClick as any}>
                <Picture imageURL={minifig.set_img_url} name={minifig.name} loadHandler={loadHandler} />
                <Name name={minifig.name} />
            </BasicButton>
            <a className="showDetails" aria-label={`Show details of ${minifig.name} set`} target="blank" href={minifig.set_url} tabIndex={-1}>
                <button onClick={noActionNoPropagation}>Show Details</button>
            </a>
        </div>
    );
};

export default MinifigCard;
