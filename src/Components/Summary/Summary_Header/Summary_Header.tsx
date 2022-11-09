import { Minifig, SelectedMinifig } from "types/index";
import { Picture, Name } from "Components";

interface Props {
    selectedMinifig: SelectedMinifig;
}
export const Summary_Header = (props: Props) => {
    const { selectedMinifig } = props;

    const { name, num_parts: num, set_img_url: url } = selectedMinifig as Minifig;
    const partsInfo = `There are ${num} parts in this minifig:`;

    return (
        <div className="summary__main items">
            <h2 className="black fromLeft">Summary</h2>
            <div className="image image--no-padding">
                <Picture name={name} url={url} />
                <Name text={name} />
            </div>
            {num && <p>{partsInfo}</p>}
        </div>
    );
};
